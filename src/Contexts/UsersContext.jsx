import { createContext } from "react";
import { useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState();
  const [userType, setUserType] = useState("user");
  const [loginFormUserNameOrEmailValue, setLoginFormUserNameOrEmailValue] =
    useState();
  const [loginFormPasswordValue, setLoginFormPasswordValue] = useState();
  const [isUserInData, setIsUserInData] = useState(false);
  const [showBillOrTransportationAddressRoute, setShowBillOrTransportationAddressRoute] = useState(false);
  const [showAccountRoute, setShowAccountRoute] = useState(false);
  const [showAccountDropDown, setShowAccountDropDown] = useState(false);
  const [showLoginSidebar, setShowLoginSidebar] = useState(false);
  const [showPasswordLoginForm, setShowPasswordLoginForm] = useState(false);
  const [showPasswordRegisterForm, setShowPasswordRegisterForm] =
    useState(false);

  const [nameRegisterForm, setNameRegisterForm] = useState(true);
  const [isKeyDownNameRegisterForm, setIsKeyDownNameRegisterForm] =
    useState(true);
  const [nameEditAcountForm, setNameEditAcountForm] = useState(true);
  const [isKeyDownNameEditAcountForm, setIsKeyDownNameEditAcountForm] =
    useState(true);
  const [lastNameEditAcountForm, setLastNameEditAcountForm] = useState(true);
  const [isKeyDownLastNameEditAcountForm, setIsKeyDownLastNameEditAcountForm] =
    useState(true);
  const [userNameEditAcountForm, setUserNameEditAcountForm] = useState(true);
  const [isKeyDownUserNameEditAcountForm, setIsKeyDownUserNameEditAcountForm] =
    useState(true);
  const [emailEditAcountForm, setEmailEditAcountForm] = useState(true);
  const [isKeyDownEmailEditAcountForm, setIsKeyDownEmailEditAcountForm] =
    useState(true);
  const [passwordEditAcountForm, setPasswordEditAcountForm] = useState(true);
  const [isKeyDownPasswordEditAcountForm, setIsKeyDownPasswordEditAcountForm] =
    useState(true);
  const [resetPasswordEditAcountForm, setResetPasswordEditAcountForm] = useState(true);
  const [isKeyDownResetPasswordEditAcountForm, setIsKeyDownResetPasswordEditAcountForm] =
    useState(true);
  const [repetPasswordEditAcountForm, setRepetPasswordEditAcountForm] = useState(true);
  const [isKeyDownRepetPasswordEditAcountForm, setIsKeyDownRepetPasswordEditAcountForm] =
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
  const [firstNameBillOrTransportation, setFirstNameBillOrTransportation] = useState("");
  const [validFirstNameBillOrTransportation, setValidFirstNameBillOrTransportation] = useState(true);
  const [lastNameBillOrTransportation, setLastNameBillOrTransportation] = useState("");
  const [validLastNameBillOrTransportation, setValidLastNameBillOrTransportation] = useState(true);
  const [cityNameBillOrTransportation, setCityNameBillOrTransportation] = useState("");
  const [validCityNameBillOrTransportation, setValidCityNameBillOrTransportation] = useState(true);
  const [addressNameBillOrTransportation, setAddressNameBillOrTransportation] = useState("");
  const [validAddressNameBillOrTransportation, setValidAddressNameBillOrTransportation] =
    useState(true);
  const [postalCodeBillOrTransportation, setPostalCodeBillOrTransportation] = useState("");
  const [validPostalCodeBillOrTransportation, setValidPostalCodeBillOrTransportation] = useState(true);
  const [tellNumberBillOrTransportation, setTellNumberBillOrTransportation] = useState("");
  const [validTellNumberBillOrTransportation, setValidTellNumberBillOrTransportation] = useState(true);
  const [emailBillOrTransportation, setEmailBillOrTransportation] = useState("");
  const [validEmailBillOrTransportation, setValidEmailBillOrTransportation] = useState(true);
  

  return (
    <UsersContext.Provider
      value={{
        showErrorMessage,
        setShowErrorMessage,
        titleErrorMessage,
        setTitleErrorMessage,
        userType,
        setUserType,
        loginFormUserNameOrEmailValue,
        setLoginFormUserNameOrEmailValue,
        loginFormPasswordValue,
        setLoginFormPasswordValue,
        isUserInData,
        setIsUserInData,
        showBillOrTransportationAddressRoute,
        setShowBillOrTransportationAddressRoute,
        showAccountRoute,
        setShowAccountRoute,
        showAccountDropDown,
        setShowAccountDropDown,
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
        nameEditAcountForm,
        setNameEditAcountForm,
        isKeyDownNameEditAcountForm,
        setIsKeyDownNameEditAcountForm,
        lastNameEditAcountForm,
        setLastNameEditAcountForm,
        isKeyDownLastNameEditAcountForm,
        setIsKeyDownLastNameEditAcountForm,
        userNameEditAcountForm,
        setUserNameEditAcountForm,
        isKeyDownUserNameEditAcountForm,
        setIsKeyDownUserNameEditAcountForm,
        emailEditAcountForm,
        setEmailEditAcountForm,
        isKeyDownEmailEditAcountForm,
        setIsKeyDownEmailEditAcountForm,
        passwordEditAcountForm,
        setPasswordEditAcountForm,
        isKeyDownPasswordEditAcountForm,
        setIsKeyDownPasswordEditAcountForm,
        resetPasswordEditAcountForm,
        setResetPasswordEditAcountForm,
        isKeyDownResetPasswordEditAcountForm,
        setIsKeyDownResetPasswordEditAcountForm,
        repetPasswordEditAcountForm,
        setRepetPasswordEditAcountForm,
        isKeyDownRepetPasswordEditAcountForm,
        setIsKeyDownRepetPasswordEditAcountForm,
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

        firstNameBillOrTransportation,
        setFirstNameBillOrTransportation,
        validFirstNameBillOrTransportation,
        setValidFirstNameBillOrTransportation,
        lastNameBillOrTransportation,
        setLastNameBillOrTransportation,
        validLastNameBillOrTransportation,
        setValidLastNameBillOrTransportation,
        cityNameBillOrTransportation,
        setCityNameBillOrTransportation,
        validCityNameBillOrTransportation,
        setValidCityNameBillOrTransportation,
        addressNameBillOrTransportation,
        setAddressNameBillOrTransportation,
        validAddressNameBillOrTransportation,
        setValidAddressNameBillOrTransportation,
        postalCodeBillOrTransportation,
        setPostalCodeBillOrTransportation,
        validPostalCodeBillOrTransportation,
        setValidPostalCodeBillOrTransportation,
        tellNumberBillOrTransportation,
        setTellNumberBillOrTransportation,
        validTellNumberBillOrTransportation,
        setValidTellNumberBillOrTransportation,
        emailBillOrTransportation,
        setEmailBillOrTransportation,
        validEmailBillOrTransportation,
        setValidEmailBillOrTransportation,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
