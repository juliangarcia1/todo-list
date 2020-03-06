import { ADD_ITEM, DELETE_ITEM } from "../actions/types"


const itemReducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
        case DELETE_ITEM:
            return state.filter(item=>item.id !== action.payload)
        default:
            return state;
    }
}
 
export default itemReducer;