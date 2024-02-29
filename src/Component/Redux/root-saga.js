import { all, fork } from "redux-saga/effects";
import { watchGetProduct } from "./Products/ProductSaga";

export default function* rootSaga(){
    yield all([fork(watchGetProduct)])
}