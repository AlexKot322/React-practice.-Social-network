import React from "react";
import profile from './Profile.module.css';
const Profile = () => {
    return (
        <div className={profile.content}>
        <div>
          <img src="https://avatars.mds.yandex.net/get-pdb/1524429/7e94cc35-e3fc-42b8-ba0d-212fb120e22d/s1200?webp=false" />
        </div>
        <div>ava + description</div>
        <div>
          my posts
          <div>New post</div>
          <div>
            <div className={profile.item}>post 1</div>
            <div className={profile.item}>post 2</div>
          </div>
        </div>
      </div>
    )
};

export default Profile;