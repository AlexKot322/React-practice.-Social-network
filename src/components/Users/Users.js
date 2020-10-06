import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.webp";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.pagesNumber}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <NavLink to={"/profile/" + u.id}>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                className={s.userPhoto}
              />
            </NavLink>
            <div>
              {u.followed 
              ? <button onClick={() => {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                              "API-KEY": "22d5989a-9c65-4888-aab9-46d0f8202f3d"
                          }
                        }) 
                      .then(response => {
                        if (response.data.resultCode == 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}>unfollow</button> 
                  : <button onClick={() => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "22d5989a-9c65-4888-aab9-46d0f8202f3d"
                        }
                    })
                      .then(response => {
                        if (response.data.resultCode == 0) {
                          props.follow(u.id);
                        }
                      });
                  }}>follow</button>
              } 
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
