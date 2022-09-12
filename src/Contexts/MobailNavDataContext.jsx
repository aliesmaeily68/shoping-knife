import { createContext } from "react";
import { useState } from "react";

export const AllMobileNavContext = createContext();

export const MobileNavProvider = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <AllMobileNavContext.Provider
      value={{
        showMobileNav,
        setShowMobileNav,
      }}
    >
      {children}
    </AllMobileNavContext.Provider>
  );
};
