import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
      this.setState ({    //setState()  - правильное решение для обновления state <setState() ассинхронный метод>
          editMode: true
      })
      //this.forceUpdate() - это костыль для обновления state
  }
  deactivateEditMode = () => {
    this.setState ({    //setState()  - правильное решение для обновления state <setState() ассинхронный метод>
        editMode: false
    });
    this.props.updateStatus(this.state.status);
    //this.forceUpdate() - это костыль для обновления state
}

onStatusChange =(e) => {
  this.setState({
    status: e.currentTarget.value
  });
}

componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
}

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
