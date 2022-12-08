import { put } from "redux-saga/effects";
import { fetchOffers } from "../slices/offers";

export function * getOffers(){
    // async logic for getting data.
    const offers = [ { label: "Laptop", percent: 50, isActive: true, id: 1 } ];
    yield put(fetchOffers(offers))
}