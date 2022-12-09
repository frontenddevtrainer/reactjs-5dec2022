import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Axios from "axios";
import { api } from "../../config/urls"

const styles = {
    post: {
        padding: "10px"
    },
    postHeading: {
        fontSize: "20px",
        margin: "0 0 10px 0"
    }
}

export default function ProductListing(props) {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    async function getProducts() {
        setLoading(true);
        try {
            const { data } = await Axios.get(api.posts);
            setData(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error)
        }

    }

    useEffect(() => {
        getProducts();
    }, [])


    if (!data) {
        return <div className="no-records">No records found!</div>
    }

    console.log(data)

    return <div>
        {
            data && data.length > 0 && data.map((post) => {
                return <div data-testid="product-item" style={styles.post} key={post.id}>
                    <h1 style={styles.postHeading}>{post.title}</h1>
                    <div>{post.body}</div>
                    <div><Link to={`/posts/${post.id}/${post.userId}`}>Read more</Link> </div>
                </div>
            })
        }
    </div>
}