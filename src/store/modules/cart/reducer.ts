import { Reducer } from "redux";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
    items: []
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_PRODUCT_TO_CART': {
            const { product } = action.payload;

            const productInCartIndex = state.items.findIndex(item => 
                item.product.id === product.id    
            )

            if(productInCartIndex >= 0){
                state.items[productInCartIndex].quantity++;
                return {
                    ...state,
                    items: [
                        ...state.items
                    ]
                }
            }else{
                return {
                    ...state,
                    items: [
                        ...state.items,
                        {
                            product,
                            quantity: 1,
                        }
                    ]
                }
            }
        }
        default: {
            return state
        }
    }
}

export default cart;