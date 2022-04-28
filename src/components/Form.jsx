import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { FormGroup } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { addPost } from "../posts.actions";

const Form = ({ post, handleChange, clerInput }) => {
  const dispatch = useDispatch();

  const add = useCallback(
    (post) => {
      dispatch(addPost(post));
    },
    [dispatch]
  );

  return (
    <FormGroup style={{ margin: "20px" }}>
      <Input
        style={{ width: "400px" }}
        value={post.text}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        style={{ width: "150px", marginTop: "30px", marginLeft: "250px" }}
        color="primary"
        disabled={post.text ? false : true}
        onClick={() => {
          add(post);
          clerInput();
        }}
      >
        Add Post
      </Button>
    </FormGroup>
  );
};

export default Form;
