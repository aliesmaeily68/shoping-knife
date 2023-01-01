import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { UsersContext } from "../../../Contexts/UsersContext";
import useFetch from "../../../hooks/useFetch";
import { setCookie, getCookie, loginDataset } from "../../../utils";

import "./LoginForm.css";
import { AllProductContext } from "../../../Contexts/ProductContext";

export default function LoginForm() {
  const DataUsersContext = useContext(UsersContext);
  const DataProductContext = useContext(AllProductContext);

  const [isChecked, setIschecked] = useState();

  const { posts } = useFetch(
    "https://myknife-2e73f-default-rtdb.firebaseio.com/users.json",
    DataUsersContext.getuserData
  );
  useEffect(() => {
    if (getCookie("setToken") || sessionStorage.getItem("SessionToken")) {
      let Alluser = posts.map((user, index) => {
        let newusers = { ...user[1], id: index + 1, userId: user[0] };
        return newusers;
      });
      const IsUserInData = Alluser.some(
        (user) =>
          user.token == getCookie("setToken") ||
          user.token == sessionStorage.getItem("SessionToken")
      );
      const UserData = Alluser.find(
        (user) =>
          user.token == getCookie("setToken") ||
          user.token == sessionStorage.getItem("SessionToken")
      );

      DataUsersContext.setIsUserInData(IsUserInData);
      if (IsUserInData) {
        if (UserData.post == "کاربر") {
          DataUsersContext.setUserType("user");
        } else if (UserData.post == "مدیر") {
          DataUsersContext.setUserType("admin");
        }
        DataUsersContext.setLoginFormUserNameOrEmailValue(UserData.userName);
        loginDataset(DataUsersContext, UserData);
      }
    }
  });

  const SubmitLoginForm = (e) => {
    e.preventDefault();

    let Alluser = posts.map((user, index) => {
      let newusers = { ...user[1], id: index + 1, userId: user[0] };
      return newusers;
    });
    const IsUserInData = Alluser.some(
      (user) =>
        user.password == DataUsersContext.loginFormPasswordValue &&
        (user.userName == DataUsersContext.loginFormUserNameOrEmailValue ||
          user.email == DataUsersContext.loginFormUserNameOrEmailValue)
    );
    const UserData = Alluser.find(
      (user) =>
        user.password == DataUsersContext.loginFormPasswordValue &&
        (user.userName == DataUsersContext.loginFormUserNameOrEmailValue ||
          user.email == DataUsersContext.loginFormUserNameOrEmailValue)
    );
    if (isChecked && IsUserInData) {
      setCookie("login-setToken", UserData.token, 6);
    }

    DataUsersContext.setIsUserInData(IsUserInData);

    if (IsUserInData) {
      if (UserData.post == "کاربر") {
        DataUsersContext.setUserType("user");
      } else if (UserData.post == "مدیر") {
        DataUsersContext.setUserType("admin");
      }
      sessionStorage.setItem("SessionToken", UserData.token);
      loginDataset(DataUsersContext, UserData);

      const seenCartProductArray = new Set();
      const userCartProductArray = [
        ...DataProductContext.userCart,
        ...UserData.userDatas.userCart,
      ];
      const filteredCartProductArr = userCartProductArray.filter((product) => {
        const duplicate = seenCartProductArray.has(product.title);
        seenCartProductArray.add(product.title);
        return !duplicate;
      });
      {
        UserData.userDatas.userCart || DataProductContext.userCart
          ? DataProductContext.setUserCart(filteredCartProductArr)
          : DataProductContext.setUserCart("");
      }

      {
        UserData.userDatas.userCart || DataProductContext.userCart
          ? localStorage.setItem(
              "userProductCart",
              JSON.stringify(filteredCartProductArr)
            )
          : localStorage.setItem("userProductCart", JSON.stringify(""));
      }
      let total = 0;
      let counterProduct = 0;
      filteredCartProductArr &&
        filteredCartProductArr.map((product) => {
          total += product.price * product.conter;
          counterProduct += product.conter;
        });
      DataProductContext.setTotal(total);
      DataProductContext.setCartConter(counterProduct);
      localStorage.setItem("totalProductsCart", JSON.stringify(total));
      localStorage.setItem(
        "counterProductsCart",
        JSON.stringify(counterProduct)
      );

      const seenFavoritesArray = new Set();

      const userFavoritesArray = [
        ...UserData.userDatas.userFavorites,
        ...DataProductContext.userFavorites,
      ];
      const filteredFavoritesArr = userFavoritesArray.filter((product) => {
        const duplicate = seenFavoritesArray.has(product.title);
        seenFavoritesArray.add(product.title);
        return !duplicate;
      });
      {
        UserData.userDatas.userFavorites || DataProductContext.userFavorites
          ? DataProductContext.setUserFavorites(filteredFavoritesArr)
          : DataProductContext.setUserFavorites("");
      }

      {
        UserData.userDatas.userFavorites || DataProductContext.userFavorites
          ? localStorage.setItem(
              "userFavorites",
              JSON.stringify(filteredFavoritesArr)
            )
          : localStorage.setItem("userFavorites", JSON.stringify(""));
      }
      DataProductContext.setFavoritesConter(filteredFavoritesArr.length);
      localStorage.setItem(
        "counterFavorites",
        JSON.stringify(filteredFavoritesArr.length)
      );

      const seenComparisonArray = new Set();
      const userComparisonArray = [
        ...UserData.userDatas.userComparison,
        ...DataProductContext.userComparison,
      ];
      const filteredComparisonArr = userComparisonArray.filter((product) => {
        const duplicate = seenComparisonArray.has(product.title);
        seenComparisonArray.add(product.title);
        return !duplicate;
      });
      {
        UserData.userDatas.userComparison || DataProductContext.userComparison
          ? DataProductContext.setUserComparison(filteredComparisonArr)
          : DataProductContext.setUserComparison("");
      }
      DataProductContext.setComparisonConter(filteredComparisonArr.length);

      {
        UserData.userDatas.userComparison || DataProductContext.userComparison
          ? localStorage.setItem(
              "userComparison",
              JSON.stringify(filteredComparisonArr)
            )
          : localStorage.setItem("userComparison", JSON.stringify(""));
      }
      localStorage.setItem(
        "counterComparison",
        JSON.stringify(filteredComparisonArr.length)
      );
    } else {
      DataUsersContext.setTitleErrorMessage(
        "لطفا نام کاربری و رمز عبور معتبر وارد نمایید."
      );
      DataUsersContext.setShowErrorMessage(true);
      DataUsersContext.setLoginFormUserNameOrEmailValue("");
      DataUsersContext.setLoginFormPasswordValue("");
      setTimeout(() => {
        DataUsersContext.setShowErrorMessage(false);
      }, 4000);
    }
  };
  return (
    <>
      <div className="Container-LoginForm">
        <div className="Wrapper-LoginForm">
          <form action="#" onSubmit={(e) => SubmitLoginForm(e)}>
            <div className="NameOrEmail-LoginForm">
              <label htmlFor="#">
                <span>نام کاربری یا آدرس ایمیل </span>
                <span className="Star-LoginForm">*</span>
              </label>
              <input
                value={DataUsersContext.loginFormUserNameOrEmailValue}
                type="text"
                onChange={(e) =>
                  DataUsersContext.setLoginFormUserNameOrEmailValue(
                    e.target.value
                  )
                }
              />
            </div>
            <div className="password-LoginForm">
              <label htmlFor="#">
                <span>رمز ورود</span>
                <span className="Star-LoginForm">*</span>
              </label>
              {DataUsersContext.showPasswordLoginForm ? (
                <div className="Eye-Password-LoginForm">
                  <div className="Eye-LoginForm">
                    <AiOutlineEye
                      size={20}
                      onClick={() =>
                        DataUsersContext.setShowPasswordLoginForm(false)
                      }
                    />
                  </div>
                  <input
                    value={DataUsersContext.loginFormPasswordValue}
                    type="text"
                    onChange={(e) =>
                      DataUsersContext.setLoginFormPasswordValue(e.target.value)
                    }
                  />
                </div>
              ) : (
                <div className="Eye-Password-LoginForm">
                  <div className="Eye-LoginForm">
                    <AiOutlineEyeInvisible
                      size={20}
                      onClick={() =>
                        DataUsersContext.setShowPasswordLoginForm(true)
                      }
                    />
                  </div>
                  <input
                    value={DataUsersContext.loginFormPasswordValue}
                    type="password"
                    onChange={(e) =>
                      DataUsersContext.setLoginFormPasswordValue(e.target.value)
                    }
                  />
                </div>
              )}
            </div>
            <button className="Submit-LoginForm">ورود</button>
            <div className="Forget-Remember-LoginForm">
              <div className="Remember-LoginForm">
                <input
                  type="checkbox"
                  onChange={(event) => setIschecked(event.target.checked)}
                />
                <label htmlFor="#">
                  <span>مرا به خاطر بسپار</span>
                </label>
              </div>
              <Link to={"/my-account/lost-account"}>
                {" "}
                <span className="Forget-LoginForm">
                  رمز عبور را فراموش کرده اید؟
                </span>{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
