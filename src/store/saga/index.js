import { takeEvery } from "redux-saga/effects";
import { GET_OFFERS_ACTION } from "./actions";
import { getOffers } from "./offers";

export default function * root(){
    yield takeEvery(GET_OFFERS_ACTION, getOffers)
}
