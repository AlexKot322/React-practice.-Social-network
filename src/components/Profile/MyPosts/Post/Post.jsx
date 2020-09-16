import React from "react";
import s from './Post.module.css';
const Post = (props) => {

  return (

    <div className={s.item}>
      <div className={s.avatar}>
        <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" className={s.avatarImg} />
        <div className={s.avatarRight}>
          <div className={s.avatarName}>Александр Котовсков</div>
          <span>date</span>
        </div>
      </div>
      <img src="https://sm-news.ru/wp-content/uploads/2020/07/27/27-04-2016_d728f38e43aa85f0ce74d7059bc2c253.jpg" className={s.postImg} />
      <div>
        <div className={s.postNav}>
        <button className={s.like}>
            <img src="http://cdn.onlinewebfonts.com/svg/img_165452.png"></img>
            <span>{props.countLike}</span>
          </button>
          <button className={s.look}>
            <img src="https://miro.medium.com/max/2400/1*Gy_8vdAQJ69RbvCnG_xRTw.png"></img>
            <span>{props.countLook}</span>
          </button>
          <button className={s.postNav_delete}>
            <img src="http://cdn.onlinewebfonts.com/svg/img_229056.png"></img>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Post;