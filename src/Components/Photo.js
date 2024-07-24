import React from "react";
import PropTypes from "prop-types";

function Photo(props) {
  const post = props.post;

  return (
    <figure className="figure" key={post.id}>
      <img src={post.imageLink} alt={post.description} className="photo" />
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button
          onClick={() => {
            props.onRemovePhoto(post);
          }}
        >
          Remove
        </button>
      </div>
    </figure>
  );
}

Photo.propType = {
  post: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Photo;
