import axios from "axios";
import constants from "../constants/index";

export const getMatches = () => {
    return dispatch => {
        dispatch({
            type: constants.LOADER_START,
        });
        axios
            .get(`api/tournaments`)
            .then(response => {
                dispatch({
                    type: constants.GET_MATCHES_SUCCESS,
                    data: response.data,
                });
                dispatch({
                    type: constants.LOADER_FINISH,
                });
            })
            .catch(error => {
                dispatch({
                    type: constants.GET_MATCHES_ERROR,
                    error: error,
                    data: error.response ? error.response.data : {},
                });
                dispatch({
                    type: constants.LOADER_FINISH,
                });
            });
    };
};

export const getMatch = (id) => {
    return dispatch => {
        dispatch({
            type: constants.LOADER_START,
        });
        axios
            .get(`api/tournaments/${id}`)
            .then(response => {
                dispatch({
                    type: constants.GET_MATCH_SUCCESS,
                    data: response.data,
                });  
                dispatch({
                    type: constants.LOADER_FINISH,
                });
            })
            .catch(error => {
                dispatch({
                    type: constants.GET_MATCH_ERROR,
                    error: error,
                    data: error.response ? error.response.data : {},
                });  
                dispatch({
                    type: constants.LOADER_FINISH,
                });
            });
    };
}

export const getLiveMatches = () => {
    return dispatch => {
        dispatch({
            type: constants.LOADER_START,
        });
        axios
            .get(`api/live`)
            .then(response => {
                dispatch({
                    type: constants.GET_LIVE_MATCHES_SUCCESS,
                    data: response.data,
                });
                dispatch({
                    type: constants.LOADER_FINISH,
                });
            })
            .catch(error => {
                dispatch({
                    type: constants.GET_LIVE_MATCHES_ERROR,
                    error: error,
                    data: error.response ? error.response.data : {},
                });
                dispatch({
                    type: constants.LOADER_FINISH,
                });
            });
    };
}