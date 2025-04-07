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
      className={`cursor-pointer text-nowrap rounded-md border-none bg-black p-2 px-3 text-sm text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-gray-300 ${className}`}
      disabled={disableWhenEmpty && !searchInputValue}
      type="submit"
    >
      {children}
    </button>
  );
};

export default SearchBarButton;
