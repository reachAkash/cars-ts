import React from "react";
import SelectComp from "@/components/SelectComp";
import InputComp from "./InputComp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";

interface FilterProps {
  className?: string;
}

const Filter: React.FC<FilterProps> = () => {
  return (
    <div
      className={`overflow-y-auto border border-secondary rounded-md py-4 space-y-4`}
    >
      <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
        <div className="font-semibold text-sm border-l-2 border-primary px-2">
          Search By Filter
        </div>
        <SelectComp label="Location" />
        <div className="flex items-center gap-4">
          <SelectComp label="Location" />
          <SelectComp label="Location" />
        </div>
      </div>
      <div className="border-b-2 pb-4 border-secondary px-4">
        <SelectComp label="Location" />
      </div>
      <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
        <div className="font-semibold text-sm border-l-2 border-primary px-2">
          Body Style
        </div>
        <div className="space-y-1 modal-container h-24 overflow-y-scroll">
          <div className="checkbox-container flex items-center gap-2">
            <input id="first" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="first">
              MPV
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="first" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="first">
              Convertible
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="first" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="first">
              Fuel Efficient
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="first" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="first">
              MPV
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="first" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="first">
              MPV
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="first" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="first">
              MPV
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="first" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="first">
              MPV
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="first" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="first">
              MPV
            </label>
          </div>
        </div>
      </div>
      <div className="border-b-2 pb-4 border-secondary px-4">
        <SelectComp label="Location" />
      </div>
      <div className="border-b-2 pb-4 border-secondary px-4">
        <SelectComp label="Location" />
      </div>
      <div className="border-b-2 pb-4 border-secondary px-4 flex items-center gap-4">
        <SelectComp label="Location" />
        <SelectComp label="Location" />
      </div>
      <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
        <div className="font-semibold text-sm border-l-2 border-primary px-2">
          Price
        </div>
        <div className="flex items-center gap-4">
          <InputComp />
          <InputComp />
        </div>
        <input type="range" className="w-full" />
      </div>
      <div className="border-b-2 py-4 border-secondary px-4 flex items-center justify-between gap-4">
        <SelectComp label="max" />
        <SelectComp label="min" />
      </div>
      <div className="border-b-2 py-4 border-secondary px-4 flex items-center justify-between gap-4">
        <SelectComp label="min engine" />
        <SelectComp label="max engine" />
      </div>
      <div className="border-b-2 pb-4 border-secondary px-4">
        <SelectComp label="Exterior Color" />
      </div>
      <div className="border-b-2 pb-4 border-secondary px-4">
        <SelectComp label="Doors" />
      </div>
      <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
        <div className="font-semibold text-sm border-l-2 border-primary px-2">
          Transmission
        </div>
        <div className="space-y-1 no-scrollbar h-24 overflow-y-scroll">
          <div className="checkbox-container flex items-center gap-2">
            <input id="val1" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="val1">
              Fuel Efficient
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="val2" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="val2">
              Fuel Efficient
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="val3" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="val3">
              Fuel Efficient
            </label>
          </div>
        </div>
      </div>
      <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
        <div className="font-semibold text-sm border-l-2 border-primary px-2">
          Fuel Type
        </div>
        <div className="space-y-1 modal-container h-24 overflow-y-scroll">
          <div className="checkbox-container flex items-center gap-2">
            <input id="val3" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="val3">
              Fuel Efficient
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="val3" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="val3">
              Fuel Efficient
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="val3" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="val3">
              Fuel Efficient
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="val3" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="val3">
              Fuel Efficient
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="val3" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="val3">
              Fuel Efficient
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="val3" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="val3">
              Fuel Efficient
            </label>
          </div>
        </div>
      </div>
      <div className="border-b-2 pb-4 border-secondary px-4">
        <SelectComp label="Home Delivery" />
      </div>
      <div className="px-4 text-primary">Show more filters</div>
    </div>
  );
};

