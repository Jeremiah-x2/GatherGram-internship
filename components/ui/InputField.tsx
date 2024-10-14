"use client";
import { Schema } from "@/app/auth/signup/page";
import React from "react";
import { useForm } from "react-hook-form";

interface InputFieldProps {
  label: string;
  inputType: string;
  labelIdFor: string;
  placeholder: string;
  onHandleChange: () => void;
  register: any;
  name: string;
  errors?: any;
}

export default function InputField({
  label,
  onHandleChange,
  inputType,
  labelIdFor,
  placeholder,
  register,
  name,
  errors,
}: InputFieldProps) {
  return (
    <div className="flex flex-col w-full space-y-[8px]">
      <label htmlFor={labelIdFor} className="text-base font-semibold">
        {label}
      </label>
      <input
        type={inputType}
        id={labelIdFor}
        placeholder={placeholder}
        onChange={() => onHandleChange}
        className="px-4 py-3 rounded-lg border-[1px] border-[#323232] border-opacity-40 bg-white"
        {...register(name)}
      />
      {errors && errors[name] && (
        <div className="w-full text-sm text-[#f51629] text-wrap">
          {errors[name].message}
        </div>
      )}
    </div>
  );
}
