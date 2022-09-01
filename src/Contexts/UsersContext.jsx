import { createContext } from "react";
import { useState } from "react";
 

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [showLoginSidebar, setShowLoginSidebar] = useState(false);
  const [showPasswordLoginForm, setShowPasswordLoginForm] = useState(false);
  const [showPasswordRegisterForm, setShowPasswordRegisterForm] = useState(false);


  return (
    <UsersContext.Provider
      value={{
        showLoginSidebar,
        setShowLoginSidebar,
        showPasswordLoginForm,
        setShowPasswordLoginForm,
        showPasswordRegisterForm,
        setShowPasswordRegisterForm
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
