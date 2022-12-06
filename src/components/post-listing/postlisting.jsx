import React from "react";

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

    const { data } = props

    return <div>
        {
            data && data.length > 0 && data.map((post) => {
                return <div style={styles.post} key={post.id}>
                    <h1 style={styles.postHeading}>{post.title}</h1>
                    <div>{post.body}</div>
                </div>
            })
        }
    </div>
}