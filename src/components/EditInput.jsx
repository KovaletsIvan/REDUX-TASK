import React from "react";
import { connect } from "react-redux";

import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Input } from "@material-ui/core";

import { editPost } from "../posts.actions";

const EditInput = ({ value, setInput, input, id, edit, handleChange }) => {
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
      <Input style={{ width: "200px" }} value={value} onChange={handleChange} />
      <Button
        color="primary"
        variant="contained"
        style={{ width: "100px", marginLeft: "auto" }}
        disabled={value ? false : true}
        onClick={() => {
          edit(id, value);
          setInput(!input);
        }}
      >
        Confirm
      </Button>
    </Box>
  );
};

const mapDispatch = (dispatch) => {
  return {
    edit: (id, text) => dispatch(editPost(id, text)),
  };
};
const connector = connect(null, mapDispatch);

export default connector(EditInput);
