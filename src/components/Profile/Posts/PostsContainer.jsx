import { addPostAC, updatePostTextAC } from "../../../redux/profile-reducer"
import { connect } from "react-redux";
import Posts from "./Posts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewPost: () => {
      dispatch(addPostAC());
    },
    changePostText: (text) => {
      dispatch(updatePostTextAC(text));
    }
  };
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer