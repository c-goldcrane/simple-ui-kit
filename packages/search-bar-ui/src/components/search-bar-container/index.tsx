import { useState } from "react";

import styles from "./styles.module.css";
import { SearchBarContext } from "../../context";

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

const SearchBarContainer = ({ children, onSubmit }: Props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit?.(value);
  };

  return (
    <SearchBarContext.Provider value={{ value, setValue }}>
      <form onSubmit={handleSubmit} className={styles.container}>
        {children}
      </form>
    </SearchBarContext.Provider>
  );
};

export default SearchBarContainer;
