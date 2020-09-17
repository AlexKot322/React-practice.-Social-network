import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () => {
  let posts = [
    { id: 1, name: 'Александр Котовсков', countLike: 333, countLook: 222, datePublick: "13 августа"},
    { id: 2, name: 'Лул Кекович', countLike: 11, countLook: 22, datePublick: "12 сентября" }
]
  let postsElements = posts.map (p => <Post name={p.name} countLike={p.countLike} countLook={p.countLook} id={p.id} datePublick={p.datePublick}/> );
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