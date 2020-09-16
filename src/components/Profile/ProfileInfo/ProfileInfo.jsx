import React from "react";
import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/1524429/7e94cc35-e3fc-42b8-ba0d-212fb120e22d/s1200?webp=false" />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
      </div>
  )
};

export default ProfileInfo;