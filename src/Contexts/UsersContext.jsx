import { createContext } from "react";
import { useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [showLoginSidebar, setShowLoginSidebar] = useState(false);
  const [showPasswordLoginForm, setShowPasswordLoginForm] = useState(false);
  const [showPasswordRegisterForm, setShowPasswordRegisterForm] =
    useState(false);

  const [nameRegisterForm, setNameRegisterForm] = useState(true);
  const [isKeyDownNameRegisterForm, setIsKeyDownNameRegisterForm] =
    useState(true);
  const [emailRegisterForm, setEmailRegisterForm] = useState(true);
  const [isKeyDownEmailRegisterForm, setIsKeyDownEmailRegisterForm] =
    useState(true);
  const [passwordRegisterForm, setPasswordRegisterForm] = useState(true);
  const [isKeyDownPasswordRegisterForm, setIsKeyDownPasswordRegisterForm] =
    useState(true);
  const [
    notCleanInputForFirstTimeRegisterForm,
    setNotCleanInputForFirstTimeRegisterForm,
  ] = useState(false);

  const [firstNameCheckout, setFirstNameCheckout] = useState("");
  const [validFirstNameCheckout, setValidFirstNameCheckout] = useState(true);
  const [lastNameCheckout, setLastNameCheckout] = useState("");
  const [validLastNameCheckout, setValidLastNameCheckout] = useState(true);
  const [cityNameCheckout, setCityNameCheckout] = useState("");
  const [validCityNameCheckout, setValidCityNameCheckout] = useState(true);
  const [addressNameCheckout, setAddressNameCheckout] = useState("");
  const [validAddressNameCheckout, setValidAddressNameCheckout] =
    useState(true);
  const [postalCodeCheckout, setPostalCodeCheckout] = useState("");
  const [validPostalCodeCheckout, setValidPostalCodeCheckout] = useState(true);
  const [tellNumberCheckout, setTellNumberCheckout] = useState("");
  const [validTellNumberCheckout, setValidTellNumberCheckout] = useState(true);
  const [emailCheckout, setEmailCheckout] = useState("");
  const [validEmailCheckout, setValidEmailCheckout] = useState(true);
  const [passwordCheckout, setPasswordCheckout] = useState("");
  const [validPasswordCheckout, setValidPasswordCheckout] = useState(true);
  const [userNameCheckout, setUserNameCheckout] = useState("");
  const [validUserNameCheckout, setValidUserNameCheckout] = useState(true);
  const [
    notCleanInputForFirstTimeCheckout,
    setNotCleanInputForFirstTimeCheckout,
  ] = useState(false);

  return (
    <UsersContext.Provider
      value={{
        showLoginSidebar,
        setShowLoginSidebar,
        showPasswordLoginForm,
        setShowPasswordLoginForm,
        showPasswordRegisterForm,
        setShowPasswordRegisterForm,

        nameRegisterForm,
        setNameRegisterForm,
        isKeyDownNameRegisterForm,
        setIsKeyDownNameRegisterForm,
        emailRegisterForm,
        setEmailRegisterForm,
        isKeyDownEmailRegisterForm,
        setIsKeyDownEmailRegisterForm,
        passwordRegisterForm,
        setPasswordRegisterForm,
        isKeyDownPasswordRegisterForm,
        setIsKeyDownPasswordRegisterForm,
        notCleanInputForFirstTimeRegisterForm,
        setNotCleanInputForFirstTimeRegisterForm,

        firstNameCheckout,
        setFirstNameCheckout,
        validFirstNameCheckout,
        setValidFirstNameCheckout,
        lastNameCheckout,
        setLastNameCheckout,
        validLastNameCheckout,
        setValidLastNameCheckout,
        cityNameCheckout,
        setCityNameCheckout,
        validCityNameCheckout,
        setValidCityNameCheckout,
        addressNameCheckout,
        setAddressNameCheckout,
        validAddressNameCheckout,
        setValidAddressNameCheckout,
        postalCodeCheckout,
        setPostalCodeCheckout,
        validPostalCodeCheckout,
        setValidPostalCodeCheckout,
        tellNumberCheckout,
        setTellNumberCheckout,
        validTellNumberCheckout,
        setValidTellNumberCheckout,
        emailCheckout,
        setEmailCheckout,
        validEmailCheckout,
        setValidEmailCheckout,
        passwordCheckout,
        setPasswordCheckout,
        validPasswordCheckout,
        setValidPasswordCheckout,
        userNameCheckout,
        setUserNameCheckout,
        validUserNameCheckout,
        setValidUserNameCheckout,
        notCleanInputForFirstTimeCheckout,
        setNotCleanInputForFirstTimeCheckout,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
