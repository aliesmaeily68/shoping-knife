import React from "react";
import "./FooterBottom.css";
import { Container } from "react-bootstrap";
import Social from "../FooterTop/Social";

export default function FooterBottom() {
  return (
    <>
      {/* /////////////for media>1024///// */}
      <div className="Footer-Bottom">
        <hr />
        <p className="FooterBottom-Paragraph">
          طراحی شده توسط علی اسمعیلی و رویا تاران{" "}
        </p>
      </div>

      {/* /////////////for media<1024///// */}
      <div className="Footer-Bottom-Social">
        <div className="Main-Social">
          {" "}
          <Social />
        </div>
      </div>
    </>
  );
}
