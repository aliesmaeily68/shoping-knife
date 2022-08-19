import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Story from "./Story";
import QuickAccess from "./QuickAccess";
import FooterContact from "./FooterContact";
import "./FooterBody.css";

export default function FooterBody() {
  return (
    <div>
      {/* /////For Media>1024//// */}
      <div className="Container-FooterBody">
        <div className="Wrapper-FooterBody">
          <div className="Story-FooterBody">
            <Story />
          </div>
          <div className="Access-FooterBody">
            <QuickAccess />
          </div>
          <div className="Contact-FooterBody">
            <FooterContact />
          </div>
        </div>
      </div>

      {/* /////For Media<1024//// */}
      <div className="Container-FooterBody-M1024">
        <div className="Wrapper-FooterBody-M1024">
          <div className="Access-FooterBody-M1024">
            <QuickAccess />
          </div>
          <div className="hr"></div>
          <div className="Contact-FooterBody-M1024">
            <FooterContact />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
