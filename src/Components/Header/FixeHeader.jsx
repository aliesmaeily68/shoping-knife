import React,{useState} from "react";
import IconHeader from "./IconHeader";
import './FixeHeader.css'

export default function FixeHeader() {
    const [iconName2, SetIconName2] = useState(false);
  return (

    <>
      <div className="HeaderTop-Icons-M1024 Fixe-Heder">
        <IconHeader IconName={iconName2} />
      </div>
    </>
  );
}
