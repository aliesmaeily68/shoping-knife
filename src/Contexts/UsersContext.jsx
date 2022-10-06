import { createContext } from "react";
import { useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [allUser, setAllUser] = useState();
  const [usersDataFlag, setUsersDataFlag] = useState(false);
  const [getuserData, setGetuserData] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [titleSuccessMessage, setTitleSuccessMessage] = useState();
  const [userId, setUserId] = useState("");
  const [userToken, setUserToken] = useState("");
  const [userpost, setUserpost] = useState("");
  const [userType, setUserType] = useState("");
  const [loginFormUserNameOrEmailValue, setLoginFormUserNameOrEmailValue] =
    useState();
  const [loginFormPasswordValue, setLoginFormPasswordValue] = useState();
  const [isUserInData, setIsUserInData] = useState(false);
  const [showDashboardAdmin, setShowDashboardAdmin] = useState(false);
  const [
    showBillOrTransportationAddressRoute,
    setShowBillOrTransportationAddressRoute,
  ] = useState(false);
  const [showAccountRoute, setShowAccountRoute] = useState(false);
  const [showAccountDropDown, setShowAccountDropDown] = useState(false);
  const [showLoginSidebar, setShowLoginSidebar] = useState(false);
  const [showPasswordLoginForm, setShowPasswordLoginForm] = useState(false);
  const [showPasswordRegisterForm, setShowPasswordRegisterForm] =
    useState(false);

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
  const [resetPasswordEditAcountForm, setResetPasswordEditAcountForm] =
    useState(true);
  const [
    resetPasswordEditAcountFormValue,
    setResetPasswordEditAcountFormValue,
  ] = useState("");
  const [
    isKeyDownResetPasswordEditAcountForm,
    setIsKeyDownResetPasswordEditAcountForm,
  ] = useState(true);
  const [repetPasswordEditAcountForm, setRepetPasswordEditAcountForm] =
    useState(true);
  const [
    repetPasswordEditAcountFormValue,
    setRepetPasswordEditAcountFormValue,
  ] = useState("");
  const [
    isKeyDownRepetPasswordEditAcountForm,
    setIsKeyDownRepetPasswordEditAcountForm,
  ] = useState(true);

  const [nameRegisterFormValue, setNameRegisterFormValue] = useState();
  const [nameRegisterForm, setNameRegisterForm] = useState(true);
  const [isKeyDownNameRegisterForm, setIsKeyDownNameRegisterForm] =
    useState(true);
  const [emailRegisterFormValue, setEmailRegisterFormValue] = useState();
  const [emailRegisterForm, setEmailRegisterForm] = useState(true);
  const [isKeyDownEmailRegisterForm, setIsKeyDownEmailRegisterForm] =
    useState(true);
  const [passwordRegisterFormValue, setPasswordRegisterFormValue] = useState();
  const [passwordRegisterForm, setPasswordRegisterForm] = useState(true);
  const [isKeyDownPasswordRegisterForm, setIsKeyDownPasswordRegisterForm] =
    useState(true);

  const [firstNameCheckout, setFirstNameCheckout] = useState("");
  const [validFirstNameCheckout, setValidFirstNameCheckout] = useState(true);
  const [lastNameCheckout, setLastNameCheckout] = useState("");
  const [validLastNameCheckout, setValidLastNameCheckout] = useState(true);
  const [companyNameCheckout, setCompanyNameCheckout] = useState("");
  const [countryNameCheckout, setCountryNameCheckout] = useState("ایران");
  const [stateNameCheckout, setStateNameCheckout] = useState("زنجان");
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
  const [moreInfoCheckout, setMoreInfoCheckout] = useState("");
  const [validPasswordCheckout, setValidPasswordCheckout] = useState(true);
  const [userNameCheckout, setUserNameCheckout] = useState("");
  const [validUserNameCheckout, setValidUserNameCheckout] = useState(true);

  const [
    validFirstNameBillOrTransportation,
    setValidFirstNameBillOrTransportation,
  ] = useState(true);
  const [
    validLastNameBillOrTransportation,
    setValidLastNameBillOrTransportation,
  ] = useState(true);
  const [
    validCityNameBillOrTransportation,
    setValidCityNameBillOrTransportation,
  ] = useState(true);
  const [
    validAddressNameBillOrTransportation,
    setValidAddressNameBillOrTransportation,
  ] = useState(true);
  const [
    validPostalCodeBillOrTransportation,
    setValidPostalCodeBillOrTransportation,
  ] = useState(true);
  const [
    validTellNumberBillOrTransportation,
    setValidTellNumberBillOrTransportation,
  ] = useState(true);
  const [validEmailBillOrTransportation, setValidEmailBillOrTransportation] =
    useState(true);

  return (
    <UsersContext.Provider
      value={{
        allUser,
        setAllUser,
        usersDataFlag,
        setUsersDataFlag,
        getuserData,
        setGetuserData,
        showErrorMessage,
        setShowErrorMessage,
        titleErrorMessage,
        setTitleErrorMessage,
        showSuccessMessage,
        setShowSuccessMessage,
        titleSuccessMessage,
        setTitleSuccessMessage,
        userId,
        setUserId,
        userToken,
        setUserToken,
        userpost,
        setUserpost,
        userType,
        setUserType,
        loginFormUserNameOrEmailValue,
        setLoginFormUserNameOrEmailValue,
        loginFormPasswordValue,
        setLoginFormPasswordValue,
        isUserInData,
        setIsUserInData,
        showDashboardAdmin,
        setShowDashboardAdmin,
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
        resetPasswordEditAcountFormValue,
        setResetPasswordEditAcountFormValue,
        isKeyDownResetPasswordEditAcountForm,
        setIsKeyDownResetPasswordEditAcountForm,
        repetPasswordEditAcountForm,
        setRepetPasswordEditAcountForm,
        repetPasswordEditAcountFormValue,
        setRepetPasswordEditAcountFormValue,
        isKeyDownRepetPasswordEditAcountForm,
        setIsKeyDownRepetPasswordEditAcountForm,

        nameRegisterFormValue,
        setNameRegisterFormValue,
        nameRegisterForm,
        setNameRegisterForm,
        isKeyDownNameRegisterForm,
        setIsKeyDownNameRegisterForm,
        emailRegisterFormValue,
        setEmailRegisterFormValue,
        emailRegisterForm,
        setEmailRegisterForm,
        isKeyDownEmailRegisterForm,
        setIsKeyDownEmailRegisterForm,
        passwordRegisterFormValue,
        setPasswordRegisterFormValue,
        passwordRegisterForm,
        setPasswordRegisterForm,
        isKeyDownPasswordRegisterForm,
        setIsKeyDownPasswordRegisterForm,

        firstNameCheckout,
        setFirstNameCheckout,
        validFirstNameCheckout,
        setValidFirstNameCheckout,
        lastNameCheckout,
        setLastNameCheckout,
        validLastNameCheckout,
        setValidLastNameCheckout,
        companyNameCheckout,
        setCompanyNameCheckout,
        countryNameCheckout,
        setCountryNameCheckout,
        stateNameCheckout,
        setStateNameCheckout,
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
        moreInfoCheckout,
        setMoreInfoCheckout,
        validPasswordCheckout,
        setValidPasswordCheckout,
        userNameCheckout,
        setUserNameCheckout,
        validUserNameCheckout,
        setValidUserNameCheckout,

        validFirstNameBillOrTransportation,
        setValidFirstNameBillOrTransportation,
        validLastNameBillOrTransportation,
        setValidLastNameBillOrTransportation,
        validCityNameBillOrTransportation,
        setValidCityNameBillOrTransportation,
        validAddressNameBillOrTransportation,
        setValidAddressNameBillOrTransportation,
        validPostalCodeBillOrTransportation,
        setValidPostalCodeBillOrTransportation,
        validTellNumberBillOrTransportation,
        setValidTellNumberBillOrTransportation,
        validEmailBillOrTransportation,
        setValidEmailBillOrTransportation,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
