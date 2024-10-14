import Link from "next/link";
import React from "react";
import Logo from "./ui/Logo";

export default function Header() {
  return (
    <header className="flex px-[186px] py-4 items-center justify-between">
      <div>
        <Logo color="black" />
      </div>

      <nav>
        <ul className="flex items-center gap-9">
          <li>Home</li>
          <li>Features</li>
          <li>How it works</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="flex items-center gap-12">
        <Link href={"/signin"}>Sign in</Link>
        <Link
          href={"/signup"}
          className="bg-[#212121] text-white px-9 py-5 font-bold rounded-full"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
