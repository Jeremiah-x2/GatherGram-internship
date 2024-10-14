"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Welcome({
  setShowWelcome,
  userName,
}: {
  setShowWelcome: (e: boolean) => void;
  userName: string;
}) {
  const router = useRouter();
  return (
    <div className="fixed w-full h-full flex items-center justify-center z-50 bg-slate-800 bg-opacity-40">
      <div className="w-[400px] relative h-[200px] bg-pink-600 gap-8 flex items-center flex-col justify-center rounded-2xl text-white">
        <div className="absolute top-4 cursor-pointer right-4">
          <X
            stroke="black"
            size={28}
            onClick={() => {
              setShowWelcome(false);
              router.push("/");
            }}
          />
        </div>
        <p className="font-semibold text-3xl">Welcome {userName}</p>
        <div>
          <p>
            Proceed to{" "}
            <Link
              href={`/portal`}
              className="bg-white px-5 py-2 text-black rounded-lg font-semibold shadow-md"
            >
              Portal
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
