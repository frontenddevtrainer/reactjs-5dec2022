import { put, call } from "redux-saga/effects";
import { fetchOffersPending, fetchOffersError, fetchOffersSuccess, deleteOffersSuccess } from "../slices/offers";
import { api } from "../../config/urls"
import axios from "axios";

export function * getOffers(){
    try {
        yield put(fetchOffersPending())
        const offers = yield call(async ()=>{
            const result = await (await axios.get(api.offers)).data
            return result
        })
        yield put(fetchOffersSuccess(offers))
    } catch ({error}) {
        yield put(fetchOffersError())
    }

}

export function * deleteOffer(action){
    try {

        const offers = yield call(async ()=>{
            const result = await (await axios.delete(`${api.offers}/${action.payload}`)).data
            return result
        })
        yield getOffers()
        yield put(deleteOffersSuccess(offers))
        
    } catch ({error}) {
        yield put(fetchOffersError())
    }
}