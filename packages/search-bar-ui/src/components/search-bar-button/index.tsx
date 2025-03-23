import React from "react";
import styles from "./styles.module.css";

export interface ButtonProps {
  /** 버튼 텍스트 */
  children: React.ReactNode;
  /** 버튼 타입 */
  type?: "button" | "submit" | "reset";
  /** 추가 클래스명 */
  className?: string;
  /** 클릭 핸들러 */
  onClick?: () => void;
}

/**
 * 검색 버튼 컴포넌트
 */
export const Button = ({
  children,
  type = "button",
  className = "",
  onClick,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`.trim()}
    >
      {children}
    </button>
  );
};

export default Button;
