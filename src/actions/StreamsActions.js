import axios from "axios";
import constants from "../constants/index";

export const getStreams = (params) => {
    return dispatch => {
        dispatch({
            type: constants.LOADER_START,
        });
        axios
            .get('api/streams', {
                params: params
            })
            .then(response => {
                dispatch({
                    type: constants.GET_STREAMS_SUCCESS,
                    data: response.data,
                });  
                dispatch({
                    type: constants.LOADER_FINISH,
                });
            })
            .catch(error => {
                dispatch({
                    type: constants.GET_STREAMS_ERROR,
                    error: error,
                    data: error.response ? error.response.data : {},
                });  
                dispatch({
                    type: constants.LOADER_FINISH,
                });
            });
    };
};


export const getStream = (channel) => {
    return dispatch => {
        dispatch({
            type: constants.LOADER_START,
        });
        axios
            .get(`api/streams/${channel}`)
            .then(response => {
                dispatch({
                    type: constants.GET_STREAM_SUCCESS,
                    data: response.data,
                });  
                dispatch({
                    type: constants.LOADER_FINISH,
                });
            })
            .catch(error => {
                dispatch({
                    type: constants.GET_STREAM_ERROR,
                    error: error,
                    data: error.response ? error.response.data : {},
                });  
                dispatch({
                    type: constants.LOADER_FINISH,
                });
            });
    };
}