import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOfferStatus } from "../store/slices/offers"

export default function Offerspage(){

    const { offers } = useSelector(( state )=>{ return state.offers });
    const dispatch = useDispatch();

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

                    </li>
                })
            }
        </ul>
    </div>
}