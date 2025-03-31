import { useCallback, useEffect, useState } from "react";

import styles from "./styles.module.css";
import { SearchBarContext } from "../../context";
import Suggestions from "../suggestion-container";
import SuggestionItem from "../suggestion-item";
import SearchBarInput from "../search-bar-input";
import SearchBarButton from "../search-bar-button";

/**
 * SearchBar 컴포넌트의 컨테이너 컴포넌트
 */
export interface Props {
  /**
   * 컨테이너 내부에 렌더링될 자식 요소들
   */
  children: React.ReactNode;
  /**
   * 폼 제출 시 호출될 콜백 함수
   */
  onSubmit?: (value: string) => void;
}

const SearchBar = ({ children, onSubmit }: Props) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit?.(value);
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLFormElement>) => {
      if (!isFocused) return;

      const suggestions = document.querySelectorAll(
        `.${styles.suggestionItem}`
      );
      const maxIndex = suggestions.length - 1;

      e.preventDefault();

      const handleArrowDown = () => {
        const nextIndex = selectedIndex + 1;

        if (nextIndex < maxIndex) {
          setSelectedIndex(selectedIndex + 1);
        } else {
          setSelectedIndex(-1);
        }
      };

      const handleArrowUp = () => {
        if (selectedIndex === -1) {
          setSelectedIndex(maxIndex - 1);
        } else {
          const prevIndex = selectedIndex - 1;

          if (prevIndex >= 0) {
            setSelectedIndex(prevIndex);
          } else {
            setSelectedIndex(-1);
          }
        }
      };

      const handleEnter = () => {
        if (selectedIndex === -1) {
          return;
        }

        setValue(suggestions[selectedIndex + 1].textContent ?? "");
        onSubmit?.(value);
        setSelectedIndex(-1);
        setIsFocused(false);
      };

      const handleEscape = () => {
        setIsFocused(false);
        setSelectedIndex(-1);
      };

      switch (e.key) {
        case "ArrowDown":
          handleArrowDown();
          break;
        case "ArrowUp":
          handleArrowUp();
          break;
        case "Enter":
          handleEnter();
          break;
        case "Escape":
          handleEscape();
          break;
        default:
          break;
      }
    },
    [isFocused, selectedIndex, value, onSubmit]
  );

  return (
    <SearchBarContext.Provider
      value={{
        value,
        setValue,
        isFocused,
        setIsFocused,
        selectedIndex,
        setSelectedIndex,
      }}
    >
      <div className={styles.container}>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
        >
          {children}
        </form>
      </div>
    </SearchBarContext.Provider>
  );
};

SearchBar.Input = SearchBarInput;
SearchBar.Button = SearchBarButton;
SearchBar.Suggestions = Suggestions;
SearchBar.SuggestionItem = SuggestionItem;

export default SearchBar;
