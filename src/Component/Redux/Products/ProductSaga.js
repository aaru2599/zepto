// import "public/utilities/Products.json"
import { put, takeLatest } from "redux-saga/effects";
import { getProduct, getProductFailed, getProductSuccess } from "./Products.Slice";
const getRequest = async (url) => {
    try {
        const responce = await fetch(url)
        const parsedResponce = await responce.json()
        return parsedResponce
    } catch (err) {
        ////////console.log(err);
        return null
    }
};
// ////////console.log();
export function* getproducts() {
    try {
        // const productResponse = getData("")||[];
        const productResponse = yield getRequest("/utilities/Products.json")||[]

        // const productResponse= yield apiResponce

        ////////console.log("productResponce", productResponse);
        if (!productResponse) {
            yield put(getProductFailed())
            return;
        }
        yield put(getProductSuccess({ result: productResponse }))
    } catch (err) {
        yield put(getProductFailed())
    }
}
export function* watchGetProduct() {
    yield takeLatest(getProduct, getproducts)
}