import { createSlice } from "@reduxjs/toolkit"

const offerSlice = createSlice({
    name: "offers",
    initialState: {
        offers : [{
            type: "Laptops",
            percent: 50,
            id: 1,
            isActive: true
        },
        {
            type: "Mobile",
            percent: 30,
            id: 2,
            isActive: true
        }]
    },
    reducers: {
        setOfferStatus(state, action){
            const { payload } = action; 
            
            state.offers.forEach((offer)=>{
                if(offer.id === payload.id)
                    {
                        offer.isActive = payload.status;
                    }
            })
            
        },
        addOffer(state, action){
            state.offers.push({ id: state.offers.length + 1, isActive: false, ...action.payload })
        }
    }
})

export const { addOffer, setOfferStatus } = offerSlice.actions;

export default offerSlice.reducer