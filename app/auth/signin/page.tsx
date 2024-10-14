"use client";
import Image from "next/image";
import React from "react";
import { styleScript } from "@/lib/fonts";
import InputField from "@/components/ui/InputField";
import AuthDivider from "@/components/ui/AuthDivider";
import ThirdPartyBtn from "@/components/ThirdPartyBtn";
import Link from "next/link";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

type SignInData = {
  email: string;
  password: string;
};

const formSchema: ZodType<SignInData> = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type Schema = z.infer<typeof formSchema>;

export default function SignIn() {
  const { register, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });
  const router = useRouter();

  async function signInUser(values: Schema) {
    try {
      const res = await fetch(
        "https://jellyfish-app-sjgrf.ondigitalocean.app/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      const data = await res.json();
      if (res.ok) {
        Cookies.set("token", data.token);
        Cookies.set("user", "Helo");
        toast.success("Sign In Successful");
        router.push("/");
      } else {
        toast.error("Couldn't sign in");
        toast.info(data.message);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("An Error Occured");
    }
  }
  return (
    <div className="flex min-h-[100dvh] w-full relative gap-[74p">
      <div className="min-w-[50%] max-w-[720px] max-h-[1024px]  overflow-hidden relative">
        <Image
          src={"/images/couple.png"}
          fill={true}
          alt="Couples"
          objectFit="fill"
          className="relative"
        />
      </div>
      <div className="flex-1 gap-[12px] px-[74px] py-[64px] h-full overflow-hidden">
        <div className="flex items-center justify-center mb-[80px]">
          <svg
            width="48"
            height="60"
            viewBox="0 0 48 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8459 0C10.6962 0 0 10.6983 0 23.8459C0 40.8369 21.6178 58.1817 22.5381 58.9103C22.9035 59.1995 23.3542 59.3596 23.8202 59.3657C24.2861 59.3718 24.7409 59.2235 25.1137 58.944C26.0361 58.2512 47.6939 41.7488 47.6939 23.8459C47.6918 10.6983 36.9956 0 23.8459 0ZM23.8501 39.7312C14.9208 39.7312 7.65731 32.4678 7.65731 23.5405C7.65731 14.6133 14.9208 7.34984 23.8501 7.34984C32.7752 7.34984 40.0366 14.6133 40.0366 23.5405C40.0366 32.4699 32.7752 39.7312 23.8501 39.7312ZM23.2183 33.7861C22.7024 33.5102 10.692 26.7627 13.7078 18.6084C13.8173 18.3704 15.163 15.7758 17.9829 15.1883C19.8319 14.805 21.8052 15.3673 23.8628 16.8562C25.9182 15.3673 27.8809 14.8029 29.7321 15.1883C32.5604 15.7758 33.9019 18.3704 33.9525 18.4799C37.0335 26.7627 25.0126 33.4913 24.5072 33.7861C23.9512 34.1104 23.2183 33.7861 23.2183 33.7861Z"
              fill="#F5169C"
            />
          </svg>
          <span
            className={`${styleScript.className} text-[#f5169c] text-[24.74px]`}
          >
            GatherGram
          </span>
        </div>

        <div className="mb-[30px]">
          <h3 className="text-[30px] font-bold text-[#110D06]">Get Started</h3>
          <p className="w-[455px] text-base font-normal">
            Enter your email address below to login to existing account or sign
            up with new account.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(signInUser)}
          className="space-y-[30px] bg-white"
        >
          <InputField
            inputType="email"
            label="Email Address"
            labelIdFor="email"
            placeholder="Enter email"
            onHandleChange={() => {}}
            register={register}
            name="email"
          />
          <InputField
            inputType="password"
            label="Password"
            labelIdFor="password"
            placeholder="Enter password"
            onHandleChange={() => {}}
            register={register}
            name="password"
          />

          <button className="bg-[#f5169c] w-full px-6 py-4 text-white text-base font-semibold rounded-lg">
            Get Started
          </button>
        </form>
        <div className="space-y-[34px] mt-[42px]">
          <AuthDivider />

          <div className="flex gap-4">
            <ThirdPartyBtn thirdParty={"Google"} icon="google.svg" />
            <ThirdPartyBtn thirdParty={"Facebook"} icon="facebook.svg" />
            <ThirdPartyBtn thirdParty={"Apple"} icon="apple.svg" />
          </div>

          <p className="text-[#323232] text-center">
            Dont&apos;t have an account?{" "}
            <Link href={"/auth/signup"} className="text-[#7E0C65]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
