import React, { useEffect } from "react";

import "./Notfound.css";

export default function Notfound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Notfound">
      <img src="./Image/404.jpg" alt="NotFound" />
      <h1>صفحه مورد نظر یافت نشد </h1>
    </div>
  );
}
