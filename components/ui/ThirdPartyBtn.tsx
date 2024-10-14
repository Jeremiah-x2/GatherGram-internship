import Image from "next/image";
import React from "react";

export default function ThirdPartyBtn({
  thirdParty,
  icon,
}: {
  thirdParty: string;
  icon: string;
}) {
  return (
    <button className="flex flex-1 justify-center items-center gap-[10px] px-6 py-4 rounded-lg text-[#323232] text-base font-semibold border-[1px] border-[#323232]">
      <Image src={`/images/${icon}`} width={16} height={16} alt={thirdParty} />
      {thirdParty}
    </button>
  );
}
