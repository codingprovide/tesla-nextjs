"use client";
import { useState } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";
import PlaceholderImage from "@/components/placeholder-image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [navBarItem, setNavBarItem] = useState("");

  const navBarItemList = ["車輛", "能源", "充電", "探索", "線上商店"];
  const carItemList = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Cybertruck",
    "幫我選擇",
  ];
  const careMenuItem = [
    "現貨車",
    "認證中古車",
    "預約試駕",
    "車輛換購",
    "企業與政府用車",
    "Roadster",
    "We,Robot",
  ];
  const handleMouseEnter = (item: string) => {
    setNavBarItem(item);
    setToggleDropdown(true);
  };
  const handleMouseLeave = () => {
    setToggleDropdown(false);
    setNavBarItem("");
  };
  return (
    <div>
      <div className=" bg-linear-to-r from-amber-300 via-amber-100 to-amber-300  text-center p-2">
        <div className=" flex items-center justify-center gap-3  ">
          <div>限量Model Y現貨車開放預定中最低售價自＄1,649,900起</div>
          <Button className=" bg-black text-white">立即訂購</Button>
        </div>
      </div>
      <div className=" bg-linear-to-r from-cyan-500 to-blue-500 h-screen m-auto">
        <div
          onMouseLeave={() => handleMouseLeave()}
          className={clsx(
            { " bg-neutral-50": toggleDropdown },
            " h-full pt-2 z-50"
          )}
        >
          <div className=" grid grid-cols-3 ">
            <div className=" flex justify-start items-center ml-20">
              <span>logo</span>
            </div>

            <div className="flex justify-center items-center">
              {navBarItemList.map((item, index) => (
                <Button
                  key={index}
                  onMouseEnter={() => handleMouseEnter(item)}
                  className={cn(
                    " rounded-sm hover:bg-gray-200 hover:text-black text-white bg-transparent shadow-none",
                    toggleDropdown && " text-black"
                  )}
                >
                  {item}
                </Button>
              ))}
            </div>

            <div className=" flex justify-end items-center">
              <span>function</span>
            </div>
          </div>

          <div className=" p-8">
            {navBarItem === "車輛" && (
              <div className="flex justify-center items-start mt-16">
                <div className="grid grid-cols-4 gap-4">
                  {carItemList.map((item, index) => (
                    <div
                      key={index}
                      className=" flex flex-col justify-center items-center"
                    >
                      <PlaceholderImage />
                      <span className=" my-2.5">{item}</span>
                      <div className=" flex justify-center items-center gap-3">
                        <Link
                          href={"#"}
                          className=" text-gray-600 underline hover:text-gray-800 hover:decoration-2"
                        >
                          了解更多
                        </Link>
                        <Link
                          href={"#"}
                          className=" text-gray-600 underline hover:text-gray-800 hover:decoration-2"
                        >
                          訂購
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="inline-block min-h-full  w-0.5 self-stretch bg-neutral-200 mx-20"></div>
                <div className=" h-full flex flex-col justify-center items-center gap-2">
                  {careMenuItem.map((item, index) => (
                    <Link
                      href={"#"}
                      className=" w-full text-start hover:underline hover:decoration-neutral-700 hover:decoration-2"
                      key={index}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className=" flex flex-col justify-between items-center h-full">
            <div className=" flex flex-col justify-center items-center gap-2 ">
              <h1 className=" text-center text-7xl text-white ">全新Model Y</h1>
              <Link
                href={"/"}
                className=" text-center text-white underline hover:decoration-2"
              >
                立即了解 Model Y 現貨車限量倒數購車禮遇
              </Link>
            </div>

            <div className="">
              <Button className=" bg-blue-501 text-white hover:bg-blue-500">
                立即訂購
              </Button>
              <Button className=" bg-neutral-51 text-black hover:bg-neutral-50">
                了解更多內容
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-amber-500 h-screen m-auto"></div>
    </div>
  );
}
