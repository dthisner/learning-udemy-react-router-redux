import React, { Component } from 'react';
import Title from './Title'
import PhotoWall from "./PhotoWall"
import Posts from "../data/posts"


class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: Posts
        }
        this.removePhoto = this.removePhoto.bind(this)
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)

        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    render() {
        return (
            <div>
                <Title title={"Photo Wall"} />
                <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
            </div>
        )
    }
}

export default Main