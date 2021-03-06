import { combineReducers } from 'redux'

const category = (state = null,action) => {
    switch(action.type) {
        case 'SET_CATEGORY':
            return action.value;
        default:
            return state;
    }
}

const view = (state = null, action) => {
    switch(action.type) {
        case 'SET_VIEW':
            return action.value;
        case 'CLEAR_VIEW':
            return null
        default:
            return state;
    }}

const itemID = (state=null, action) => {
    switch(action.type) {
        case 'SET_ITEMID':
           return action.value;
        case 'CLEAR_ITEMID':
            return null
        default:
            return state;
    }
}

const starships = (state=null,action) => {
    switch(action.type) {
        case 'SET_STARSHIP':
        return action.value
        case 'CONCAT_STARSHIP':
         return {
        starships: [...state.starships, action.value]
    }
        default:
            return state
    }
}

export default combineReducers({ category,view, itemID, starships})