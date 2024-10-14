import { montserrat } from "@/lib/fonts";
import React from "react";
import Logo from "./ui/Logo";

const navigate: string[] = [
  "Home",
  "Features",
  "How It Works",
  "Pricing",
  "About",
  "Contact",
];

const support: string[] = ["FAQ's", "Contact us", "Support Center", "Security"];

const partner: string[] = ["Our Partners", "Subscribers"];

export default function Footer() {
  return (
    <footer>
      <div className="px-[180px] py-16 bg-[#212121] text-white">
        <div className="flex justify-between mb-16">
          <div className="space-y-[10px]">
            <h5 className="font-semibold text-2xl">Join our newsletter</h5>
            <p className="text-xl">
              We&apos;ll send you a nice letter once per week. No spam.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-[14px] py-[10px] w-[269px] h-11 border-[1px] border-[#D0D5DD] bg-white rounded-lg"
            />
            <button className="font-semibold px-[10px] flex items-center py-[18px] bg-[#F5169C] shadow-md border-[1px] border-[#F5169C] rounded-lg text-base h-11">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <Logo color="white" />
            <p className="w-[289px] my-6">
              Medfysio provides clear and easy-to- understand health-related
              information resource or services.
            </p>
            <div></div>
          </div>

          <div className="flex gap-[120px]">
            <div className="space-y-4">
              <p className="font-semibold text-base">Navigate</p>
              <ul>
                {navigate.map((item, index) => (
                  <li key={index} className="font-light leading-10">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-base">Support Us</p>
              <ul>
                {support.map((item, index) => (
                  <li key={index} className="font-light leading-10">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-base">Partner</p>
              <ul>
                {partner.map((item, index) => (
                  <li key={index} className="font-light leading-10">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-base">Contact Us</p>
              <p className="w-[204px] leading-10">
                GatherGram@business.com +61 7 7010 6803
              </p>
              <button
                className={`font-semibold ${montserrat.className} w-[149px] h-11 rounded-full bg-[#F5169C]`}
              >
                Help Center
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-[201px] py-[15px]">
        <p>&copy; 2024 GatherGram, We love our users!</p>
        <p>Copyright &copy; 2024 all rights reserved</p>
        <ul className="flex gap-4">
          <li>Terms & Conditions </li>
          <li>Privacy Policy </li> <li>Sitemap </li>
        </ul>
      </div>
    </footer>
  );
}
