import { manrope } from "@/lib/fonts";
import { MoveRight } from "lucide-react";
import React from "react";

export default function Ready() {
  return (
    <section className="px-12 lg:px-[140px] py-[180px] bg-[#FFD0EC]">
      <div className="px-8 lg:pl-[120px] py-[75px] lg:pr-[74px] flex flex-col-reverse lg:flex-row justify-between bg-[#212121] rounded-2xl text-white">
        <div className="space-y-12">
          <div className="space-y-7">
            <h3 className={`${manrope.className} font-semibold text-[80px]`}>
              Ready to Plan Your Wedding?
            </h3>
            <p className="max-w-[780px] text-xl leading-9">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et aliqua. Ut enim ad minim
              veniam, quis ut aliquip ex ea commodo consequat.&quot;
            </p>
          </div>
          <button className="flex items-center gap-4 px-10 py-6 bg-[#FFD0EC] text-black rounded-full text-xl font-medium">
            Create Your Event for Free <MoveRight size={24} />
          </button>
        </div>

        <div className="w-full h-[400px] lg:w-[567px] lg:h-[480px] bg-red-400 rounded-2xl"></div>
      </div>
    </section>
  );
}
