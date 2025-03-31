import React, { useContext } from "react";

import styles from "./styles.module.css";
import { SearchBarContext } from "../../context";

export interface SuggestionContainerProps {
  children: React.ReactNode[];
  className?: string;
}

const Suggestions = ({ children, className }: SuggestionContainerProps) => {
  const context = useContext(SearchBarContext);

  if (!context) {
    throw new Error(
      "Suggestions must be used within a <SearchBar /> component"
    );
  }

  const { isFocused } = context;

  if (!isFocused) return null;

  return (
    <ul className={`${styles.suggestions} ${className}`}>
      {children.map((child, index) =>
        React.cloneElement(child as React.ReactElement, { index, key: index })
      )}
    </ul>
  );
};

export default Suggestions;
