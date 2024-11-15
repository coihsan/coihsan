import Lenis from 'lenis'
import gsap from 'gsap';

const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time: number) => {
  lenis.raf(time * 1000); 
});

gsap.ticker.lagSmoothing(0);