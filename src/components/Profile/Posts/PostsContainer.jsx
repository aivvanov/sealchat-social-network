import React from "react";
import { Posts } from "./Posts";
import { addPostActionCreator, updatePostTextActionCreator } from "../../../redux/profile-reducer"
import StoreContext from "../../../StoreContext";


const PostsContainer = () => {

  return <StoreContext>
    {
      store => {
        const createNewPost = () => {
          store.dispatch(addPostActionCreator());
        }

        const changePostText = (text) => {
          store.dispatch(updatePostTextActionCreator(text));
        }

        return <Posts
          createNewPost={createNewPost}
          changePostText={changePostText}
          posts={store.getState().profilePage.posts}
          newPostText={store.getState().profilePage.newPostText}
        />
      }
    }
  </StoreContext>
}

export default PostsContainer