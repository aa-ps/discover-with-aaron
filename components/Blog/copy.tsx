"use client";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function CopyButton({ code }: { code: string }) {
  const [copyOk, setCopyOk] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(code);
    setCopyOk(true);
    setTimeout(() => {
      setCopyOk(false);
    }, 500);
  };

  return (
    <button
      className="text-theme-white absolute top-0 right-0 p-2 text-xl "
      onClick={handleClick}
    >{copyOk ? <IoCheckmarkDoneOutline />
     : <MdContentCopy />}</button>
  );
}
