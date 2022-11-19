import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useContext } from "react";
import { AllProductContext } from "../../Contexts/ProductContext";
import { UsersContext } from "../../Contexts/UsersContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import "./Search.css";

export default function () {
  const DataContext = useContext(AllProductContext);
  const DataUserContexte = useContext(UsersContext);

  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const goToSearch = () => {
    if (searchValue.length) {
      navigate(`/search/${searchValue}`);
    } else {
      swal({
        title: "متن جستجو خالی می باشد",
        icon: "warning",
        buttons: "ok",
      });
    }
  };
  const SearchHandler = () => {
    DataContext.setShowCartBag(false);
    DataUserContexte.setShowLoginSidebar(false);
  };
  return (
    <div className="Search" onClick={() => SearchHandler()}>
      <input
        type="text"
        className="Search-Input"
        placeholder="جستجو ..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <div className="Search-Icon" onClick={goToSearch}>
        <GoSearch />
      </div>
    </div>
  );
}
