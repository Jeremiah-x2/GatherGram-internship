"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import AuthDivider from "@/components/ui/AuthDivider";
import ThirdPartyBtn from "@/components/ThirdPartyBtn";
import Link from "next/link";
import { getName } from "country-list";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { CountryDropdown, MobileDropdown } from "@/components/ui/DropdownList";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "@/components/ui/InputField";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type SignupData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
};

const formSchema: ZodType<SignupData> = z.object({
  fullName: z
    .string()
    .min(4, { message: "Name should be more than 4 characters" })
    .max(50, { message: "Name should be less than 50 characters" }),
  email: z.string().email({ message: "Provide a valid email address" }),
  phoneNumber: z
    .string()
    .regex(/^\(?([2-9][0-9]{2})\)?[-.● ]?([2-9][0-9]{2})[-.● ]?([0-9]{4})$/),
  password: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,])[A-Za-z\d@$!%*?&.,]+$/,
      {
        message:
          "Password must be at least 8 characters, contain at least one uppercase letter, one number, and one special character.",
      }
    ),
});

export type Schema = z.infer<typeof formSchema>;

export default function SignUp() {
  const [countries, setCountries] = useState<
    { name: string | undefined; code: string; twoDigCode: string }[] | null
  >(null);
  const [about, setAbout] = useState<{ isActive: boolean; role: string }[]>([
    { isActive: true, role: "I am event organizer" },
    { isActive: false, role: "I am Bride/Groom" },
  ]);
  console.log(getCountries());

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  });

  useEffect(() => {
    const countryList = getCountries().map((countryCode) => ({
      name: getName(countryCode),
      code: `+${getCountryCallingCode(countryCode)}`,
      twoDigCode: countryCode,
    }));
    setCountries(countryList);
  }, []);

  async function signUpUser(values: Schema) {
    try {
      const res = await fetch(
        "https://jellyfish-app-sjgrf.ondigitalocean.app/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      const data = await res.json();
      if (res.ok) {
        Cookies.set("token", data.token);
        Cookies.set("user", values.fullName);
        toast.success("Sign In Successful");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex min-h-[100dvh] max-h-[1024px] w-full relative">
      <div className="min-w-[50%] max-w-[720px]  overflow-hidden relative">
        <Image
          src={"/images/couple.png"}
          fill={true}
          alt="Couples"
          objectFit="fill"
          className="relative"
        />
      </div>
      <div className="flex-1 w-[50%] gap-[12px] absolute right-0 px-[70px] py-[64px] h-full overflow-scroll">
        <div className="justify-center mb-[80px] py-6 px-6 bg-[#F5169C] border border-[#505050] rounded-2xl bg-opacity-5 space-y-6">
          <p className="text-[#F5169C] font-semibold text-[22px]">
            Welcome! Please tell us a bit about yourself
          </p>
          <ul className="space-y-[15px] text-lg">
            {about.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => {
                  setAbout((prev) =>
                    [...prev].map((item, i) => {
                      if (i === index) {
                        return { ...item, isActive: true };
                      } else {
                        return { ...item, isActive: false };
                      }
                    })
                  );
                }}
              >
                {item.isActive ? (
                  <span className="inline-flex h-4 w-4 rounded-full items-center justify-center bg-white border-4 border-[#F5169C] box-content">
                    <span className="inline-block w-[10px] h-[10px] rounded-full bg-[#F5169C]"></span>
                  </span>
                ) : (
                  <span className="inline-block w-5 h-5 rounded-full border-2 box-content border-[#231F20]"></span>
                )}
                {item.role}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-[30px]">
          <h3 className="text-[30px] font-bold text-[#110D06]">Signup</h3>
          <p className="w-[455px] text-base font-normal">
            Enter your details below to signup or sign in with existing account.
          </p>
        </div>
        <form
          className="space-y-[30px] bg-white"
          onSubmit={handleSubmit(signUpUser)}
        >
          <InputField
            inputType="email"
            label="Email Address"
            labelIdFor="email"
            onHandleChange={() => {}}
            placeholder="Enter email"
            register={register}
            name="email"
            errors={errors}
          />
          <InputField
            inputType="text"
            label="Full Name"
            labelIdFor="fullName"
            onHandleChange={() => {}}
            placeholder="Enter your name"
            register={register}
            name="fullName"
            errors={errors}
          />

          {countries && (
            <>
              <CountryDropdown dropdownData={countries} />
              <MobileDropdown
                dropdownData={countries}
                inputNumber={{ register, name: "phoneNumber", errors }}
              />
            </>
          )}

          <InputField
            inputType="password"
            label="Password"
            labelIdFor="password"
            onHandleChange={() => {}}
            placeholder="Enter password"
            register={register}
            name="password"
            errors={errors}
          />

          <button
            type="submit"
            className="bg-[#f5169c] w-full px-6 py-4 text-white text-base font-semibold rounded-lg"
          >
            Sign up
          </button>
        </form>
        <p className="text-[#323232] mt-[30px]">
          By signing up, I agree to the{" "}
          <Link
            href={"terms-and-conditions"}
            className="underline underline-offset-4 text-[#247faf]"
          >
            terms and conditions
          </Link>{" "}
          and have read the{" "}
          <Link
            href={"privacy-police"}
            className="underline text-[#247faf] underline-offset-4"
          >
            privacy policy
          </Link>
        </p>
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
