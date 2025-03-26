import { FC } from "react";

export interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  buttonText?: string;
  className?: string;
  autoSearch?: boolean;
  autoSearchDelay?: number;
  initialValue?: string;
  isLoading?: boolean;
}

declare const SearchBar: FC<SearchBarProps>;
export default SearchBar;
