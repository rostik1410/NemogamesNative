import axios from "axios";
import constants from "../constants/index";

export const getGames = () => {
    return dispatch => {
        dispatch({
            type: constants.LOADER_START,
        });
        axios
            .get(`api/games`)
            .then(response => {
                dispatch({
                    type: constants.GET_GAMES_SUCCESS,
                    data: response.data,
                });
                dispatch({
                    type: constants.LOADER_FINISH,
                });
            })
            .catch(error => {
                dispatch({
                    type: constants.GET_GAMES_ERROR,
                    error: error,
                    data: error.response ? error.response.data : {},
                });
                dispatch({
                    type: constants.LOADER_FINISH,
                });
            });
    };
};
