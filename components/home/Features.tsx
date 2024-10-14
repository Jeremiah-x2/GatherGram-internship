import Image from "next/image";
import React from "react";

const features: {
  title: string;
  description: string;
  svg?: string;
}[] = [
  {
    title: "Event Management",
    description:
      "Increased conversion and expansion on new markets. Dynamic business development",
    svg: "event.svg",
  },
  {
    title: "Guest Interaction",
    description:
      "Execute payouts & refunds straight to your customer's bank account via Finpay. Increase satisfaction and retention",
    svg: "guests.svg",
  },
  {
    title: "Donate and Contribute",
    description:
      "No cards or payment details insertion, no additional registration or app download by your customer's",
    svg: "donate.svg",
  },
  {
    title: "Custom Love Story Page",
    description:
      "Personal informations is encrypted and protected by industry standard banking security",
    svg: "custom.svg",
  },
];

export default function Features() {
  return (
    <section className="px-16 py-[100px] space-y-[100px] bg-[#F2F4F5]">
      <div className="text-center space-y-10">
        <h3 className="font-bold text-[30px]">Our Features</h3>
        <p className="max-w-[750px] mx-auto text-[22px]">
          &quot;Easily create and manage your wedding events, from the ceremony
          to the reception.&quot;
        </p>
      </div>
      <div className="bg-[#212121] min-h-[460px] pl-[35px] pt-4 gap-x-[70px] text-white grid grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col max-h-[445px] gap-4 border- h-full justify-end px-[35px] transition-all ${
              index === 1 ? "text-black bg-[#FFDEF4]" : "text-white"
            } `}
          >
            <Image
              src={`/images/${feature.svg}`}
              width={60}
              height={60}
              alt="Icon"
            />
            <h4 className="font-semibold text-3xl">{feature.title}</h4>
            <p className="min-h-[100px] text-[15px]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
