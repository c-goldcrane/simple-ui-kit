import { useCallback, useState, useEffect, useRef } from "react";

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
  const [contextValue, setContextValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit?.(contextValue);
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLFormElement>) => {
      console.log("handleKeyDown", e.key);

      const suggestions = document.querySelectorAll(
        `.${styles.suggestionItem}`
      );
      const maxIndex = suggestions.length - 1;

      // 특수 키에 대해서만 preventDefault() 호출
      if (["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(e.key)) {
        e.preventDefault();
      }

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

        setContextValue(suggestions[selectedIndex + 1].textContent ?? "");
        setSelectedIndex(-1);
        setIsOpen(false);
        onSubmit?.(suggestions[selectedIndex + 1].textContent ?? "");
      };

      const handleEscape = () => {
        setSelectedIndex(-1);
        setIsOpen(false);
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
    [selectedIndex, onSubmit]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SearchBarContext.Provider
      value={{
        contextValue,
        setContextValue,
        selectedIndex,
        setSelectedIndex,
        isOpen,
        setIsOpen,
        onSubmit,
      }}
    >
      <div className={styles.container} ref={containerRef}>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit}
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
