import React from "react";
import { Navbar } from "./Navbar";
import StoreContext from "../../StoreContext";

const NavbarContainer = () => {

  return <StoreContext.Consumer>
    {
      store => {
        const telegram = process.env.REACT_APP_TELEGRAM;
        const phone = process.env.REACT_APP_PHONE;
        return < Navbar telegram={telegram} phone={phone} dialogs={store.getState().dialogsPage.dialogs} />
      }
    }
  </StoreContext.Consumer>
}

export default NavbarContainer