import React from "react";
import useProducts from "../hooks/useProducts";
import { Table } from "react-bootstrap"

export default function Productspage() {

    const { data, error, loading, actions } = useProducts();
    const { remove } = actions;
    const { removeProduct, isDeleting } = remove;

    if (loading) {
        return <div style={{ border: "1px solid red", padding: "10px" }}>Loading...</div>
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((product) => {
                    return (
                        <tr>
                            <td>{product.userId}</td>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.body}</td>
                            <td><button onClick={() => { removeProduct(product.id) }} type="submit">Delete Item</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>)
}