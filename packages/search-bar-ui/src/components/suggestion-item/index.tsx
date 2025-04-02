import { useContext } from "react";
import styles from "./styles.module.css";
import { SearchBarContext } from "../../context";

export interface SuggestionItemProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  onClick?: (index: number) => void;
}

const SuggestionItem = ({
  children,
  className,
  index = -1,
  onClick,
}: SuggestionItemProps) => {
  const context = useContext(SearchBarContext);

  if (!context) {
    throw new Error(
      "SuggestionItem must be used within a <SearchBar /> component"
    );
  }

  const {
    selectedIndex,
    setSelectedIndex,
    setSearchInputValue,
    setIsOpen,
    onSubmit,
  } = context;

  const handleClick = () => {
    const value = children?.toString() ?? "";

    setSelectedIndex(index);
    setSearchInputValue(value);
    setIsOpen(false);
    onSubmit?.(value);

    onClick?.(index);
  };

  return (
    <li
      className={`${styles.suggestionItem} ${className} ${
        selectedIndex === index ? styles.selected : ""
      }`}
      onClick={handleClick}
    >
      {children}
    </li>
  );
};

export default SuggestionItem;
