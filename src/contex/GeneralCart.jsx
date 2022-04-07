import { createContext,useReducer } from "react";
import * as actions from './actions'

export const CartContext = createContext([])
const initialState = []

const cartReducer = (state,action) =>{

    switch(action.type){
        case actions.ADDTOCAR:
            console.log("im renderin")
            const exit = state.find(product=> product.id === action.payload.id)
            if(exit){
                const newState = state.map((product)=>{
                    
                    if(product.id === action.payload.id){
                        console.log(product.qqt,action.payload.qqt)
                        product.qqt = product.qqt  + action.payload.qqt
                    }
                    return product
                })
                return newState
            }else{
            return [...state,action.payload]
            }
        case actions.REMOVEPRODUCT:
            return state.filter(product => product.id !== action.payload)
        default:
            return state
    }
}
const CardProvider = ({children}) =>{
    const [allProductsInCart,dispacher] = useReducer(cartReducer,initialState)
    const data = {
        dispacher:dispacher,
        allProductsInCart:allProductsInCart
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CardProvider