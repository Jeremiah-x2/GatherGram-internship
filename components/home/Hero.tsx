import Image from "next/image";
import React from "react";

const users = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png"];

export default function Hero() {
  return (
    <section>
      <div className="px-8 lg:px-[186px] py-[169px] flex gap-32 items-center">
        <section className="w-full lg:w-1/2 h-full min-h-[608px] flex flex-col justify-betwee">
          <div className="border2 space-y-4 mb-12">
            <h3
              className={`font-bold text-6xl leading-[80px] lg:text-[82px] lg:leading-[100px] tracking-normal`}
            >
              &quot;Plan, Share, and Celebrate Your Big Day in One Place&quot;
            </h3>
            <p className="text-lg lg:text-[22px] leading-[22px]">
              &quot;Create unforgettable memories with a personalized wedding
              platform for you and your guests
            </p>
          </div>

          <div className="flex justify-between gap-[12px] flex-wrap">
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

        <section className="hidden lg:block">
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

      <section className="bg-[#212121] justify-between items-center flex px-8 flex-col gap-4 lg:flex-row lg:px-[176px] text-white py-8">
        <p className="max-w-[800px] text-2xl lg:text-4xl">
          &quot;Powerful tool to manage your wedding, engage guests, and
          celebrate together effortlessly.&quot;
        </p>
        <div className="flex items-center">
          <div className="flex items-center gap-4">
            <span className="w-[112px] h-[112px] inline-flex items-center justify-center bg-[#EB44B2] rounded-full">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.1102 27.9135C39.1573 34.0499 34.2209 39.0626 28.0846 39.1097C21.9482 39.1568 16.9355 34.2204 16.8884 28.0841C16.8413 21.9477 21.7776 16.935 27.914 16.8879C34.0504 16.8408 39.0631 21.7771 39.1102 27.9135Z"
                  fill="white"
                />
                <path
                  d="M52.9987 27.8088L44.6655 27.8728"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 28.1924L11.3332 28.1284"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.807 3.00007L27.871 11.3333"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.1892 53L28.1253 44.6668"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p className="max-w-[110px] border-">Connect with your guests</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-[112px] h-[112px] inline-flex items-center justify-center bg-[#EB44B2] rounded-full">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2652 3.87802C18.4118 -1.29267 25.5882 -1.29267 27.7348 3.87802L29.23 7.47958C30.1091 9.59713 32.0392 11.0651 34.2778 11.3188L38.4503 11.7916C43.7196 12.3888 45.896 19.0068 42.0476 22.7305L38.5049 26.1584C36.9473 27.6656 36.2591 29.8853 36.6834 32.0332L37.5388 36.3631C38.6215 41.844 32.7498 45.9821 28.1155 43.0044L25.3173 41.2064C23.2898 39.9036 20.7102 39.9036 18.6827 41.2064L15.8845 43.0044C11.2502 45.9821 5.37854 41.844 6.46124 36.3631L7.31659 32.0332C7.74089 29.8853 7.05265 27.6656 5.49505 26.1584L1.95241 22.7305C-1.89596 19.0068 0.280417 12.3888 5.54973 11.7916L9.72219 11.3188C11.9608 11.0651 13.8909 9.59713 14.77 7.47958L16.2652 3.87802Z"
                  fill="white"
                />
              </svg>
            </span>
            <p className="max-w-[110px] border-">Easy event management</p>
          </div>
        </div>
      </section>
    </section>
  );
}
