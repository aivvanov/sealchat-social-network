import { sendMessage, updateMessageText } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText
    };
}

export default compose(
    connect(mapStateToProps, { sendMessage, updateMessageText }),
    withAuthRedirect
)(Dialogs);