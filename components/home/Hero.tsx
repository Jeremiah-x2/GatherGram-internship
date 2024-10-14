import Image from "next/image";
import React from "react";

const users = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png"];

export default function Hero() {
  return (
    <section>
      <div className="px-[186px] py-[169px] flex gap-32 items-center">
        <section className="w-1/2 h-full min-h-[608px] flex flex-col justify-betwee">
          <div className="border2 space-y-4 mb-12">
            <h3
              className={`font-bold text-[82px] leading-[100px] tracking-normal`}
            >
              &quot;Plan, Share, and Celebrate Your Big Day in One Place&quot;
            </h3>
            <p className="text-[22px] leading-[22px]">
              &quot;Create unforgettable memories with a personalized wedding
              platform for you and your guests
            </p>
          </div>

          <div className="flex justify-between gap-[12px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-11 w-[452px] h-[72px] flex-1 bg-[#F5F5F5] py-5 rounded-full"
            />{" "}
            <button className="px-9 py-5 rounded-full w-[176px] text-white font-bold bg-[#D934A1]">
              Get Started
            </button>
          </div>

          <div className="mt-10 flex items-center gap-[10px]">
            <ul className="">
              {users.map((item, index: number) => (
                <li
                  key={index}
                  className={`inline-block relative [&:not(:first-child)]: -left-[${Number(
                    24 * index
                  ).toString()}px]`}
                >
                  <Image
                    src={`/images/${item}`}
                    width={60}
                    height={60}
                    alt={item}
                  />
                </li>
              ))}
            </ul>
            <p className="text-sm">+2K People Joined!</p>
          </div>
        </section>

        <section>
          <div>
            <Image
              src={"/images/hero.svg"}
              width={552}
              height={552}
              alt="Hero"
            />
          </div>
        </section>
      </div>

      <section className="bg-[#212121] justify-between flex px-[176px] text-white py-8">
        <p className="max-w-[800px] text-[36px]">
          &quot;Powerful tool to manage your wedding, engage guests, and
          celebrate together effortlessly.&quot;
        </p>
        <div className="flex items-center">
          <div className="flex items-center gap-4">
            <span className="w-[60px] h-[60px] bg-pink-400 rounded-full inline-block"></span>
            <p className="max-w-[110px] border-">Connect with your guests</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-[60px] h-[60px] bg-pink-400 rounded-full inline-block"></span>
            <p className="max-w-[110px] border-">Easy event management</p>
          </div>
        </div>
      </section>
    </section>
  );
}
