"use client";
import React from "react";

interface InputFieldProps {
  label: string;
  inputType: string;
  labelIdFor: string;
  placeholder: string;
  onHandleChange: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <div className="flex flex-col w-full space-y-[8px] relative">
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
        <div className="w-full text-sm text-[#f51629] absolute -bottom-6 text-wrap">
          {errors[name].message}
        </div>
      )}
    </div>
  );
}
