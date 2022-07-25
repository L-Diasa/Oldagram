import React from "react"
import Navbar from './components/Navbar';
import Post from './components/Post';
import data from "./data"

export default function App() {
  const posts = data.map(post => {
      return (
          <Post
              key={post.username}
              {...post}
          />
      )
  })       
    
    return (
        <div className="app">
          <Navbar />
          {posts}
        </div>
    )
}