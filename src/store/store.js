import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import Root from "./saga"

import OffersReducer from "./slices/offers"

const sagaMiddleware = createSagaMiddleware();
const middlewares = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

export default configureStore({
    reducer: {
        offers: OffersReducer
    },
    middleware: middlewares
});

sagaMiddleware.run(Root)