import { useContext } from "react";
import {
  DropdownContext,
  SearchInputContext,
  SuggestionContext,
} from "../../context";

import styles from "./styles.module.css";

export interface SuggestionItemProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  value: string;
}

const SuggestionItem = ({
  children,
  className,
  index,
  value,
}: SuggestionItemProps) => {
  const searchInputContext = useContext(SearchInputContext);
  const dropdownContext = useContext(DropdownContext);
  const suggestionContext = useContext(SuggestionContext);

  if (!dropdownContext || !suggestionContext || !searchInputContext) {
    throw new Error(
      "SuggestionItem must be used within a <SearchBar /> component"
    );
  }

  const { selectedItemIndex } = suggestionContext;
  const { setIsOpen } = dropdownContext;
  const { setSearchInputValue, onSubmit } = searchInputContext;

  const handleClick = () => {
    setSearchInputValue(value);
    setIsOpen(false);

    onSubmit?.(value);
  };

  return (
    <li
      className={`${styles.suggestionItem} ${className} ${
        selectedItemIndex === index ? styles.selected : ""
      }`}
      onClick={handleClick}
    >
      {children}
    </li>
  );
};

export default SuggestionItem;
