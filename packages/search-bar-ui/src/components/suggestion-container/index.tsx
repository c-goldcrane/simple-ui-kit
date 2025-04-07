import React, { cloneElement, useContext } from "react";

import { DropdownContext } from "../../context";
import { SuggestionItemProps } from "../suggestion-item";

import styles from "./styles.module.css";

export interface SuggestionContainerProps {
  children:
    | React.ReactElement<SuggestionItemProps>
    | React.ReactElement<SuggestionItemProps>[];
  className?: string;
}

const Suggestions = ({ children, className }: SuggestionContainerProps) => {
  const dropdownContext = useContext(DropdownContext);

  if (!dropdownContext) {
    throw new Error(
      "Suggestions must be used within a <SearchBar /> component"
    );
  }

  const { isOpen } = dropdownContext;
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <ul className={`${styles.suggestions} ${className}`}>
      {isOpen &&
        childrenArray.map((child, index) => cloneElement(child, { index }))}
    </ul>
  );
};

export default Suggestions;
