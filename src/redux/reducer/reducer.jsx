import { types } from "../../actionTypes/actionTypes"
const initialState = {
    cash: 0
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addCash:
            return { ...state, cash: state.cash + 1 }; 
        case types.getCash:
            return { ...state, cash: state.cash > 1 ? state.cash - 1 : state.cash }; 
        default:
            return state;
    }
}
