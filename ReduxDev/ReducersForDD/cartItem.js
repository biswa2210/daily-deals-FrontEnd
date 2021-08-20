/*
CREATED BY BISWARUP BHATTACHARJEE
EMAIL    : bbiswa471@gmail.com
PHONE NO : 6290272740
*/

import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '../constants';

const cartItems = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            console.log(action.payload.id)
            state = state.filter(cartItem => cartItem.product !== action.payload.id)
            console.log(state)
            return state
        case CLEAR_CART:
            return state = []
    }
    return state;
}

export default cartItems;
