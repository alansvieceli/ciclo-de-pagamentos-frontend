import Constants from '../consts';

const INITIAL_STATE = { selected: '' }

export default function(state = INITIAL_STATE, action){
    switch (action.type){
        case Constants.TAB_SELECTED:
            return { ...state, selected: action.payload }
        default:
            return state
    }
}