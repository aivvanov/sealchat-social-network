import { addPost, updatePostText } from "../../../redux/profile-reducer"
import { connect } from "react-redux";
import Posts from "./Posts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
}

const PostsContainer = connect(mapStateToProps, { addPost, updatePostText })(Posts);

export default PostsContainer;