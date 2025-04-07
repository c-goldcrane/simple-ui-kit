import { useContext } from "react";
import { SearchBarContext } from "../../context";

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
  const context = useContext(SearchBarContext);

  if (!context) {
    throw new Error(
      "SuggestionItem must be used within a <SearchBar /> component"
    );
  }

  const { selectedItemIndex, setSearchInputValue, setIsOpen, onSubmit } =
    context;

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
