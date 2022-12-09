import React from "react";
import { Link } from "react-router-dom"

const styles = {
    post: {
        padding: "10px"
    },
    postHeading : {
        fontSize: "20px",
        margin: "0 0 10px 0"
    }
}

export default function PostListing(props) {

    const { data } = props;
    

    if(!data)
        {
            return <div>No records found!.</div>
        }

    return <div>
        {
            data && data.length > 0 && data.map((post) => {
                return <div style={styles.post} key={post.id}>
                    <h1 style={styles.postHeading}>{post.title}</h1>
                    <div>{post.body}</div>
                    <div><Link to={`/posts/${post.id}/${post.userId}`}>Read more</Link> </div>
                </div>
            })
        }
    </div>
}