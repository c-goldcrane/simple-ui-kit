export interface SuggestionItemProps {
  children: React.ReactNode;
}

const SuggestionItem = ({ children }: SuggestionItemProps) => {
  return <li>{children}</li>;
};

export default SuggestionItem;
