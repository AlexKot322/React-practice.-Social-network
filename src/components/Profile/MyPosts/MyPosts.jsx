import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message='Who you are?' countLike='600' countLook='325'/>
        <Post message='Who you bitch' countLike='423' countLook='13' />
      </div>
    </div>
  )
};

export default MyPosts;