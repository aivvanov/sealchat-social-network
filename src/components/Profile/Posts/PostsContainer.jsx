import React from "react";
import { addPostActionCreator, updatePostTextActionCreator } from "../../../redux/profile-reducer"
import { connect } from "react-redux";
import { Posts } from "./Posts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewPost: () => {
      dispatch(addPostActionCreator());
    },
    changePostText: (text) => {
      dispatch(updatePostTextActionCreator(text));
    }
  };
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer