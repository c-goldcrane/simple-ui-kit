import { useContext } from "react";

import { SearchInputContext } from "../../context";

export interface SearchBarButtonProps {
  /**
   * 버튼에 표시될 텍스트
   */
  children?: React.ReactNode;
  /**
   * 추가적인 스타일링을 위한 클래스명
   */
  className?: string;
  /** 입력 필드가 비어있을 때 버튼을 비활성화할지 여부
   * @default false
   */
  disableWhenEmpty?: boolean;
}

/**
 * SearchBar의 검색 버튼 컴포넌트
 */
const SearchBarButton = ({
  children = "검색",
  className = "",
  disableWhenEmpty = false,
}: SearchBarButtonProps) => {
  const searchInputContext = useContext(SearchInputContext);

  if (!searchInputContext) {
    throw new Error(
      "SearchBarButton must be used within a <SearchBarContainer /> component",
    );
  }

  const { searchInputValue } = searchInputContext;

  return (
    <button
      className={`suk-search-bar-button ${className}`}
      disabled={disableWhenEmpty && !searchInputValue}
      type="submit"
    >
      {children}
    </button>
  );
};

export default SearchBarButton;
