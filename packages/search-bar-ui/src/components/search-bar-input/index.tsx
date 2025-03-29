import { useContext } from "react";

import styles from "./styles.module.css";
import { SearchBarContext } from "../../context";

export interface SearchBarInputProps {
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

const SearchBarInput: React.FC<SearchBarInputProps> = ({
  placeholder = "검색어를 입력하세요",
  className = "",
  onChange,
}) => {
  const context = useContext(SearchBarContext);

  if (!context) {
    throw new Error(
      "SearchBarInput must be used within a <SearchBarContainer /> component"
    );
  }

  const { value, setValue } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    onChange?.(e.target.value);
  };

  return (
    <input
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchBarInput;
