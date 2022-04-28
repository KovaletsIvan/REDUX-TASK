import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post";

const Posts = ({ handleChange }) => {
  const posts = useSelector((state) => state.posts);
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

export default Posts;
