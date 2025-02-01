import { sendMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getUserProfile } from "../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText,
        profile: state.profilePage.profile
    };
}

export default compose(
    connect(mapStateToProps, { sendMessage, getUserProfile }),
    withAuthRedirect
)(Dialogs);