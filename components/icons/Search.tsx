import { Search } from "lucide-react";
import { MouseEvent } from "react";

interface Search {
  className: string;
  onClick: (e: MouseEvent<SVGElement>) => void;
}

const SearchIcon: React.FC<Search> = ({ className, onClick }) => {
  return (
    <Search
      onClick={onClick}
      className={`cursor-pointer text-gray-500 text-sm ${className}`}
    />
  );
};

export default SearchIcon;
