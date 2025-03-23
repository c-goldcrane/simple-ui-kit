import React, { ChangeEvent } from "react";
import styles from "./styles.module.css";

export interface InputProps {
  /** 입력값 */
  value: string;
  /** 입력값 변경 핸들러 */
  onChange: (value: string) => void;
  /** 플레이스홀더 텍스트 */
  placeholder?: string;
  /** 추가 클래스명 */
  className?: string;
}

/**
 * 검색 입력 컴포넌트
 */
export const Input = ({
  value,
  onChange,
  placeholder = "검색어를 입력하세요",
  className = "",
}: InputProps): React.ReactElement => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`${styles.input} ${className}`.trim()}
    />
  );
};

export default Input;
