import { useContext, useRef, useEffect, useCallback } from "react";

import {
  DropdownContext,
  SuggestionContext,
  SearchInputContext,
} from "../../context";

const SUGGESTION_ITEM_CLASS = ".suk-suggestion-item";

const SearchBarContainer = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const searchInputContext = useContext(SearchInputContext);
  const dropdownContext = useContext(DropdownContext);
  const suggestionContext = useContext(SuggestionContext);

  if (!dropdownContext || !suggestionContext || !searchInputContext) {
    throw new Error(
      "SearchBarContainer must be used within a context provider",
    );
  }

  const { setIsOpen } = dropdownContext;
  const { selectedItemIndex, setSelectedItemIndex } = suggestionContext;
  const { searchInputValue, setSearchInputValue, onSubmit } =
    searchInputContext;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit?.(searchInputValue);
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLFormElement>) => {
      const suggestions =
        containerRef.current?.querySelectorAll(SUGGESTION_ITEM_CLASS) || [];
      const maxIndex = suggestions.length;

      // 특수 키에 대해서만 preventDefault() 호출
      if (["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(e.key)) {
        e.preventDefault();
      }

      const handleArrowDown = () => {
        const nextIndex = selectedItemIndex + 1;

        if (nextIndex < maxIndex) {
          setSelectedItemIndex(selectedItemIndex + 1);
        } else {
          setSelectedItemIndex(-1);
        }
      };

      const handleArrowUp = () => {
        if (selectedItemIndex === -1) {
          setSelectedItemIndex(maxIndex - 1);
        } else {
          const prevIndex = selectedItemIndex - 1;
          if (prevIndex >= 0) {
            setSelectedItemIndex(prevIndex);
          } else {
            setSelectedItemIndex(-1);
          }
        }
      };

      const handleEnter = () => {
        if (selectedItemIndex === -1) {
          onSubmit?.(searchInputValue);
        } else {
          setSearchInputValue(suggestions[selectedItemIndex].textContent ?? "");
          setSelectedItemIndex(-1);

          onSubmit?.(suggestions[selectedItemIndex].textContent ?? "");
        }

        setIsOpen(false);
      };

      const handleEscape = () => {
        setSelectedItemIndex(-1);
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
    [
      selectedItemIndex,
      setSelectedItemIndex,
      setIsOpen,
      onSubmit,
      searchInputValue,
      setSearchInputValue,
    ],
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
    <div className="suk-search-bar-container-wrapper" ref={containerRef}>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        {children}
      </form>
    </div>
  );
};

export default SearchBarContainer;
