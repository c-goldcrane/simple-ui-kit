export interface SuggestionContainerProps {
  children: React.ReactNode;
}

const SuggestionContainer = ({ children }: SuggestionContainerProps) => {
  return <ul>{children}</ul>;
};

export default SuggestionContainer;
