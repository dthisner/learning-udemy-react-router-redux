import React from "react";
import { Link } from "react-router-dom";

import Photo from "./Photo";
import PropTypes from "prop-types";

function PhotoWall(props) {
  return (
    <div>
      <Link to="/addphoto" className="addIcon">
        {" "}
      </Link>
      <div className="photo-grid">
        {props.posts
          .sort(function (x, y) {
            return y.id - x.id;
          })
          .map((post, i) => (
            <Photo post={post} key={post.id} {...props} />
          ))}
      </div>
    </div>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PhotoWall;
