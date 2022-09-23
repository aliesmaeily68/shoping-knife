import React, { useEffect } from "react";
import BillOrTransportationForm from "../../../../Components/BillOrTransportationForm/BillOrTransportationForm";

import "./TransportationAddress.css";
export default function TransportationAddress() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Container-TransportationAddress">
      <div className="Wrapper-TransportationAddress">
        <h2>آدرس حمل و نقل</h2>
        <BillOrTransportationForm />
      </div>
    </div>
  );
}
