import { ADD_ITEM, DELETE_ITEM, SET_SOURCE } from "../actions/types";
import {SOURCE_TYPE_LOCAL, JSON_KEY_LOCAL} from '../constants';

const jsonKey = 'items.json';
const json = window.localStorage.getItem(jsonKey) || JSON.stringify([], null, 2)
const newJson = JSON.parse(json)
const intialState = {items: newJson,
                     jsonSource: SOURCE_TYPE_LOCAL,
                     jsonKey: JSON_KEY_LOCAL};

const itemReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {items: [...state.items, action.payload]};
        case DELETE_ITEM:
            return {items: state.items.filter(item=>item.key !== action.payload)};
        case SET_SOURCE:
            return {...state, jsonSource: action.payload};
        default:
            return state;
    }
}
 
export default itemReducer;