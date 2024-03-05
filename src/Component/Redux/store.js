import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import rootSaga from "./root-saga";
import ProductsSlice from "./Products/Products.Slice";
import CartSlice from "./Cart/CartSlice";
import recentSlice from "../Atoms/Modal/recent.slice";
const sagaMiddleWare = createSagaMiddleware()
const store = configureStore({
    reducer: {
        myProducts: ProductsSlice,
        myCart:CartSlice,
        recent_search:recentSlice,
       
    },
    middleware: (current) => current({ thunk: false }).concat(sagaMiddleWare)
});
sagaMiddleWare.run(rootSaga)
export default store
