import Wordbreak from "./Wordbreak";
import ArrowUpIcon from "./icons/ArrowUp";
import CarFinanceIcon from "./icons/CarFinance";

const CarFinance: React.FC = () => {
  return (
    <div className="bg-primary px-6 flex flex-col justify-between py-4 lg:py-6 rounded-md shadow-md">
      <CarFinanceIcon />
      <div className="text-white text-lg md:text-xl">
        Find out if you&apos;re eligible for <Wordbreak />
        <span className="font-semibold text-lg md:text-3xl lg:text-3xl">
          Car Finance
        </span>{" "}
        in minutes, with no impact on your credit score.
      </div>
      <button className="w-full flex items-center justify-center gap-1 rounded-md bg-white text-primary px-2 py-2">
        View This Car <ArrowUpIcon />
      </button>
    </div>
  );
};

export default CarFinance;
