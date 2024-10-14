"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../ui/Logo";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <header className="flex px-8 lg:px-[186px] w-full py-4 items-center justify-between">
      <div>
        <Logo color="black" />
      </div>

      <div
        className={`fixed ${
          !showMenu ? "hidden" : "block"
        } top-6 left-1/2 bg-white lg:bg-transparent lg:shadow-none shadow-lg py-8 z-30 space-y-4 rounded-xl -translate-x-1/2 w-10/12 lg:relative lg:top-0 lg:right-0 flex-1 lg:flex justify-between items-center`}
      >
        <button
          className="absolute top-4 right-4 block lg:hidden"
          onClick={() => setShowMenu(false)}
        >
          <X size={30} />
        </button>
        <nav className="flex-1 flex justify-center">
          <ul className="flex flex-col lg:flex-row gap-4 items-center lg:gap-9">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">How it works</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </nav>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-12">
          <Link href={"/auth/signin"}>Sign in</Link>
          <Link
            href={"/auth/signup"}
            className="bg-[#212121] text-white px-6 py-2 lg:px-9 lg:py-5 font-bold rounded-full"
          >
            Get Started
          </Link>
        </div>
      </div>
      <button className="block lg:hidden" onClick={() => setShowMenu(true)}>
        <Menu />
      </button>
    </header>
  );
}
