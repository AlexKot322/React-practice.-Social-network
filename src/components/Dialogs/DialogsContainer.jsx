import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
             dispatch(updateNewMessageBodyCreator(body)); 
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)
