import React, { useEffect } from "react";
import BillOrTransportationForm from "../../../../Components/BillOrTransportationForm/BillOrTransportationForm";

import "./BillAddress.css";

export default function BillAddress() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Container-BillAddress">
      <div className="Wrapper-BillAddress">
        <h2>آدرس صورتحساب</h2>
        <BillOrTransportationForm />
      </div>
    </div>
  );
}
