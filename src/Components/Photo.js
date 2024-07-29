import React, { Component } from "react";

class Photo extends Component {
  render() {
    const { post, onRemovePost } = this.props;

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <img
            src={post.imageLink}
            alt={post.description}
            className="grid-photo"
          />
        </div>
        <figcaption>
          <p>{post.description}</p>
          <div className="control-buttons">
            <button className="Remove" onClick={() => onRemovePost(post.id)}>
              Remove
            </button>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Photo;
