export function removePost(id) {
  return {
    type: "REMOVE_POST",
    id,
  };
}

export function addPost(post) {
  return {
    type: "ADD_POST",
    post,
  };
}
