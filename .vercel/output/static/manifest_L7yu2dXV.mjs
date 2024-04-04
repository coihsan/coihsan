import 'cookie';
import 'kleur/colors';
import './chunks/astro_CSqObcGk.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/static","routes":[{"file":"file:///home/coihsan/coihsan/.vercel/output/static/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/coihsan/coihsan/.vercel/output/static/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/coihsan/coihsan/.vercel/output/static/stack/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/stack","isIndex":false,"type":"page","pattern":"^\\/stack\\/?$","segments":[[{"content":"stack","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/stack.astro","pathname":"/stack","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/coihsan/coihsan/.vercel/output/static/themes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/themes","isIndex":true,"type":"page","pattern":"^\\/themes\\/?$","segments":[[{"content":"themes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/themes/index.astro","pathname":"/themes","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/coihsan/coihsan/.vercel/output/static/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://coihsan.vercel.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/coihsan/coihsan/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/coihsan/coihsan/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/coihsan/coihsan/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/coihsan/coihsan/src/pages/stack.astro",{"propagation":"none","containsHead":true}],["/home/coihsan/coihsan/src/pages/themes/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/coihsan/coihsan/src/components/Projects.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/coihsan/coihsan/src/components/Themes.astro",{"propagation":"in-tree","containsHead":false}],["/home/coihsan/coihsan/src/pages/projects/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/coihsan/coihsan/src/pages/themes/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/themes/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/themes/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/projects/[...slug]@_@astro":"pages/projects/_---slug_.astro.mjs","\u0000@astro-page:src/pages/stack@_@astro":"pages/stack.astro.mjs","\u0000@astro-page:src/pages/themes/index@_@astro":"pages/themes.astro.mjs","\u0000@astro-page:src/pages/themes/[...slug]@_@astro":"pages/themes/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_L7yu2dXV.mjs","/home/coihsan/coihsan/src/content/projects/mangolabs.md?astroContentCollectionEntry=true":"chunks/mangolabs_D5QSuMtP.mjs","/home/coihsan/coihsan/src/content/projects/taskmanager.md?astroContentCollectionEntry=true":"chunks/taskmanager_DFO08rNT.mjs","/home/coihsan/coihsan/src/content/projects/yourgrandpa.md?astroContentCollectionEntry=true":"chunks/yourgrandpa_DL8KmbJC.mjs","/home/coihsan/coihsan/src/content/themes/berrynet-v1.md?astroContentCollectionEntry=true":"chunks/berrynet-v1_CTTacXS1.mjs","/home/coihsan/coihsan/src/content/themes/bhadrikacipta.md?astroContentCollectionEntry=true":"chunks/bhadrikacipta_hhe6YyVg.mjs","/home/coihsan/coihsan/src/content/themes/jhondoe.md?astroContentCollectionEntry=true":"chunks/jhondoe_CRsBQCAg.mjs","/home/coihsan/coihsan/src/content/themes/jhonsmith.md?astroContentCollectionEntry=true":"chunks/jhonsmith_BzyldiiC.mjs","/home/coihsan/coihsan/src/content/themes/karsamahasura.md?astroContentCollectionEntry=true":"chunks/karsamahasura_Bn7NKZ7O.mjs","/home/coihsan/coihsan/src/content/themes/zincdesign.md?astroContentCollectionEntry=true":"chunks/zincdesign_CYb_0GRG.mjs","/home/coihsan/coihsan/src/content/projects/mangolabs.md?astroPropagatedAssets":"chunks/mangolabs_owRcDz0e.mjs","/home/coihsan/coihsan/src/content/projects/taskmanager.md?astroPropagatedAssets":"chunks/taskmanager_DvZ4lg9o.mjs","/home/coihsan/coihsan/src/content/projects/yourgrandpa.md?astroPropagatedAssets":"chunks/yourgrandpa_CVFZPYd_.mjs","/home/coihsan/coihsan/src/content/themes/berrynet-v1.md?astroPropagatedAssets":"chunks/berrynet-v1_UpDC2N6I.mjs","/home/coihsan/coihsan/src/content/themes/bhadrikacipta.md?astroPropagatedAssets":"chunks/bhadrikacipta_B3QPq6hf.mjs","/home/coihsan/coihsan/src/content/themes/jhondoe.md?astroPropagatedAssets":"chunks/jhondoe_DlLTYnHr.mjs","/home/coihsan/coihsan/src/content/themes/jhonsmith.md?astroPropagatedAssets":"chunks/jhonsmith_R90QzOt9.mjs","/home/coihsan/coihsan/src/content/themes/karsamahasura.md?astroPropagatedAssets":"chunks/karsamahasura_Be4HAF-5.mjs","/home/coihsan/coihsan/src/content/themes/zincdesign.md?astroPropagatedAssets":"chunks/zincdesign_DR0C97NX.mjs","/home/coihsan/coihsan/src/content/projects/mangolabs.md":"chunks/mangolabs_BMwoNbLB.mjs","/home/coihsan/coihsan/src/content/projects/taskmanager.md":"chunks/taskmanager_EzIu0Ksb.mjs","/home/coihsan/coihsan/src/content/projects/yourgrandpa.md":"chunks/yourgrandpa_DuC7VSy2.mjs","/home/coihsan/coihsan/src/content/themes/berrynet-v1.md":"chunks/berrynet-v1_CHfKdnnY.mjs","/home/coihsan/coihsan/src/content/themes/bhadrikacipta.md":"chunks/bhadrikacipta_Cjls7ux_.mjs","/home/coihsan/coihsan/src/content/themes/jhondoe.md":"chunks/jhondoe_4_GS_Frm.mjs","/home/coihsan/coihsan/src/content/themes/jhonsmith.md":"chunks/jhonsmith_DI8LzjWA.mjs","/home/coihsan/coihsan/src/content/themes/karsamahasura.md":"chunks/karsamahasura_CZs426L_.mjs","/home/coihsan/coihsan/src/content/themes/zincdesign.md":"chunks/zincdesign_B9BcamU5.mjs","/home/coihsan/coihsan/src/components/preact/FontMode":"_astro/FontMode.CMBE5LQo.js","/home/coihsan/coihsan/src/components/preact/ButtonCopy":"_astro/ButtonCopy.DCEMd-7j.js","/astro/hoisted.js?q=1":"_astro/hoisted.D3mi2-zj.js","astro:scripts/page.js":"_astro/page.BOzSQxG5.js","@astrojs/preact/client.js":"_astro/client.CgNHdcjN.js","/home/coihsan/coihsan/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.n9WpKO32.js","/astro/hoisted.js?q=0":"_astro/hoisted.DKV-3yHV.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/page.BOzSQxG5.js","/file:///home/coihsan/coihsan/.vercel/output/static/404.html","/file:///home/coihsan/coihsan/.vercel/output/static/projects/index.html","/file:///home/coihsan/coihsan/.vercel/output/static/stack/index.html","/file:///home/coihsan/coihsan/.vercel/output/static/themes/index.html","/file:///home/coihsan/coihsan/.vercel/output/static/index.html"],"buildFormat":"directory"});

export { manifest };
