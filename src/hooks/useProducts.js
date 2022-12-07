import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../config/urls"

export default function useProducts(){

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState();

    async function getProducts(){
        try {
            setLoading(true);
            const { data } = await axios.get(api.posts);
            setLoading(false);
            setData(data);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    useEffect(()=>{
        getProducts();
    }, [])

    return { loading, data, error };
}