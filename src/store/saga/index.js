import { take, takeEvery } from "redux-saga/effects";
import { GET_OFFERS_ACTION, DELETE_OFFER_ACTION } from "./actions";
import { deleteOffer, getOffers } from "./offers";

export default function * root(){
    yield takeEvery(GET_OFFERS_ACTION, getOffers);
    yield takeEvery(DELETE_OFFER_ACTION, deleteOffer)
}
