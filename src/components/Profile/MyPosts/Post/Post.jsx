import React from "react";
import Myposts from './Post.module.css';
const Post = () => {
  return (

    <div className={Myposts.item}>
      <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" />
              post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  )
};

export default Post;