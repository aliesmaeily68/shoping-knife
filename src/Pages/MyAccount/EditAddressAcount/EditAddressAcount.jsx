import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./EditAddressAcount.css";
import { Outlet } from "react-router";
import { UsersContext } from "../../../Contexts/UsersContext";
export default function EditAddressAcount() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <>
      {DataUsersContext.showBillOrTransportationAddressRoute ? (
        <Outlet />
      ) : (
        <div className="Container-EditAddressAcount">
          <div className="Wrapper-EditAddressAcount">
            <h2>
              آدرس‌های زیر به طور پیش‌فرض در صفحه پرداخت مورد استفاده قرار
              مي‌گیرد.
            </h2>
            <ul className="ListGroup-EditAddressAcount">
              <li>
                <h3>
                  آدرس صورتحساب{" "}
                  <Link
                    to="bill-address"
                    onClick={() =>
                      DataUsersContext.setShowBillOrTransportationAddressRoute(
                        true
                      )
                    }
                  >
                    <span>افزودن</span>
                  </Link>
                </h3>
                <p>شما هنوز این آدرس را ثبت نکرده‌اید.</p>
              </li>
              <li>
                <h3>
                  آدرس حمل و نقل{" "}
                  <Link
                    to="transportation-address"
                    onClick={() =>
                      DataUsersContext.setShowBillOrTransportationAddressRoute(
                        true
                      )
                    }
                  >
                    <span>افزودن</span>
                  </Link>
                </h3>
                <p>شما هنوز این آدرس را ثبت نکرده‌اید.</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
