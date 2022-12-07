import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOfferStatus, addOffer, getOffers, deleteOffer } from "../store/slices/offers"

export default function Offerspage(){

    const { offers } = useSelector(( state )=>{ return state.offers });
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getOffers())
    }, [])

    const [form, setForm] = useState({});

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
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
                            checked={offer.isActive}
                            onChange={()=>{
                                dispatch(setOfferStatus({ id: offer.id, status: !offer.isActive }))
                            }}/>
                        </div>
                        <button onClick={()=>{ dispatch(deleteOffer(offer.id)) }}>Delete Offer</button>

                    </li>
                })
            }
        </ul>
        <form onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addOffer(form));
        }}>
            <input name="type" onChange={handleChange}/>
            <input name="percent" onChange={handleChange}/>
            <button type="submit">Add offer</button>
        </form>
    </div>
}