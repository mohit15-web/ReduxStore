import { createStore } from "redux";

const initialState = {
    cart:[]
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case"ADD_TO_CART":
        return {
            ...state,
            cart:[...state.cart,action.payload]
        }
        default:
        return state
    }
}

const Store = createStore(reducer,initialState)

export default Store;


