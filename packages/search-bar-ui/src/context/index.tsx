import { createContext } from "react";

export type SearchBarContextType = {
  value: string;
  setValue: (value: string) => void;
  isFocused: boolean;
  setIsFocused: (value: boolean) => void;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

export const SearchBarContext = createContext<SearchBarContextType | null>(
  null
);
