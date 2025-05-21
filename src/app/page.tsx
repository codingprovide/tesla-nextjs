"use client";

import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

export default function Home() {
  const navBarItem = ["車輛", "能源", "充電", "探索", "線上商店"];
  const handleMouseEnter = (item: string) => {
    console.log("Mouse entered" + item);
  };
  return (
    <div>
      <div className=" bg-linear-to-r from-amber-300 via-amber-100 to-amber-300  text-center p-2">
        <div className=" flex items-center justify-center gap-3  ">
          <div>限量Model Y現貨車開放預定中最低售價自＄1,649,900起</div>
          <Button className=" bg-black text-white">立即訂購</Button>
        </div>
      </div>
      <div className=" grid grid-cols-3">
        <div>
          <span>logo</span>
        </div>
        <div>
          {navBarItem.map((item, index) => (
            <Button
              key={index}
              onMouseEnter={() => handleMouseEnter(item)}
              className=" rounded-sm hover:bg-gray-100 hover:text-black text-white bg-transparent shadow-none"
            >
              {item}
            </Button>
          ))}
        </div>
        <div>
          <span>function</span>
        </div>
      </div>
    </div>
  );
}
