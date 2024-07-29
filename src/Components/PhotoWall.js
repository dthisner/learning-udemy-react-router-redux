import { Link } from "react-router-dom";
import React from "react";
import Photo from "./Photo";

const PhotoWall = ({ posts, onRemovePost }) => {
  const sortedPosts = posts.sort((a, b) => b.id - a.id);

  return (
    <div>
      <Link to="/addphoto" className="addIcon"></Link>
      <div className="photo-grid">
        {sortedPosts.map((post) => (
          <Photo key={post.id} post={post} onRemovePost={onRemovePost} />
        ))}
      </div>
    </div>
  );
};

export default PhotoWall;
