import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import UserCartDataGrid from "./UserCartDataGrid/UserCartDataGrid";
import FavoritesAndComparisonDataGrid from "./FavoritesAndComparisonDataGrid/FavoritesAndComparisonDataGrid";

import "./MainDashboardUser.css";

export default function MainDashboardUser() {
  let Params = useParams();
  const [allUser, setAllUser] = useState([]);
  let MainUser = [];
  let HasUserInData = false;
  useEffect(() => {
    fetch("https://aaaa-f46f5-default-rtdb.firebaseio.com//users.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setAllUser(Object.entries(data));
        }
      });
  }, [allUser]);

  MainUser = allUser.find((user) => Params.userId == user[0]);
  HasUserInData = allUser.some((user) => Params.userId == user[0]);
  // console.log(MainUser[1]);
  return (
    <>
      {HasUserInData && (
        <div className="Container-UserData">
          <div className="Info-UserData">
            <div className="General-Info-UserData">
              <h1 className="Title-General-Info-UserData">اطلاعات کاربر</h1>
              <div className="Table-UserData">
                <table>
                  <thead>
                    <tr>
                      <th>وضعیت کاربر </th>
                      <th>نام کاربری </th>
                      <th>ایمیل</th>
                      <th>نام و نام خانوادگی </th>
                      <th>پسوورد </th>
                      <th>شماره تماس </th>
                      <th>آدرس</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{MainUser[1].post}</td>
                      <td> {MainUser[1].userName}</td>
                      <td>{MainUser[1].email}</td>
                      <td>
                        {MainUser[1].firstName} {MainUser[1].lastName}
                      </td>

                      <td>{MainUser[1].password}</td>
                      <td>{MainUser[1].tellNumber}</td>
                      <td>
                        {MainUser[1].countryName}-{MainUser[1].stateName}-
                        {MainUser[1].city}-{MainUser[1].addressName}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="Buy-Info-UserData">
              <h2 className="Title-UserCart-UserData">
                محصولات انتخاب شده کاربر
              </h2>
              <UserCartDataGrid {...MainUser[1].userDatas} />

              <h2 className="Title-Favorites-UserData">
                محصولات مورد علاقه کاربر
              </h2>
              <FavoritesAndComparisonDataGrid
                {...MainUser[1].userDatas.userFavorites}
              />

              <h2 className="Title-Comparison-UserData">
                محصولات مقایسه ای کاربر
              </h2>
              <FavoritesAndComparisonDataGrid
                {...MainUser[1].userDatas.userComparison}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
