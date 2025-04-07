import { createContext, useState } from "react";

export type SuggestionContextType = {
  selectedItemIndex: number;
  selectedSuggestionItem: string;
  setSelectedItemIndex: (index: number) => void;
  setSelectedSuggestionItem: (item: string) => void;
};

export const SuggestionContext = createContext<SuggestionContextType | null>(
  null
);

export function SuggestionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [selectedSuggestionItem, setSelectedSuggestionItem] = useState("");

  return (
    <SuggestionContext.Provider
      value={{
        selectedItemIndex,
        selectedSuggestionItem,
        setSelectedItemIndex,
        setSelectedSuggestionItem,
      }}
    >
      {children}
    </SuggestionContext.Provider>
  );
}
