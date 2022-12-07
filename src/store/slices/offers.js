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

const addOffer = createAsyncThunk(
    "offers/addOffer",
    async (offer) => {
        const response = await axios.post(api.offers, { ...offer, isActive: false });
        return response.data
    }
)

const setOfferStatus = createAsyncThunk(
    "offers/setOfferStatus",
    async (offer) => {
        const response = await axios.patch(`${api.offers}/${offer.id}`, { isActive: offer.status });
        return response.data
    }
)

const deleteOffer = createAsyncThunk(
    "offers/deleteOffer",
    async (id) => {
        const response = await axios.delete(`${api.offers}/${id}`);
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
        [addOffer.pending] : (state)=>{ state.loading = true },
        [addOffer.fulfilled] : (state, { payload })=>{
            state.loading = false;
            state.offers.push(payload);
        },
        [addOffer.rejected] : (state)=>{
            state.loading = false;
        },
        [setOfferStatus.pending] : (state)=>{ state.loading = true },
        [setOfferStatus.fulfilled] : (state, { payload })=>{
            state.loading = false;
            state.offers.forEach((offer) => {
                if (offer.id === payload.id) {
                    offer.isActive = payload.isActive;
                }
            })
        },
        [setOfferStatus.rejected] : (state)=>{
            state.loading = false;
        },
        [deleteOffer.pending] : (state)=>{ state.loading = true },
        [deleteOffer.fulfilled] : (state, { payload })=>{
            state.loading = false;
            let indexToDelete = null
            state.offers.forEach((offer, index) => {
                if (offer.id === payload.id) {
                    indexToDelete = index;
                }
            })

            state.offers.splice(indexToDelete, 1);
        },
        [deleteOffer.rejected] : (state)=>{
            state.loading = false;
        },
    }
})


export { getOffers, addOffer, setOfferStatus, deleteOffer } 

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