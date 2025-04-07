import { SearchInputProvider } from "./search-input-context";
import { SuggestionProvider } from "./suggestion-context";
import { DropdownProvider } from "./dropdown-context";

export function SearchBarProvider({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit?: (value: string) => void;
}) {
  return (
    <SearchInputProvider onSubmit={onSubmit}>
      <SuggestionProvider>
        <DropdownProvider>{children}</DropdownProvider>
      </SuggestionProvider>
    </SearchInputProvider>
  );
}

export * from "./search-input-context";
export * from "./suggestion-context";
export * from "./dropdown-context";
