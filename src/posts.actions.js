export const ADD__POST = "ADD__POST";
export const REMOVE__POST = "REMOVE__POST";
export const EDIT__POST = "EDIT__POST";

export const addPost = (post) => {
  return {
    type: ADD__POST,
    payload: { post },
  };
};

export const removePost = (id) => {
  return {
    type: REMOVE__POST,
    payload: { id },
  };
};

export const editPost = (id, text) => {
  return {
    type: EDIT__POST,
    payload: { id, text },
  };
};
