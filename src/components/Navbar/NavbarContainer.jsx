import React from "react";
import { Navbar } from "./Navbar";

const NavbarContainer = (props) => {
  const telegram = process.env.REACT_APP_TELEGRAM;
  const phone = process.env.REACT_APP_PHONE;

  return <Navbar telegram={telegram} phone={phone} dialogs={props.store.getState().dialogsPage.dialogs}/>;
}

export default NavbarContainer