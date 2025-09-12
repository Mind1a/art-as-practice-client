"use client";

import { useState } from "react";

const ItemId = () => {
  const [copied, setCopied] = useState(false);
  const id = "ID879";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="lg:hidden pt-14 pb-2 md:pl-6">
      <button
        onClick={handleCopy}
        className="inline-block px-4 py-1 border border-[#FFB098] border-dashed rounded-lg font-semibold text-[#F2430D] text-xl cursor-pointer"
      >
        {id}
      </button>
      {copied && (
        <span className="ml-2 font-medium text-green-600 text-sm">Copied!</span>
      )}
    </div>
  );
};

export default ItemId;
