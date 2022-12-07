import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { api } from "../../config/urls"

const offerSlice = createSlice({
    name: "offers",
    initialState: {
        offers: []
    },
    reducers: {
        getOffers(state, action){
            state.offers = action.payload;
        },
        setOfferStatus(state, action) {
            const { payload } = action;

            state.offers.forEach((offer) => {
                if (offer.id === payload.id) {
                    offer.isActive = payload.status;
                }
            })

        },
        addOffer(state, action) {
            state.offers.push({ id: state.offers.length + 1, isActive: false, ...action.payload })
        }
    }
})

export const { addOffer, setOfferStatus, getOffers } = offerSlice.actions;

export default offerSlice.reducer;

export  function getOffersAsync(data) {
    return async function (dispatch) {
        try {
            const response = await axios.get(api.offers);
            dispatch(getOffers(response.data))
        } catch (error) {

        }
    }
}