function setCookie(cookieName, cookieValue, ExDay) {
    let now = new Date();
    now.setTime(now.getTime() + `${ExDay}` * 24 * 3600 * 1000);

    document.cookie = `${cookieName}=${cookieValue};Path=/;Expires=${now}`;
}

function getCookie(cookieName) {
    let mainGetCookie = null;
    let ArrayCookies = document.cookie.split(";");
    ArrayCookies.some((cookei) => {
        if (cookei.includes(cookieName)) {
            mainGetCookie = cookei.substring(cookei.indexOf("=") + 1);
            return true;
        }
    });
    return mainGetCookie;
}

function deleteCooKie(cookieName, DeleteExDay) {
    let now = new Date()
    now.setTime(now.getTime() - DeleteExDay * 24 * 60 * 60 * 1000)

    document.cookie = `${cookieName}=22;Path=/;Expires= ${now} `
}

function loginDataset(DataUsersContext, UserData) {

    DataUsersContext.setFirstNameCheckout(UserData.firstName);
    DataUsersContext.setLastNameCheckout(UserData.lastName);
    DataUsersContext.setCompanyNameCheckout(UserData.companyName);
    DataUsersContext.setCountryNameCheckout(UserData.countryName);
    DataUsersContext.setStateNameCheckout(UserData.stateName);
    DataUsersContext.setCityNameCheckout(UserData.city);
    DataUsersContext.setAddressNameCheckout(UserData.addressName);
    DataUsersContext.setPostalCodeCheckout(UserData.postalCode);
    DataUsersContext.setTellNumberCheckout(UserData.tellNumber);
    DataUsersContext.setMoreInfoCheckout(UserData.moreInfo);
    DataUsersContext.setUserId(UserData.userId);
    DataUsersContext.setUserToken(UserData.token);
    DataUsersContext.setUserpost(UserData.post);
    DataUsersContext.setEmailCheckout(UserData.email);
    DataUsersContext.setPasswordCheckout(UserData.password);
    DataUsersContext.setUserNameCheckout(UserData.userName);
    DataUsersContext.setShowLoginSidebar(false);
    DataUsersContext.setShowAccountRoute(false);
}

function clearAllInputData(DataUsersContext) {
    DataUsersContext.setFirstNameCheckout("");
    DataUsersContext.setLastNameCheckout("");
    DataUsersContext.setCompanyNameCheckout("");
    DataUsersContext.setCountryNameCheckout("");
    DataUsersContext.setStateNameCheckout("");
    DataUsersContext.setCityNameCheckout("");
    DataUsersContext.setAddressNameCheckout("");
    DataUsersContext.setPostalCodeCheckout("");
    DataUsersContext.setTellNumberCheckout("");
    DataUsersContext.setMoreInfoCheckout("");
    DataUsersContext.setUserId("");
    DataUsersContext.setUserToken("");
    DataUsersContext.setUserpost("");
    DataUsersContext.setEmailCheckout("");
    DataUsersContext.setPasswordCheckout("");
    DataUsersContext.setUserNameCheckout("");
    DataUsersContext.setLoginFormUserNameOrEmailValue("");
    DataUsersContext.setLoginFormPasswordValue("");
    DataUsersContext.setPasswordRegisterFormValue("");
    DataUsersContext.setNameRegisterFormValue("")
    DataUsersContext.setEmailRegisterFormValue("")
}


export { setCookie, getCookie, deleteCooKie, loginDataset, clearAllInputData }