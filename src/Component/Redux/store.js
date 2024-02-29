import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import rootSaga from "./root-saga";
import ProductsSlice from "./Products/Products.Slice";
import CartSlice from "./Cart/CartSlice";
const sagaMiddleWare = createSagaMiddleware()
const store = configureStore({
    reducer: {
        myProducts: ProductsSlice,
        myCart:CartSlice,
    },
    middleware: (current) => current({ thunk: false }).concat(sagaMiddleWare)
});
sagaMiddleWare.run(rootSaga)
export default store
