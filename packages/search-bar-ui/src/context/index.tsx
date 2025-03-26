import { Dispatch, SetStateAction, createContext } from "react";

export type SearchBarContextType = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export const SearchBarContext = createContext<SearchBarContextType | null>(
  null
);
