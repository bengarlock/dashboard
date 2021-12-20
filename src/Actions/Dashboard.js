import {GET_WEATHER} from "./Types";
import {apiKey} from "../passwords";

//GET WEATHER
export const getWeather = () => {
    return async (dispatch) => {
        const response = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=lyndhurst&units=imperial&appid=" + apiKey())

        let weather = await response.json()
        dispatch({
            type: GET_WEATHER,
            payload: weather
        })
    };
}