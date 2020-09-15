import React from "react";
import onePost from './Post.module.css';
const Post = (props) => {

  return (

    <div className={onePost.item}>
      <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" />
      <div>
        <span>Like</span>
        <a href="" className={onePost.like}>
        <span>{props.sum}</span>
        </a>
      </div>
    </div>
  )
};

export default Post;