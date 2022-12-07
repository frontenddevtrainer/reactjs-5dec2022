import React from "react";
import useProducts from "../hooks/useProducts";

export default function Productspage(){

    const { data, error, loading } = useProducts();

    if(loading)
        {
            return <div style={{ border: "1px solid red", padding: "10px" }}>Loading...</div>
        }

    return <div>
        {JSON.stringify(data)}
    </div>
}