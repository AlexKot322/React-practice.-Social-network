import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
const Profile = () => {

  let posts = [
    { id: 1, name: 'Александр Котовсков', countLike: 333, countLook: 222, datePublick: "13 августа"},
    { id: 2, name: 'Лул Кекович', countLike: 11, countLook: 22, datePublick: "12 сентября" }
]

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  )
};

export default Profile;