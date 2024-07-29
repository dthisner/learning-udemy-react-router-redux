import React from "react";
import { Link } from "react-router-dom";

import Photo from "./Photo";
import PropTypes from "prop-types";

function PhotoWall(props) {
  const { posts, removePost } = props;

  return (
    <div>
      <Link to="/addphoto" className="addIcon">
        {" "}
      </Link>
      <div className="photo-grid">
        {posts
          .sort(function (x, y) {
            return y.id - x.id;
          })
          .map((post) => (
            <Photo key={post.id} post={post} removePost={removePost} />
          ))}
      </div>
    </div>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PhotoWall;
