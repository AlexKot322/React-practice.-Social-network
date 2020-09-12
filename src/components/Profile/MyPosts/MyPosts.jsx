import React from "react";
import Myposts from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () => {
    return (
        <div>
          my posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
          </div>
          <div className={Myposts.posts}>
            <Post message='Who you are?' sum='600'/>
            <Post message='Who you bitch' sum='122'/>
          </div>
        </div>
      )
};

export default MyPosts;