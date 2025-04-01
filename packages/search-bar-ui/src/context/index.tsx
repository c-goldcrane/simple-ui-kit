import { createContext } from "react";

export type SearchBarContextType = {
  contextValue: string;
  setContextValue: (value: string) => void;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onSubmit?: (value: string) => void;
};

export const SearchBarContext = createContext<SearchBarContextType | null>(
  null
);
