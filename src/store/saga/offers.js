import { put, call } from "redux-saga/effects";
import { fetchOffersPending, fetchOffersError, fetchOffersSuccess } from "../slices/offers";
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
    console.log(action);
}