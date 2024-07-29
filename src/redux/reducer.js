import Posts from "../data/posts";

const postReducer = function (state = Posts, action) {
  console.log(action.index);
  return state;
};

export default postReducer;
