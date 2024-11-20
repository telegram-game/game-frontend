import React, { createContext, ReactNode, useContext, useState } from "react";

// Define the types for the context value
interface PopupContextType {
  isOpen: boolean;
  popupContent: ReactNode; // The content of the popup, which will be JSX
  openPopup: (content: ReactNode) => void; // Accepts JSX content to display
  closePopup: () => void;
}

// Create the context with a default value of undefined (we'll provide it via the Provider)
const PopupContext = createContext<PopupContextType | undefined>(undefined);

// Create a custom hook to use PopupContext
export const usePopup = (): PopupContextType => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};

// Define the props for the PopupProvider component
interface PopupProviderProps {
  children: ReactNode;
}

// Create a Provider component
export const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [popupContent, setPopupContent] = useState<ReactNode>(null);

  const openPopup = (content: ReactNode) => {
    setPopupContent(content);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setPopupContent(null); // Clear the content when closing the popup
  };

  return (
    <PopupContext.Provider
      value={{ isOpen, popupContent, openPopup, closePopup }}
    >
      {children}
    </PopupContext.Provider>
  );
};
