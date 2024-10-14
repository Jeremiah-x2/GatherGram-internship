import Image from "next/image";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface ICountry {
  name: string | undefined;
  code: string;
  twoDigCode: string;
}

export function CountryDropdown({
  dropdownData,
}: {
  dropdownData: ICountry[];
}) {
  const [showCountryList, setShowCountryList] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<ICountry>(
    dropdownData[1]
  );
  return (
    <div className="space-y-[8px]">
      <p className="text-base font-semibold">Region</p>
      <div className="relative h-14 border border-[#323232] border-opacity-[0.4] flex items-center px-4 py-3 rounded-lg">
        <div
          className="flex justify-between flex-1 items-center"
          onClick={() => setShowCountryList((prev) => !prev)}
        >
          <div className="flex items-center gap-4 text-base">
            <Image
              src={`https://flagcdn.com/16x24/${selectedCountry.twoDigCode.toLowerCase()}.png`}
              width={24}
              height={24}
              alt={"Flag"}
            />{" "}
            {selectedCountry.name}
          </div>
          <ChevronDown />
        </div>
        {showCountryList && (
          <div className="fixed z-30 py-8 h-[100dvh] space-y-4 overflow-scroll bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-lg px-8">
            {dropdownData &&
              dropdownData.map((item: ICountry, index: number) => (
                <>
                  {item.name !== undefined && (
                    <li
                      key={index}
                      className="list-none flex py-4 cursor-pointer items-center gap-4 h-5"
                      onClick={() => {
                        setSelectedCountry(item);
                        setShowCountryList(false);
                      }}
                    >
                      <Image
                        src={`https://flagcdn.com/16x24/${item.twoDigCode.toLowerCase()}.png`}
                        width={16}
                        height={16}
                        alt="Flag"
                      />{" "}
                      {item.name}
                    </li>
                  )}
                </>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface IInput {
  register: any;
  name: string;
  errors: any;
}

export function MobileDropdown({
  dropdownData,
  inputNumber: { register, name, errors },
}: {
  dropdownData: ICountry[];
  inputNumber: IInput;
}) {
  const [showCountryList, setShowCountryList] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<ICountry>(
    dropdownData[1]
  );

  return (
    <div className="space-y-[8px]">
      <p className="text-base font-semibold">Mobile Number</p>
      <div className="relative h-14 border border-[#323232] border-opacity-[0.4] flex items-center px-4 py-3 rounded-lg">
        <div className="flex justify-between flex-1 items-center">
          <div
            className="flex items-center gap-4 text-base"
            onClick={() => setShowCountryList((prev) => !prev)}
          >
            <Image
              src={`https://flagcdn.com/16x24/${selectedCountry.twoDigCode.toLowerCase()}.png`}
              width={24}
              height={24}
              alt={"Flag"}
            />{" "}
            <p className="text-base">{selectedCountry.code}</p>
          </div>
          <input
            className="flex-1 px-4 border-none outline-none focus:border-none focus:outline-none active:outline-none active:border-none"
            type=""
            {...register("phoneNumber")}
          />
          <ChevronDown onClick={() => setShowCountryList((prev) => !prev)} />
        </div>
        {showCountryList && (
          <div className="absolute h-[100dvh] overflow-scroll bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-lg px-8 py-4 space-y-2">
            {dropdownData &&
              dropdownData.map((item: ICountry, index: number) => (
                <>
                  {item.name !== undefined && (
                    <li
                      key={index}
                      className="list-none flex gap-8 justify-between py-4 cursor-pointer items-center h-5"
                      onClick={() => {
                        setSelectedCountry(item);
                        setShowCountryList(false);
                      }}
                    >
                      <span className="flex items-center gap-4">
                        <Image
                          src={`https://flagcdn.com/16x24/${item.twoDigCode.toLowerCase()}.png`}
                          width={16}
                          height={15}
                          alt="Flag"
                        />{" "}
                        {item.name}
                      </span>
                      <span className="font-semibold">{item.code}</span>
                    </li>
                  )}
                </>
              ))}
          </div>
        )}
      </div>
      {errors["phoneNumber"] && <div>{errors["phoneNumber"].message}</div>}
    </div>
  );
}
