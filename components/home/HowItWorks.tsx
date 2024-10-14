import React from "react";

const howItWorks: { title: string; desc: string }[] = [
  {
    title: "Sign Up",
    desc: "Create your free account and get started in minutes.",
  },
  {
    title: "Positive Reviews",
    desc: "Turpis nasceturvel malesuada enim eget eget.",
  },
  {
    title: "Regular Users",
    desc: "Scale your workload without waiting for hte engineering team",
  },
  {
    title: "Team Members",
    desc: "Turpis nasceturvel malesuada enim eget eget.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#212121] py-[120px] relative text-white space-y-10">
      <div className="max-w-500px mx-[145px] text-center">
        <h3 className="font-semibold text-[48px] leading-[60px]">
          How It Works
        </h3>
        <p className="text-[22px] max-w-[821px] mx-auto">
          &quot;Easily create and manage your wedding events, from the ceremony
          to the reception.&quot;
        </p>
      </div>
      <div className="text-black grid grid-cols-1 md:grid-cols-2 justify-items-center lg:flex gap-6 bg-[url('/images/path.svg')] bg-cover lg:h-[433px] items-center py-2 px-8 lg:px-[145px]">
        {howItWorks.map((item, index) => (
          <div
            key={index}
            className={`w-[390px] h-[296px] border-[1px] border-black  rounded-[20px] px-7 py-[70px] ${
              index === 1 ? "bg-[#FFDEF4]" : "bg-[#FDFDFD]"
            }`}
          >
            <p className="text-[44px]">Icon here</p>
            <p className="text-[24px]">{item.title}</p>
            <p className="text-18px">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
