import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = (props) => {
debugger;
  let postsElements = props.posts.map(p => <Post name={p.name} countLike={p.countLike} countLook={p.countLook} id={p.id} datePublick={p.datePublick}/> );
 
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
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;