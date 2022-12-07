import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../config/urls"

export default function useProducts() {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState();

    const [isDeleting, setIsDeleting] = useState(false);

    async function getProducts() {
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

    async function removeProduct(id) {
        setIsDeleting(true);
        const { data } = await axios.delete(`${api.posts}/${id}`);
        setIsDeleting(false);
        getProducts();
    }

    useEffect(() => {
        getProducts();
    }, [])
    

    return { loading, data, error, actions: { remove: { isDeleting, removeProduct } } };
}