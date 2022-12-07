import { configureStore } from "@reduxjs/toolkit";

import OffersReducer from "./slices/offers"

export default configureStore({
    reducer: {
        offers: OffersReducer
    }
})