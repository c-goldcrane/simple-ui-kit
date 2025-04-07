import { createContext, useState } from "react";

export type SearchInputContextType = {
  searchInputValue: string;
  setSearchInputValue: (value: string) => void;
  onSubmit?: (value: string) => void;
};

export const SearchInputContext = createContext<SearchInputContextType | null>(
  null
);

export function SearchInputProvider({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit?: (value: string) => void;
}) {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <SearchInputContext.Provider
      value={{
        searchInputValue,
        setSearchInputValue,
        onSubmit,
      }}
    >
      {children}
    </SearchInputContext.Provider>
  );
}
