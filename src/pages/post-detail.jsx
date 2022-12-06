import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { api } from "../config/urls"

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

    return <div>post content.</div>
}