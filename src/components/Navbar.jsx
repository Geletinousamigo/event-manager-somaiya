import React from "react";
import { EuiPageHeader } from "@elastic/eui";
import { makeTitle } from "../utilities/rainbowLetters";
import { logoImage } from "../data/consts";

// import { addAvatar } from "../login";
import AddAvatar from "../utilities/AddAvatar";
// import { addAvatar } from "../utilities/addAvatar";

export default function Navbar(props) {
  return (
    <>
      <EuiPageHeader
        restrictWidth
        iconType={logoImage}
        pageTitle={makeTitle()}
        rightSideItems={[
          AddAvatar()
        ]}
        tabs={props.tabs}
      />
      
    </>

  );
}
