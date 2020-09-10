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
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      )
};

export default MyPosts;