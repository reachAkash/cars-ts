import React from "react";
import PetrolIcon from "./icons/Petrol";
import SpeedIcon from "./icons/Speed";
import GearIcon from "./icons/Gear";
import CalendarIcon from "./icons/Calendar";
import ArrowUpIcon from "./icons/ArrowUp";
import Car from "@/assets/car.png";
import { Bookmark } from "lucide-react";
import ImgCarousel from "./ImgCarousel";

interface CarDetails {
  item: any;
}

const CarCard: React.FC<CarDetails> = ({ item }) => {
  // console.log(item?.media?.images[0]);
  return (
    <>
      <div className="border group shadow-md pb-4 border-secondary rounded-md space-y-2">
        <div className="w-full relative overflow-hidden">
          <ImgCarousel data={item?.media?.images.slice(0, 3)} />
          <button className="absolute top-5 left-5 bg-primary px-2 py-1 rounded-lg text-white text-sm">
            {item?.vehicle?.ownershipCondition}
          </button>
          <div className="absolute top-5 right-5 bg-white p-2 rounded-full">
            <Bookmark style={{ width: "22px", height: "22px" }} />
          </div>
        </div>
        <div className="px-4">
          <div className="font-semibold text-sm ">
            {item?.vehicle?.make + " " + item?.vehicle?.model}{" "}
          </div>
          <div className="font-light text-sm">{item?.vehicle?.generation}</div>
        </div>
        <div className="border-t border-b px-4 flex items-center justify-between border-secondary py-3">
          <div className="flex text-xs flex-col justify-center items-center">
            <SpeedIcon />
            <span className="text-xs">{item?.vehicle?.topSpeedMPH} MPH</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <PetrolIcon />
            <span className="text-xs">25,000</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <GearIcon />
            <span className="text-xs">25,000</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <CalendarIcon />
            <span className="text-xs">{item?.vehicle?.yearOfManufacture}</span>
          </div>
        </div>
        <div className="px-4 space-y-2 md:space-y-1">
          <div className="flex text-xs items-center justify-between">
            <span>Financing Available</span>
            <span>$760</span>
          </div>
          <div className="flex text-sm items-center justify-between">
            <span>
              ${item?.code_weavers?.monthly_price?.amount}
              <span className="text-primary">/month</span>
            </span>
            <span className="text-primary">
              ${item?.adverts?.retailAdverts?.totalPrice?.amountGBP}
            </span>
          </div>
          <button className="w-full flex items-center justify-center gap-1 rounded-md bg-primary text-white px-2 py-2">
            View This Car <ArrowUpIcon />
          </button>
        </div>
      </div>
      <div className="hidden grid-cols-3 place-items-start gap-[4rem] mt-2 border border-secondary rounded-md shadow-sm">
        <div className="relative col-auto">
          <img className="w-full" src={Car.src} />
          <button className="absolute left-5 top-5 bg-primary rounded-lg px-2 py-1 text-white">
            Best Price
          </button>
        </div>
        <div className="col-span-1">
          <div className="border-b border-gray-100 py-4">
            <div className="font-semibold text-sm ">Skoda Citigo</div>
            <div className="font-light text-sm">1.0 MP Colour Edition</div>
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="grid grid-cols-2 gap-y-4 gap-x-16 border-secondary py-3">
              <div className="flex text-xs justify-center items-center gap-2">
                <SpeedIcon />
                <div className="text-xs">
                  <div>Mileage</div>
                  <div>25,000</div>
                </div>
              </div>
              <div className="flex text-xs justify-center items-center gap-2">
                <PetrolIcon />
                <div className="text-xs">
                  <div>Mileage</div>
                  <div>25,000</div>
                </div>
              </div>
              <div className="flex text-xs justify-center items-center gap-2">
                <GearIcon />
                <div className="text-xs">
                  <div>Mileage</div>
                  <div>25,000</div>
                </div>
              </div>
              <div className="flex text-xs justify-center items-center gap-2">
                <CalendarIcon />
                <div className="text-xs">
                  <div>Mileage</div>
                  <div>25,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 h-full">
          <div className="flex items-center justify-evenly">
            Save{" "}
            <div className="border w-fit rounded-full border-gray-200 p-2">
              <Bookmark />
            </div>
          </div>
          <div className="flex items-center justify-around">
            <div className="line-through font-light text-xs">$5,400</div>
            <div className="text-medium text-sm text-primary">$4,400</div>
          </div>
          <div className="text-sm flex items-center justify-around">
            <div>Financing Available : </div>
            <div>
              <span className="text-primary">$84</span>/month
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;
