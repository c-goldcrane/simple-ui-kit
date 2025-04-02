import { useContext, useEffect } from "react";

import styles from "./styles.module.css";
import { SearchBarContext } from "../../context";

export interface SearchBarInputProps {
  value?: string;
  /**
   * 추가적인 스타일링을 위한 클래스명
   */
  className?: string;
  /**
   * 입력 필드의 placeholder 텍스트
   */
  placeholder?: string;
  /**
   * 입력 필드의 값이 변경될 때 호출되는 콜백 함수
   */
  onChange?: (value: string) => void;
}

const SearchBarInput = ({
  value,
  placeholder = "검색어를 입력하세요",
  className = "",
  onChange,
}: SearchBarInputProps) => {
  const context = useContext(SearchBarContext);

  if (!context) {
    throw new Error(
      "SearchBarInput must be used within a <SearchBarContainer /> component"
    );
  }

  const { searchInputValue, setSearchInputValue, setIsOpen } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (value !== undefined) {
      setSearchInputValue(value);
    }
  }, [value, setSearchInputValue]);

  return (
    <input
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      type="text"
      value={searchInputValue}
      onChange={handleChange}
      onClick={() => setIsOpen(true)}
    />
  );
};

export default SearchBarInput;
