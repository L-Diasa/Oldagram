import React, {useEffect, useState} from "react"
import { Watch } from  'react-loader-spinner'

import Navbar from './components/Navbar';
import Post from './components/Post';
import data from "./data"


export default function App() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getPosts = async () => {
            return await Promise.all(
                data.map(async (post) => {
                    return (
                        <Post
                            key={post.username}
                            {...post}
                        />
                    )
                })
            )
        } 

        getPosts()
        .then(posts => {
            setPosts(posts)
            setTimeout(() => {
                setLoading(false)
            }, 2500)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="app">
            <div className={`loaded ${loading ? "hidden" : ""}`}>
                <Navbar />
                {posts}
            </div> 
            {loading && 
            <div className="watch-loading">
                <Watch
                color = 'black'
                ariaLabel = 'watch-loading'     
            />
            </div>}
        </div>
    )
}