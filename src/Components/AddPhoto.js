import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    };
    if (imageLink && description) {
      this.props.onAddPost(post);
      this.props.navigate("/");
    }
  }

  render() {
    return (
      <div>
        {" "}
        <h1>PhotoWall</h1>{" "}
        <div className="form">
          {" "}
          <form onSubmit={this.handleSubmit}>
            {" "}
            <input type="text" placeholder="Link" name="link" />{" "}
            <input type="text" placeholder="Description" name="description" />{" "}
            <button>Post</button>{" "}
          </form>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default function AddPhotoWrapper(props) {
  const navigate = useNavigate();
  return <AddPhoto {...props} navigate={navigate} />;
}
