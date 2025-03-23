import React, { useState } from "react";
import styles from "./styles.module.css";
import Input from "../search-bar-input";
import Button from "../search-bar-button";

export interface SearchBarProps {
  /** 추가 클래스명 */
  className?: string;
  /** 검색어 입력 시 호출되는 콜백 함수 */
  onSearch?: (query: string) => void;
  /** 검색창 플레이스홀더 텍스트 */
  placeholder?: string;
}

/**
 * 검색창 컴포넌트
 * @param props SearchBarProps
 * @returns React.ReactElement
 */
export const SearchBar = ({
  className = "",
  onSearch,
  placeholder = "검색어를 입력하세요",
}: SearchBarProps): React.ReactElement => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.container} ${className}`.trim()}
    >
      <Input value={query} onChange={setQuery} placeholder={placeholder} />
      <Button type="submit">검색ㄴ</Button>
    </form>
  );
};

export default SearchBar;
