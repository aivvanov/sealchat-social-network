import Navbar from "./Navbar";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs
  }
}

const NavbarContainer = connect(mapStateToProps, {})(Navbar);

export default NavbarContainer;