import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
const Profile = () => {
  return (
    <div>
      <div>
        <div>
          <img src="https://avatars.mds.yandex.net/get-pdb/1524429/7e94cc35-e3fc-42b8-ba0d-212fb120e22d/s1200?webp=false" />
        </div>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  )
};

export default Profile;