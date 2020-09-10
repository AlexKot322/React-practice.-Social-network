import React from "react";
import profile from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div>  
      <div className={profile.content}></div>
        <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/1524429/7e94cc35-e3fc-42b8-ba0d-212fb120e22d/s1200?webp=false"/>
        </div>
        <div>ava + description</div>
        <MyPosts />
        </div>
    )       
};

export default Profile;