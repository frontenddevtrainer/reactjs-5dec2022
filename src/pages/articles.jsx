import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_OFFERS = gql`
    query GetOffers {
        offers {
            type,
            isActive
            id
        }
    }`


export default function Articlespage(){



    const { data, loading, error } = useQuery(GET_OFFERS)

    const offers = data && data.offers ? data.offers : [];

    const [form, setForm] = useState({});


    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    if(loading)
        {
            return <div>Loading...</div>
        }

    return <div>
        <ul style={{ listStyle: "none", margin:0, padding: 0 }}>
            {
                offers && offers.length > 0 && offers.map((offer)=>{
                    return <li key={offer.id} style={{ padding: "10px", border: "1px solid black" }}>
                        <div>
                            {offer.type} has {offer.percent}% discount { offer.isActive ? "🟢" : "🔴" }
                        </div>
                        <div>
                            <input 
                            type={"checkbox"} 
                            checked={offer.isActive}/>
                        </div>
                        <button>Delete Offer</button>

                    </li>
                })
            }
        </ul>
        <form onSubmit={(e)=>{
            e.preventDefault();
            
        }}>
            <input name="type" onChange={handleChange}/>
            <input name="percent" onChange={handleChange}/>
            <button type="submit">Add offer</button>
        </form>
    </div>
}