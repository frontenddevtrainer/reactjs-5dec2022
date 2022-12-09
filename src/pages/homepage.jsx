import React, { useEffect, useState } from "react";
import PostListing from "../components/post-listing/postlisting";
import RegisterForm from "../components/registerform/registerform";
import { api } from "../config/urls";

export default function Homepage() {
  const [posts, setPosts] = useState([]);

  async function getPostData() {
    const response = await (await fetch(api.posts)).json();
    setPosts(response);
  }

  // componentDidMount
  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div>
      {/* <PostListing data={posts} /> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
