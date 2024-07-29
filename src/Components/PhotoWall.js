import { Link } from "react-router-dom";
import React, { Component } from "react";

import Photo from "./Photo";

class PhotoWall extends Component {
  render() {
    return (
      <div>
        <Link to="/addphoto" className="addIcon">
          {" "}
        </Link>{" "}
        <div className="photo-grid">
          {console.log(this.props)}
          {this.props.posts
            .sort(function (x, y) {
              return y.id - x.id;
            })
            .map((post, i) => {
              return <Photo key={post.id} post={post} {...this.props} />;
            })}
        </div>
      </div>
    );
  }
}

export default PhotoWall;
