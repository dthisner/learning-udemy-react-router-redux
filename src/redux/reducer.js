import Posts from "../data/posts";

const postReducer = function (state = Posts, action) {
  console.log(action.id);
  switch (action.type) {
    case "REMOVE_POST":
      return state.filter((post) => post.id !== action.id);
    case "ADD_POST":
      return [...state, action.post];
    default:
      return state;
  }
};

export default postReducer;
