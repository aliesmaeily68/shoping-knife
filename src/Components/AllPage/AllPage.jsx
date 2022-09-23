import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "../../routes";
import { useContext } from "react";
import { AllProductContext } from "../../Contexts/ProductContext";
import { UsersContext } from "../../Contexts/UsersContext";

export default function AllPage() {
  let route = useRoutes(routes);
  const DataContext = useContext(AllProductContext);
  const DataUserContexte = useContext(UsersContext);
 
  const AllPageHandler = () => {
    DataContext.setShowCartBag(false);
    DataUserContexte.setShowLoginSidebar(false);
    DataContext.setShowCategories(false)
  };
  return <div onClick={AllPageHandler}>{route}</div>;
}
