import React, { cloneElement, useContext } from "react";

import { DropdownContext } from "../../context";
import { SuggestionItemProps } from "../suggestion-item";

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
      "Suggestions must be used within a <SearchBar /> component",
    );
  }

  const { isOpen } = dropdownContext;
  const childrenArray = Array.isArray(children) ? children : [children];

  return isOpen ? (
    <ul className={`suk-suggestion-container ${className}`}>
      {childrenArray.map((child, index) =>
        cloneElement(child, { index, key: child.props.value }),
      )}
    </ul>
  ) : null;
};

export default Suggestions;
