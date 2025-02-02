import { toggleNavbar } from "../../redux/navbar-reducer";
import Navbar from "./Navbar";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    isNavbarCollapsed: state.navbar.isNavbarCollapsed
  }
}

const NavbarContainer = connect(mapStateToProps, { toggleNavbar })(Navbar);

export default NavbarContainer;