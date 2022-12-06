import React, { useEffect, useState } from "react";
import PostListing from "../components/post-listing/postlisting";
import { api } from "../config/urls"

export default function Homepage(){

    const [posts, setPosts] = useState([]);

    // componentDidMount
    useEffect(()=>{
        fetch(api.posts)
        .then((response)=>{
            return response.json()
        })
        .then((response)=>{
            setPosts(response)
        })
    }, [])

    return <div>
        <PostListing data={posts} />
    </div>
}