export const FilterSmall = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="bg-primary text-sm gap-2 text-white flex items-center justify-center px-2 py-1 rounded-md">
          <SlidersHorizontal style={{ width: "15px" }} />
          Filters
        </button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <div
          className={`overflow-y-auto border mt-6 border-secondary rounded-md py-4 space-y-4`}
        >
          <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
            <div className="font-semibold text-sm border-l-2 border-primary px-2">
              Search By Filter
            </div>
            <SelectComp label="Location" />
            <div className="flex items-center gap-4">
              <SelectComp label="Location" />
              <SelectComp label="Location" />
            </div>
          </div>
          <div className="border-b-2 pb-4 border-secondary px-4">
            <SelectComp label="Location" />
          </div>
          <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
            <div className="font-semibold text-sm border-l-2 border-primary px-2">
              Body Style
            </div>
            <div className="space-y-1 modal-container h-24 overflow-y-scroll">
              <div className="checkbox-container flex items-center gap-2">
                <input id="first" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="first">
                  MPV
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="first" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="first">
                  Convertible
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="first" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="first">
                  Fuel Efficient
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="first" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="first">
                  MPV
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="first" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="first">
                  MPV
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="first" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="first">
                  MPV
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="first" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="first">
                  MPV
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="first" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="first">
                  MPV
                </label>
              </div>
            </div>
          </div>
          <div className="border-b-2 pb-4 border-secondary px-4">
            <SelectComp label="Location" />
          </div>
          <div className="border-b-2 pb-4 border-secondary px-4">
            <SelectComp label="Location" />
          </div>
          <div className="border-b-2 pb-4 border-secondary px-4 flex items-center gap-4">
            <SelectComp label="Location" />
            <SelectComp label="Location" />
          </div>
          <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
            <div className="font-semibold text-sm border-l-2 border-primary px-2">
              Price
            </div>
            <div className="flex items-center gap-4">
              <InputComp />
              <InputComp />
            </div>
            <input type="range" className="w-full" />
          </div>
          <div className="border-b-2 py-4 border-secondary px-4 flex items-center justify-between gap-4">
            <SelectComp label="max" />
            <SelectComp label="min" />
          </div>
          <div className="border-b-2 py-4 border-secondary px-4 flex items-center justify-between gap-4">
            <SelectComp label="min engine" />
            <SelectComp label="max engine" />
          </div>
          <div className="border-b-2 pb-4 border-secondary px-4">
            <SelectComp label="Exterior Color" />
          </div>
          <div className="border-b-2 pb-4 border-secondary px-4">
            <SelectComp label="Doors" />
          </div>
          <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
            <div className="font-semibold text-sm border-l-2 border-primary px-2">
              Transmission
            </div>
            <div className="space-y-1 no-scrollbar h-24 overflow-y-scroll">
              <div className="checkbox-container flex items-center gap-2">
                <input id="val1" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="val1">
                  Fuel Efficient
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="val2" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="val2">
                  Fuel Efficient
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="val3" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="val3">
                  Fuel Efficient
                </label>
              </div>
            </div>
          </div>
          <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
            <div className="font-semibold text-sm border-l-2 border-primary px-2">
              Fuel Type
            </div>
            <div className="space-y-1 modal-container h-24 overflow-y-scroll">
              <div className="checkbox-container flex items-center gap-2">
                <input id="val3" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="val3">
                  Fuel Efficient
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="val3" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="val3">
                  Fuel Efficient
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="val3" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="val3">
                  Fuel Efficient
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="val3" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="val3">
                  Fuel Efficient
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="val3" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="val3">
                  Fuel Efficient
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="val3" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="val3">
                  Fuel Efficient
                </label>
              </div>
            </div>
          </div>
          <div className="border-b-2 pb-4 border-secondary px-4">
            <SelectComp label="Home Delivery" />
          </div>
          <div className="px-4 text-primary">Show more filters</div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
