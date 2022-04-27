import React, { useState } from "react";
import { connect } from "react-redux";

import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { removePost, editPost } from "../posts.actions";
import EditInput from "./EditInput";

const Post = ({ id, text, deletePost, edit }) => {
  const [input, setInput] = useState(false);
  const [value, setValue] = useState(text);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  if (input) {
    return (
      <EditInput
        value={value}
        setInput={setInput}
        input={input}
        id={id}
        handleChange={handleChange}
      />
    );
  }
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      margin="20px"
      fontSize="20px"
      border="1px solid  #717D7E"
      borderRadius="4px"
      padding="20px"
      style={{ width: "400px", height: "100px" }}
    >
      {text}

      <Box
        marginTop="10px"
        width="100%"
        style={{ display: "flex", gap: "20px" }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setInput(!input);
          }}
        >
          Edit
        </Button>
        <Button
          display="block"
          color="primary"
          variant="contained"
          onClick={() => deletePost(id)}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

const mapDispatch = (dispatch) => {
  return {
    deletePost: (id) => dispatch(removePost(id)),
    edit: (id, text) => dispatch(editPost(id, text)),
  };
};

const connector = connect(null, mapDispatch);

export default connector(Post);
