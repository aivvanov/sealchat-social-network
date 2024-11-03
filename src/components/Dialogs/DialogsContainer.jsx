import { sendMessage, updateMessageText } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText
    };
}

const DialogsContainer = connect(mapStateToProps, { sendMessage, updateMessageText })(Dialogs);

export default DialogsContainer;