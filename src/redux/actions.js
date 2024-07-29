// remove

export const removePost = function (index) {
  return {
    type: "REMOVE_POST",
    index: index,
  };
};
