import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { api } from "../config/urls"
import { Link, Outlet } from "react-router-dom"

export default function PostDetailpage(){

    const { postid, userid } = useParams();
    const [post, setPost] = useState({});

    async function getPostData(postid){
        // api.posts + "/" + postid
        const response = await (await fetch(`${api.posts}/${postid}`)).json();
        setPost(response);
    }

    useEffect(()=>{
        getPostData(postid);
    }, [postid, userid])

    return <div>
        <h2>{post.title}</h2>
        {post.body}
        <div>
            <Link to={`/posts/${post.id}/${post.userId}/comments`}>Comments</Link>
            <Link to={`/posts/${post.id}/${post.userId}/offers`}>Offers</Link>
        </div>
        <Outlet/>
    </div>
}