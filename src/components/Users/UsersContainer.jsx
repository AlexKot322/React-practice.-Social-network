import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount, 
  toggleIsFetching
} from "../../redux/UsersReducer";
import Preloader from "../common/preloader/preloader";
import { usersAPI } from "../../API/api";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
        .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
  }
}

let mapStateToProps = (state) => {
  return {
    follow: state.usersPage.follow,
    unfollow: state.usersPage.unfollow,
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetchingAC: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     }
//   };
// };



export default connect(mapStateToProps, {follow, unfollow, setUsers,
   setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer);
