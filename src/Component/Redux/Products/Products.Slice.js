import { createSlice } from "@reduxjs/toolkit";
const initialState={
    data:null,
    isLoading:true
}
const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        getProduct:(state)=>{
            state.isLoading=true
        },
        getProductSuccess:(state,action)=>{
            state.isLoading=false,
            state.data=action.payload.result
            //console.log("state.data",state.data);

        },
        getProductFailed:(state)=>{
            state.isLoading=false
            state.data=[]
        }


    }
})
export const {getProduct,getProductSuccess,getProductFailed}=productsSlice.actions
export default productsSlice.reducer