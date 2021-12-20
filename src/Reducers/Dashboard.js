import { GET_WEATHER } from '../Actions/Types'

const initialState = {
    weather: {}
}


export default (state = initialState, action) => {
    switch(action.type) {

        case GET_WEATHER:
            return {
                ...state,
                weather: action.payload,
            }

        default:
            return state
    }
}