function setCookie(cookieName, cookieValue, exDay) {
    let now = new Date();
    now.setTime(now.getTime() + `${exDay}` * 24 * 3600 * 1000);

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

function deleteCooKie(cookieName, deleteExDay) {
    let now = new Date()
    now.setTime(now.getTime() - deleteExDay * 24 * 60 * 60 * 1000)

    document.cookie = `${cookieName}=22;Path=/;Expires= ${now} `
}

function loginDataset(context, userData) {
    context.setFirstNameCheckout(userData.firstName);
    context.setLastNameCheckout(userData.lastName);
    context.setCompanyNameCheckout(userData.companyName);
    context.setCountryNameCheckout(userData.countryName);
    context.setStateNameCheckout(userData.stateName);
    context.setCityNameCheckout(userData.city);
    context.setAddressNameCheckout(userData.addressName);
    context.setPostalCodeCheckout(userData.postalCode);
    context.setTellNumberCheckout(userData.tellNumber);
    context.setMoreInfoCheckout(userData.moreInfo);
    context.setUserId(userData.userId);
    context.setUserToken(userData.token);
    context.setUserpost(userData.post);
    context.setEmailCheckout(userData.email);
    context.setPasswordCheckout(userData.password);
    context.setUserNameCheckout(userData.userName);
    context.setShowLoginSidebar(false);
    // context.setShowAccountRoute(false);
}


function loginDataProductset(context, userData) {
    context.setCartConter(userData.userDatas.cartConter);
    context.setFavoritesConter(userData.userDatas.favoritesConter);
    context.setComparisonConter(userData.userDatas.comparisonConter);
    context.setTotal(userData.userDatas.total);
    context.setUserCart(userData.userDatas.userCart);
    context.setUserFavorites(userData.userDatas.userFavorites);
    context.setUserComparison(userData.userDatas.userComparison);
}

function clearAllInputData(context) {
    context.setFirstNameCheckout("");
    context.setLastNameCheckout("");
    context.setCompanyNameCheckout("");
    context.setCountryNameCheckout("");
    context.setStateNameCheckout("");
    context.setCityNameCheckout("");
    context.setAddressNameCheckout("");
    context.setPostalCodeCheckout("");
    context.setTellNumberCheckout("");
    context.setMoreInfoCheckout("");
    context.setUserId("");
    context.setUserToken("");
    context.setUserpost("");
    context.setEmailCheckout("");
    context.setPasswordCheckout("");
    context.setUserNameCheckout("");
    context.setLoginFormUserNameOrEmailValue("");
    context.setLoginFormPasswordValue("");
    context.setPasswordRegisterFormValue("");
    context.setNameRegisterFormValue("");
    context.setEmailRegisterFormValue("");
}



function userDatas(conText) {
    const UserDatasObj = {
        cartConter: conText.cartConter,
        favoritesConter: conText.favoritesConter,
        comparisonConter: conText.comparisonConter,
        total: conText.total,
        userCart: "",
        userFavorites: "",
        userComparison: "",
    }
    return UserDatasObj
}
function clearuserDatas(conText) {
    conText.setCartConter(0);
    conText.setFavoritesConter(0);
    conText.setComparisonConter(0);
    conText.setTotal(0);
    conText.setUserCart([]);
    conText.setUserFavorites([]);
    conText.setUserComparison([]);
}

function exitAccount(DataUsersContext, DataProductContext) {
    let NewUsersObj = {
        token: DataUsersContext.userToken,
        firstName: DataUsersContext.firstNameCheckout,
        lastName: DataUsersContext.lastNameCheckout,
        companyName: DataUsersContext.companyNameCheckout,
        countryName: DataUsersContext.countryNameCheckout,
        stateName: DataUsersContext.stateNameCheckout,
        city: DataUsersContext.cityNameCheckout,
        addressName: DataUsersContext.addressNameCheckout,
        postalCode: DataUsersContext.postalCodeCheckout,
        tellNumber: DataUsersContext.tellNumberCheckout,
        email: DataUsersContext.emailCheckout,
        password: DataUsersContext.passwordCheckout,
        moreInfo: DataUsersContext.moreInfoCheckout,
        userName: DataUsersContext.userNameCheckout,
        post: DataUsersContext.userpost,
        userDatas: {
            cartConter: DataProductContext.cartConter,
            favoritesConter: DataProductContext.favoritesConter,
            comparisonConter: DataProductContext.comparisonConter,
            total: DataProductContext.total,
            userCart: DataProductContext.userCart,
            userFavorites: DataProductContext.userFavorites,
            userComparison: DataProductContext.userComparison,
        },
    };
    fetch(
        `https://aaaa-f46f5-default-rtdb.firebaseio.com//users/${DataUsersContext.userId}.json`,
        {
            method: "PUT",
            body: JSON.stringify(NewUsersObj),
        }
    ).then((res) => {
        if (res.status == 200) {
            DataUsersContext.setIsUserInData(false);
            deleteCooKie("login-setToken", 50);
            clearAllInputData(DataUsersContext);
            clearuserDatas(DataProductContext);
            window.location.reload();
            localStorage.clear();
            sessionStorage.setItem("SessionToken", 0);
        } else {
            DataUsersContext.setShowErrorMessage(true);
            DataUsersContext.setTitleErrorMessage(
                "لطفا دوباره امتحان کنید"
            );
            setTimeout(() => {
                DataUsersContext.setShowErrorMessage(true);
            }, 3000);
        }
    });
}

export { setCookie, getCookie, deleteCooKie, loginDataset, loginDataProductset, clearAllInputData, userDatas, clearuserDatas, exitAccount }