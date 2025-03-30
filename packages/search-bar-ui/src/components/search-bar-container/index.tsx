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
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit?.(value);
  };

  return (
    <SearchBarContext.Provider value={{ value, setValue }}>
      <div className={styles.container}>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          {children}
        </form>

        {isFocused && (
          <div className={styles.suggestions}>
            <ul>
              <li className={styles.suggestionItem}>test1</li>
              <li className={styles.suggestionItem}>test2</li>
              <li className={styles.suggestionItem}>test3</li>
            </ul>
          </div>
        )}
      </div>
    </SearchBarContext.Provider>
  );
};

export default SearchBarContainer;
