import React, { cloneElement, useContext } from "react";

import styles from "./styles.module.css";
import { SearchBarContext } from "../../context";
import { SuggestionItemProps } from "../suggestion-item";

export interface SuggestionContainerProps {
  children:
    | React.ReactElement<SuggestionItemProps>
    | React.ReactElement<SuggestionItemProps>[];
  className?: string;
}

const Suggestions = ({ children, className }: SuggestionContainerProps) => {
  const context = useContext(SearchBarContext);

  if (!context) {
    throw new Error(
      "Suggestions must be used within a <SearchBar /> component"
    );
  }

  const { isOpen } = context;
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <ul className={`${styles.suggestions} ${className}`}>
      {isOpen &&
        childrenArray.map((child, index) => cloneElement(child, { index }))}
    </ul>
  );
};

export default Suggestions;
