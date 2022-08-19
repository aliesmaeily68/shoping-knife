import React from "react";
import { TbArrowsShuffle } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgMoreO } from "react-icons/cg";
import "./ProductIconCard.css";
import { Link } from "react-router-dom";

export default function ProductIconCard(props) {
  return (
    <>
      <div className="Card-Icons">
        <div className="card-Icon">
          <TbArrowsShuffle />
        </div>
        <div className="card-Icon">
          <AiOutlineHeart />
        </div>
        <div className="card-Icon">
          <Link to={`/product/${props.id}-${props.title}`}>
          <CgMoreO />
          </Link>
         
        </div>
      </div>
    </>
  );
}
