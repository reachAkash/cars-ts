import React, { ChangeEvent, useEffect, useState } from "react";
import SelectComp from "@/components/SelectComp";
import InputComp from "./InputComp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "@/store";
import { RootState } from "@/store";
import axiosInstance from "@/axiosConfig";
import { setCar, startLoading, totalCars } from "@/slices/carSlice";

interface FilterProps {
  className?: string;
}

const Filter: React.FC<FilterProps> = () => {
  const [modelArray, setModelArray] = useState<string[]>([]);
  const [fuelArray, setFuelArray] = useState<string[]>([]);
  const [doorsArray, setDoorsArray] = useState<number[]>([]);
  const dispatch = useDispatch();
  const carsData = useSelector((store: RootState) => store.cars.data);
  const totalCarsData = useSelector((store: RootState) => store.cars.totalCar);

  const uniqueBodyTypes = [
    ...new Set(
      totalCarsData?.map((item: any) => item.vehicle.standard.bodyType)
    ),
  ];

  const initialState = uniqueBodyTypes.reduce((state, bodyType) => {
    state[bodyType] = false;
    return state;
  }, {});

  const [selectedState, setSelectedState] = useState(initialState);
  const buildQueryParams = (filters: any) => {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(filters)) {
      if (value) {
        params.append(key, String(value));
      }
    }
    return params.toString();
  };

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;
    setSelectedState((prevState: any) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const getFilteredData = async () => {
    try {
      dispatch(startLoading(true));
      const queryParams = buildQueryParams(selectedState);
      let url;
      if (queryParams.length > 0) {
        url = `/api/getcars?limit=9&${queryParams}`;
      } else url = `api/getcars?limit=9`;
      const data = await axiosInstance.get(url);
      if (totalCarsData.length <= 0) {
        dispatch(totalCars(data.data));
      }
      dispatch(setCar(data.data));
      if (
        modelArray.length <= 0 ||
        fuelArray.length <= 0 ||
        doorsArray.length <= 0
      ) {
        setFilteredData(data.data);
      }
    } catch (err) {
      console.error(err);
      dispatch(startLoading(false));
    }
  };

  const setFilteredData = (data: any) => {
    const FilteredData: string[] = Array.from(
      new Set(data?.data?.flatMap((item: any) => item?.vehicle?.model))
    );
    setModelArray(FilteredData);
    const FilteredDataFuel: string[] = Array.from(
      new Set(data?.data?.flatMap((item: any) => item?.vehicle?.fuelType))
    );
    setFuelArray(FilteredDataFuel);
    const FilteredDoors: number[] = Array.from(
      new Set(data?.data?.flatMap((item: any) => item?.vehicle?.doors))
    );
    setDoorsArray(FilteredDoors);
  };

  useEffect(() => {
    getFilteredData();
  }, [selectedState]);

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
          <SelectComp label="Zip Code" />
          <SelectComp label="Search Within" />
        </div>
      </div>
      <div className="border-b-2 pb-4 border-secondary px-4">
        <SelectComp label="Vehicle Type" />
      </div>
      <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
        <div className="font-semibold text-sm border-l-2 border-primary px-2">
          Body Style
        </div>
        <div className="space-y-1 modal-container h-24 overflow-y-scroll">
          {uniqueBodyTypes?.map((item, index) => {
            return (
              <div
                key={index}
                className="checkbox-container flex items-center gap-2"
              >
                <input
                  checked={selectedState[item]}
                  name={item}
                  onChange={(e) => handleCheckboxChange(e)}
                  id={item}
                  type="checkbox"
                />
                <label className=" text-sm font-medium" htmlFor={item}>
                  {item}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-b-2 pb-4 border-secondary px-4">
        <SelectComp label="Make" />
      </div>
      <div className="border-b-2 pb-4 border-secondary px-4">
        <SelectComp label="Model" data={modelArray} />
      </div>
      <div className="border-b-2 pb-4 border-secondary px-4 flex items-center gap-4">
        <SelectComp label="Min Year" />
        <SelectComp label="Max Year" />
      </div>
      <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
        <div className="font-semibold text-sm border-l-2 border-primary px-2">
          Price
        </div>
        <div className="flex items-center gap-4">
          <InputComp label="Min Price" />
          <InputComp label="Max Price" />
        </div>
        <input type="range" className="w-full" />
      </div>
      <div className="border-b-2 py-4 border-secondary px-4 flex items-center justify-between gap-4">
        <SelectComp label="Min Seats" />
        <SelectComp label="Max Seats" />
      </div>
      <div className="border-b-2 py-4 border-secondary px-4 flex items-center justify-between gap-4">
        <SelectComp label="Min Engine" />
        <SelectComp label="Max Engine" />
      </div>
      <div className="border-b-2 pb-4 border-secondary px-4">
        <SelectComp label="Exterior Color" />
      </div>
      <div className="border-b-2 pb-4 border-secondary px-4">
        <SelectComp label="Doors" doorsData={doorsArray} />
      </div>
      <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
        <div className="font-semibold text-sm border-l-2 border-primary px-2">
          Transmission
        </div>
        <div className="space-y-1 no-scrollbar h-24 overflow-y-scroll">
          <div className="checkbox-container flex items-center gap-2">
            <input id="val1" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="val1">
              Automatic
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="val2" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="val2">
              Manual
            </label>
          </div>
          <div className="checkbox-container flex items-center gap-2">
            <input id="val3" type="checkbox" />
            <label className=" text-sm font-medium" htmlFor="val3">
              Other
            </label>
          </div>
        </div>
      </div>
      <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
        <div className="font-semibold text-sm border-l-2 border-primary px-2">
          Fuel Type
        </div>
        <div className="space-y-1 modal-container h-24 overflow-y-scroll">
          {fuelArray?.map((item, index) => {
            return (
              <div
                key={index}
                className="checkbox-container flex items-center gap-2"
              >
                <input
                  checked={selectedState[item]}
                  name={item}
                  onChange={(e) => handleCheckboxChange(e)}
                  id={item}
                  type="checkbox"
                />
                <label className=" text-sm font-medium" htmlFor={item}>
                  {item}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-b-2 pb-4 border-secondary px-4">
        <SelectComp label="Home Delivery" />
      </div>
      <div className="px-4 font-semibold text-sm text-primary">
        Show more filters
      </div>
    </div>
  );
};

export const FilterSmall = () => {
  const [modelArray, setModelArray] = useState<string[]>([]);
  const [fuelArray, setFuelArray] = useState<string[]>([]);
  const [doorsArray, setDoorsArray] = useState<number[]>([]);
  const dispatch = useDispatch();
  const carsData = useSelector((store: RootState) => store.cars.data);
  const totalCarsData = useSelector((store: RootState) => store.cars.totalCar);

  const uniqueBodyTypes = [
    ...new Set(
      totalCarsData?.map((item: any) => item.vehicle.standard.bodyType)
    ),
  ];

  const initialState = uniqueBodyTypes.reduce((state, bodyType) => {
    state[bodyType] = false;
    return state;
  }, {});

  const [selectedState, setSelectedState] = useState(initialState);
  const buildQueryParams = (filters: any) => {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(filters)) {
      if (value) {
        params.append(key, String(value));
      }
    }
    return params.toString();
  };

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;
    setSelectedState((prevState: any) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const getFilteredData = async () => {
    try {
      dispatch(startLoading(true));
      const queryParams = buildQueryParams(selectedState);
      let url;
      if (queryParams.length > 0) {
        url = `/api/getcars?limit=9&${queryParams}`;
      } else url = `api/getcars?limit=9`;
      const data = await axiosInstance.get(url);
      if (totalCarsData.length <= 0) {
        dispatch(totalCars(data.data));
      }
      dispatch(setCar(data.data));
      if (
        modelArray.length <= 0 ||
        fuelArray.length <= 0 ||
        doorsArray.length <= 0
      ) {
        setFilteredData(data.data);
      }
    } catch (err) {
      console.error(err);
      dispatch(startLoading(false));
    }
  };

  const setFilteredData = (data: any) => {
    const FilteredData: string[] = Array.from(
      new Set(data?.data?.flatMap((item: any) => item?.vehicle?.model))
    );
    setModelArray(FilteredData);
    const FilteredDataFuel: string[] = Array.from(
      new Set(data?.data?.flatMap((item: any) => item?.vehicle?.fuelType))
    );
    setFuelArray(FilteredDataFuel);
    const FilteredDoors: number[] = Array.from(
      new Set(data?.data?.flatMap((item: any) => item?.vehicle?.doors))
    );
    setDoorsArray(FilteredDoors);
  };

  useEffect(() => {
    getFilteredData();
  }, [selectedState]);

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
          className={`overflow-y-auto mt-6 border border-secondary rounded-md py-4 space-y-4`}
        >
          <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
            <div className="font-semibold text-sm border-l-2 border-primary px-2">
              Search By Filter
            </div>
            <SelectComp label="Location" />
            <div className="flex items-center gap-4">
              <SelectComp label="Zip Code" />
              <SelectComp label="Search Within" />
            </div>
          </div>
          <div className="border-b-2 pb-4 border-secondary px-4">
            <SelectComp label="Vehicle Type" />
          </div>
          <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
            <div className="font-semibold text-sm border-l-2 border-primary px-2">
              Body Style
            </div>
            <div className="space-y-1 modal-container h-24 overflow-y-scroll">
              {uniqueBodyTypes?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="checkbox-container flex items-center gap-2"
                  >
                    <input
                      checked={selectedState[item]}
                      name={item}
                      onChange={(e) => handleCheckboxChange(e)}
                      id={item}
                      type="checkbox"
                    />
                    <label className=" text-sm font-medium" htmlFor={item}>
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-b-2 pb-4 border-secondary px-4">
            <SelectComp label="Make" />
          </div>
          <div className="border-b-2 pb-4 border-secondary px-4">
            <SelectComp label="Model" data={modelArray} />
          </div>
          <div className="border-b-2 pb-4 border-secondary px-4 flex items-center gap-4">
            <SelectComp label="Min Year" />
            <SelectComp label="Max Year" />
          </div>
          <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
            <div className="font-semibold text-sm border-l-2 border-primary px-2">
              Price
            </div>
            <div className="flex items-center gap-4">
              <InputComp label="Min Price" />
              <InputComp label="Max Price" />
            </div>
            <input type="range" className="w-full" />
          </div>
          <div className="border-b-2 py-4 border-secondary px-4 flex items-center justify-between gap-4">
            <SelectComp label="Min Seats" />
            <SelectComp label="Max Seats" />
          </div>
          <div className="border-b-2 py-4 border-secondary px-4 flex items-center justify-between gap-4">
            <SelectComp label="Min Engine" />
            <SelectComp label="Max Engine" />
          </div>
          <div className="border-b-2 pb-4 border-secondary px-4">
            <SelectComp label="Exterior Color" />
          </div>
          <div className="border-b-2 pb-4 border-secondary px-4">
            <SelectComp label="Doors" doorsData={doorsArray} />
          </div>
          <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
            <div className="font-semibold text-sm border-l-2 border-primary px-2">
              Transmission
            </div>
            <div className="space-y-1 no-scrollbar h-24 overflow-y-scroll">
              <div className="checkbox-container flex items-center gap-2">
                <input id="val1" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="val1">
                  Automatic
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="val2" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="val2">
                  Manual
                </label>
              </div>
              <div className="checkbox-container flex items-center gap-2">
                <input id="val3" type="checkbox" />
                <label className=" text-sm font-medium" htmlFor="val3">
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className="border-b-2 py-4 border-secondary px-4 space-y-4">
            <div className="font-semibold text-sm border-l-2 border-primary px-2">
              Fuel Type
            </div>
            <div className="space-y-1 modal-container h-24 overflow-y-scroll">
              {fuelArray?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="checkbox-container flex items-center gap-2"
                  >
                    <input
                      checked={selectedState[item]}
                      name={item}
                      onChange={(e) => handleCheckboxChange(e)}
                      id={item}
                      type="checkbox"
                    />
                    <label className=" text-sm font-medium" htmlFor={item}>
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-b-2 pb-4 border-secondary px-4">
            <SelectComp label="Home Delivery" />
          </div>
          <div className="px-4 font-semibold text-sm text-primary">
            Show more filters
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
