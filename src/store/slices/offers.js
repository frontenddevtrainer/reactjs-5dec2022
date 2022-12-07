import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { api } from "../../config/urls"

const getOffers = createAsyncThunk(
    "offers/getOffers",
    async () => {
        const response = await axios.get(api.offers);
        return response.data
    }
)

const offerSlice = createSlice({
    name: "offers",
    initialState: {
        offers: [],
        loading: false,
    },
    reducers: {
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
    },
    extraReducers: {
        [getOffers.pending] : (state)=>{ state.loading = true },
        [getOffers.fulfilled] : (state, { payload })=>{
            state.loading = false;
            state.offers = payload;
        },
        [getOffers.rejected] : (state)=>{
            state.loading = false;
        },
    }
})



export const { addOffer, setOfferStatus } = offerSlice.actions;
export { getOffers } 

export default offerSlice.reducer;

// Pending
// Success
// Failure



// export  function getOffersAsync(data) {
//     return async function (dispatch) {
//         try {
            
//             dispatch(getOffers(response.data))
//         } catch (error) {

//         }
//     }
// }