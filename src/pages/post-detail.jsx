import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { api } from "../config/urls"
import { Link, Outlet } from "react-router-dom"
import Accordion from 'react-bootstrap/Accordion';

export default function PostDetailpage() {

    const { postid, userid } = useParams();
    const [post, setPost] = useState({});

    async function getPostData(postid) {
        // api.posts + "/" + postid
        const response = await (await fetch(`${api.posts}/${postid}`)).json();
        setPost(response);
    }

    useEffect(() => {
        getPostData(postid);
    }, [postid, userid])

    return <div className="container">
        
        <div className="row">
            <div className="col">
                <h2>{post.title}</h2>
                {post.body}
            </div>
            <div className="col">
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <Link to={`/posts/${post.id}/${post.userId}/comments`}>Comments</Link>
                <Link to={`/posts/${post.id}/${post.userId}/offers`}>Offers</Link>
            </div>
            <div className="col"><Outlet /></div>
        </div>
    </div>
}