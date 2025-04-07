import { createContext, useState } from "react";

export type DropdownContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const DropdownContext = createContext<DropdownContextType | null>(null);

export function DropdownProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}
