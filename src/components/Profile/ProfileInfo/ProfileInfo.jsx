import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/1524429/7e94cc35-e3fc-42b8-ba0d-212fb120e22d/s1200?webp=false" />
      </div> */}
      <div className={s.descriptionBlock}>
        <div className={s.avatarAbout}>
          <figure>
            <img src={props.profile.photos.large} />
            <figcaption>{props.profile.aboutMe}</figcaption>
          </figure>
        </div>
        <div className={s.right}>
          <ProfileStatus status={"Hello urodi"}/>
          <div className={s.contacts}>
            <div>{props.profile.contacts.facebook}</div>
            <div>{props.profile.contacts.website}</div>
            <div>{props.profile.contacts.vk}</div>
            <div>{props.profile.contacts.twitter}</div>
            <div>{props.profile.contacts.instagram}</div>
            <div>{props.profile.contacts.youtube}</div>
            <div>{props.profile.contacts.github}</div>
            <div>{props.profile.contacts.mainLink}</div>
          </div>
          <div className={s.info}>
            <div>{props.profile.lookingForAJob}</div>
            <div>{props.profile.lookingForAFobDescription}</div>
            <div>{props.profile.fullName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
