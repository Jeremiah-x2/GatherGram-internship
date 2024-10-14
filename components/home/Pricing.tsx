import { Check } from "lucide-react";
import React from "react";

const basicFeatures: string[] = [
  "Access to basic features",
  "Attend events",
  "Basic reporting + analytics",
  "Automatic updates",
  "Up to 10 individual users",
  "Backup your account",
  "20GB individual data",
  "Audit log and notes",
  "Basic chat support",
  "Feature requests",
];

const businessFeatures: string[] = [
  "200+ integrations",
  "Advanced custom fields",
  "Advanced reporting",
  "Audit log and data history",
  "Up to 20 individual users",
  "Backup your account",
  "40GB individual data",
  "Personalised service",
  "Priority chat support",
  "+ many more...",
];

export default function Pricing() {
  return (
    <section className="py-[100px]">
      <div className="text-center space-y-10">
        <div className="">
          <p className="font-semibold text-[#7F56D9]">Pricing</p>
          <div className="space-y-6">
            <h3 className="font-semibold text-[48px]">
              Plans that fit your scale
            </h3>
            <p className="text-xl">
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </p>
          </div>
        </div>
        <div className="space-x-2 bg-[#F9FAFB] border-[1px] inline-block p-[6px] border-[#F2F4F7] rounded-lg">
          <button className="px-[14px] py-[10px] bg-white rounded-md text-[#344054] shadow-md">
            Monthly billing
          </button>
          <button className="text-[#667085]">
            Annual billing{" "}
            <span className="text-[#344054] px-[10px] py-[2px] rounded-full bg-[#F2F4F7] text-sm">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row px-8 justify-center gap-8 mt-20">
        <div className="border-[1px] rounded-2xl shadow-lg">
          <div className="px-8 pt-8 pb-6 flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-2xl">Basic plan</h4>
              <p className="text-base">
                Our most popular plan for small teams.
              </p>
            </div>
            <div>
              <sup className="font-semibold text-[36px] -tracking-[2px]">$</sup>
              <span className="font-semibold text-[60px]">0</span>
              <sub className="text-[#475467]">per month</sub>
            </div>
          </div>

          <div className="px-8 pt-8 pb-10 border-y-[1px] space-y-6">
            <div className="space-y-1">
              <h5 className="font-semibold">FEATURES</h5>
              <p>
                Everything in our <span>free plan</span>
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {basicFeatures.map((item: string, index: number) => (
                <li key={index} className="flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#D1FADF]">
                    <Check stroke="#12B76A" size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="px-8 py-8">
            <button className="bg-[#D934A1] w-full px-5 py-3 rounded-lg font-semibold text-white">
              Get Started
            </button>
          </div>
        </div>

        <div className="border-[1px] rounded-2xl shadow-lg">
          <div className="px-8 pt-8 pb-6 flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-2xl">
                Business plan{" "}
                <span className="py-[2px] px-[10px] bg-[#F9F5FF] text-[#6941C6] text-sm font-medium rounded-full">
                  Popular
                </span>
              </h4>
              <p className="text-base">
                Our most popular plan for small teams.
              </p>
            </div>
            <div>
              <sup className="font-semibold text-[36px] -tracking-[2px]">$</sup>
              <span className="font-semibold text-[60px]">0</span>
              <sub className="text-[#475467]">per month</sub>
            </div>
          </div>

          <div className="px-8 pt-8 pb-10 border-y-[1px] space-y-6">
            <div className="space-y-1">
              <h5 className="font-semibold">FEATURES</h5>
              <p>
                Everything in our <span>basic plan</span> plus...
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {businessFeatures.map((item: string, index: number) => (
                <li key={index} className="flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#D1FADF]">
                    <Check stroke="#12B76A" size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="px-8 py-8">
            <button className="bg-[#D934A1] w-full px-5 py-3 rounded-lg font-semibold text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
