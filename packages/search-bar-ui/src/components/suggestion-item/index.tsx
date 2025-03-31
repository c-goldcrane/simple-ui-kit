import { useContext } from "react";
import styles from "./styles.module.css";
import { SearchBarContext } from "../../context";

export interface SuggestionItemProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

const SuggestionItem = ({
  children,
  className,
  index = -1,
}: SuggestionItemProps) => {
  const context = useContext(SearchBarContext);

  if (!context) {
    throw new Error(
      "SuggestionItem must be used within a <SearchBar /> component"
    );
  }

  const { selectedIndex, setSelectedIndex } = context;

  return (
    <li
      className={`${styles.suggestionItem} ${className} ${
        selectedIndex === index ? styles.selected : ""
      }`}
      onClick={() => setSelectedIndex(index)}
    >
      {children}
    </li>
  );
};

export default SuggestionItem;
