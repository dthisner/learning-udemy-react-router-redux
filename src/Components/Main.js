import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import Posts from "../data/posts";
import AddPhoto from "./AddPhoto";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
    this.removePhoto = this.removePhoto.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  removePhoto(postRemoved) {
    console.log(postRemoved.description);

    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved),
    }));
  }

  navigate() {
    this.setState({
      screen: "addPhoto",
    });
  }

  componentDidMount() {
    const data = SimulateFetchFromDB();
    this.setState({
      posts: data,
      screen: "photos", // photos, addPhoto
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log(prevState.posts);
    console.log(this.state.posts);
  }

  render() {
    return (
      <div>
        {this.state.screen === "photos" && (
          <div>
            <Title title={"Photo Wall"} />
            <PhotoWall
              posts={this.state.posts}
              onRemovePhoto={this.removePhoto}
              onNavigate={this.navigate}
            />
          </div>
        )}
        {this.state.screen === "addPhoto" && (
          <div>
            <AddPhoto />
          </div>
        )}
      </div>
    );
  }
}

function SimulateFetchFromDB() {
  return Posts;
}

export default Main;

/*
url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;

The following methods are called when a component is being added to the DOM:

constructor() : called before component is mounted. NEVER put side effect code inside of the constructor. 
Use ComponentDidMount for that instead. Commonly used to initialize state or bind methods. 

componentWillMount(): invoked immediately before mounting occurs. Called before render. 
Once again, DO NOT put any side effect code inside of componentWillMount, and do not make 
API calls in this method  

render(): never fetch data inside of render. Should only be used to return elements.

componentDidMount(): Perfect place to fetch data. It gets called after render. 
This makes it clear that the initial state is empty at first, until we fetch it and re-trigger render. 
This forces us to set up our initial state properly, otherwise you're likely to get undefined states.
The following methods are called when a component is re-rendered to the DOM

componentDidUpdate(): called when the state of a component changes. Perfect place to 
update UI or make network calls based on previous state before update, and current state
 */
