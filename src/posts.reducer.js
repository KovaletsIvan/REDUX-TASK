import { ADD__POST, REMOVE__POST, EDIT__POST } from "./posts.actions";

const initialState = { posts: [] };

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD__POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload.post),
      };
    case REMOVE__POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };
    case EDIT__POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id
            ? { ...post, text: action.payload.text }
            : post
        ),
      };
    default:
      return state;
  }
};
