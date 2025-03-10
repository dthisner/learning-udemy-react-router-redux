import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";

const Main = ({ posts, removePost, addPost }) => (
  <div>
    <Link to="/" className="noDecoration">
      <Title title="Photo Wall" />
    </Link>
    <Routes>
      <Route
        path="/"
        element={<PhotoWall posts={posts} onRemovePost={removePost} />}
      />
      <Route path="/addphoto" element={<AddPhoto onAddPost={addPost} />} />
    </Routes>
  </div>
);

export default Main;

/*
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
