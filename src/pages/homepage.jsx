import React, { Suspense, useEffect, useState } from "react";
import PostListing from "../components/post-listing/postlisting";
import { api } from "../config/urls";

const RegisterFormLazy = React.lazy(()=> import("../components/registerform/registerform") )


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
            <Suspense fallback={<div>Loading register form.</div>}>
              <RegisterFormLazy/>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
