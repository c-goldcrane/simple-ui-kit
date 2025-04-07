import Suggestions from "../suggestion-container";
import SuggestionItem from "../suggestion-item";
import SearchBarInput from "../search-bar-input";
import SearchBarButton from "../search-bar-button";
import SearchBarContainer from "../search-bar-container";
import { SearchBarProvider } from "../../context";

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

const SearchBar = ({ children, onSubmit }: Props) => {
  return (
    <SearchBarProvider onSubmit={onSubmit}>
      <SearchBarContainer>{children}</SearchBarContainer>
    </SearchBarProvider>
  );
};

SearchBar.Input = SearchBarInput;
SearchBar.Button = SearchBarButton;
SearchBar.Suggestions = Suggestions;
SearchBar.SuggestionItem = SuggestionItem;

export default SearchBar;
