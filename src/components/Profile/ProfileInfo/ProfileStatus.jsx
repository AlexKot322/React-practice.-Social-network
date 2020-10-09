import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
      this.setState ({    //setState()  - правильное решение для обновления state <setState() ассинхронный метод>
          editMode: true
      })
      //this.forceUpdate() - это костыль для обновления state
  }
  deactivateEditMode() {
    this.setState ({    //setState()  - правильное решение для обновления state <setState() ассинхронный метод>
        editMode: false
    })
    //this.forceUpdate() - это костыль для обновления state
}

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
