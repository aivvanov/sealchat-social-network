import React from "react";
import { Posts } from "./Posts";
import { addPostActionCreator, updatePostTextActionCreator } from "../../../redux/profile-reducer"


const PostsContainer = (props) => {

  const createNewPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const changePostText = (text) => {
    props.store.dispatch(updatePostTextActionCreator(text));
  }

  return <Posts
    createNewPost={createNewPost}
    changePostText={changePostText}
    posts={props.store.getState().profilePage.posts}
    newPostText={props.store.getState().profilePage.newPostText}
  />
}

export default PostsContainer