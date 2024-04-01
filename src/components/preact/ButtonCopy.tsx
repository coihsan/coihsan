import { useState } from "preact/hooks";
export default function ButtonCopy({ copyText = "co.ihsan@gmail.com" }) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(copyText);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      } catch (error) {
        console.error("Error copying email:", error);
      }
    };
  
    return (
      <button
        type="button"
        onClick={handleCopy}
        style={{ color: isCopied ? "#2dd4bf" : "#fafafa" }}
        className="bg-zinc-950 border border-zinc-900 hover:border-zinc-800 flex items-center justify-center gap-3 px-4 py-3 rounded-md hover:bg-zinc-900 transitionAll"
      >
        <img src="src/assets/icons/copy-alt.svg" alt="copy alt" width={24} height={24} />
        <span className="font-semibold">{isCopied ? "Copied!" : "E-Mail"}</span>
      </button>
    );
  }