import React from "react";
import {IoIosArrowDropleft} from 'react-icons/io'
import './FooterContact.css'

export default function FooterContact() {
  return (
    <div className="Footer-Contact">
      <h3>ارتباط با ما</h3>
      <ul className="FooterContact-List-Group">
        <li className="FooterContact-List">
          <div className="FooterContact-List-Right">
            <IoIosArrowDropleft className="Icon-FooterContact" />
            <span>ایمیل :</span>
          </div>
          <div className="FooterContact-List-Left"><span className="FooterContact-English">ali.6111111@gmail.com</span></div>
        </li>

        <li className="FooterContact-List">
          <div className="FooterContact-List-Right">
            <IoIosArrowDropleft className="Icon-FooterContact" />
            <span>تلگرام :</span>
          </div>
          <div className="FooterContact-List-Left"><span className="FooterContact-English">@Ali68Zanjan</span></div>
        </li>

        <li className="FooterContact-List">
          <div className="FooterContact-List-Right">
            <IoIosArrowDropleft className="Icon-FooterContact" />
            <span>واتساپ :</span>
          </div>
          <div className="FooterContact-List-Left"><span>09193444094</span></div>
        </li>

        <li className="FooterContact-List">
          <div className="FooterContact-List-Right">
            <IoIosArrowDropleft className="Icon-FooterContact" />
            <span>تلفن :</span>
          </div>
          <div className="FooterContact-List-Left"><span>09120458482</span></div>
        </li>
      </ul>
    </div>
  );
}
