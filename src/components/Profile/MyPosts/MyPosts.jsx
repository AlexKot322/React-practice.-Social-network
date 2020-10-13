import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, require } from "../../../utils/validators/validators";
import { Textarea } from "../../common/preloader/FormControls/FormControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post
      name={p.name}
      countLike={p.countLike}
      countLook={p.countLook}
      id={p.id}
      datePublick={p.datePublick}
    />
  ));


  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  };


  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={addNewPost}/>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};


const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} name="newPostText" validate={[require, maxLength10]} placeholder={"...."}/>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div>
        </div>
      </form>
  )
};

const AddNewPostFormRedux = reduxForm ({form: "ProfileAddNewPostForm"}) (AddNewPostForm)
export default MyPosts;
