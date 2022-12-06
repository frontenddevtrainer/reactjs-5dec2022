import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { api } from "../config/urls"

export default function PostDetailpage(){

    const { postid } = useParams();
    const [post, setPost] = useState({});

    async function getPostData(postid){
        // api.posts + "/" + postid
        const response = await (await fetch(`${api.posts}/${postid}`)).json();
        setPost(response);
    }

    useEffect(()=>{
        getPostData(postid);
    }, [postid])

    console.log(post);

    return <div>post content.</div>
}