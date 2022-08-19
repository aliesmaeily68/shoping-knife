import React from "react";
import "./FooterBottom.css";
import { Container } from "react-bootstrap";
import Social from "../FooterTop/Social";

export default function FooterBottom() {
  return (
    <>
      {/* /////////////for media>1024///// */}
      <div className="Footer-Bottom">
        <Container>
          <hr />
          <p className="FooterBottom-Paragraph">
            طراحی شده توسط علی اسمعیلی و رویا تاران{" "}
          </p>
        </Container>
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
