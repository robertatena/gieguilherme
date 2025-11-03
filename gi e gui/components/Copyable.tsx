"use client";
import React from "react";
import { Copy, Check } from "lucide-react";
export const Copyable: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      onClick={async () => { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(()=>setCopied(false),1500); }}
      className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-gray-300 hover:border-gray-400 shadow-sm"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copiado!" : "Copiar"}
    </button>
  );
};
