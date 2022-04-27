import React, { useState, useContext } from "react";
import { connect } from "react-redux";

import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { removePost, editPost } from "../posts.actions";
import EditInput from "./EditInput";
import ThemeContext from "../btn.context";

const Post = ({ id, text, deletePost }) => {
  const [input, setInput] = useState(false);
  const [value, setValue] = useState(text);
  const theme = useContext(ThemeContext);

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
          style={{ background: theme.light.background }}
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
          style={{ background: theme.darck.background }}
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
