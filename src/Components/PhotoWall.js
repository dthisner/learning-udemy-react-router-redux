import React, { Component } from 'react';

import Photo from "./Photo"

class PhotoWall extends Component {
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) => <Photo post={post} key={i} />)}
            </div>
        )
    }
}

export default PhotoWall
