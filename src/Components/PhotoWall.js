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
        {props.posts.map((post, i) => (
          <Photo post={post} onRemovePhoto={props.onRemovePhoto} key={i} />
        ))}
      </div>
    </div>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;
