import React from "react";
import { Link } from "react-router-dom";
import {BsArrowLeft} from 'react-icons/bs'
import InfoContact from "../../Components/Contact/InfoContact";
import FrequentlyAskedQuestionsContact from "../../Components/Contact/FrequentlyAskedQuestionsContact";

import './Contact.css'

export default function Contact() {
  return (
    <>
       <div className="Breadcrumb-Contact">
        <div className="Container-Breadcrumb-Contact">
          <Link to={"/"}>
            <span id="Breadcrumb-Contact-Home">خانه </span>
          </Link>

          <span>
            <BsArrowLeft />
          </span>
            <span id="Breadcrumb-Contact">تماس با ما </span>
       
        </div>
      </div>
      <div className="Container-Contact">
        <div className="Wrapper-Contact">
          <div className="Info-Contact"><InfoContact /></div>
          <div className="FrequentlyAskedQuestions-Contact"><FrequentlyAskedQuestionsContact /></div>
        </div>
      </div>
    </>
  );
}
