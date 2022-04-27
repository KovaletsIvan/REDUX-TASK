import React from "react";
import { connect } from "react-redux";

import Post from "./Post";

const Posts = ({ posts, handleChange }) => {
  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          text={post.text}
          id={post.id}
          handleChange={handleChange}
        />
      ))}
    </>
  );
};
const mapState = (state) => {
  return {
    posts: state.posts,
  };
};

const connector = connect(mapState);

export default connector(Posts);
