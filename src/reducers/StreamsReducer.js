import constants from "../constants/index";

const initialState = {
    streams: [],
    stream: '',
    error: false,
}

export default (state = initialState, action) => {
    switch (action.type){
        case constants.GET_STREAMS_SUCCESS:
            return {
                ...state,
                streams: action.data,
                error: false,
            };

        case constants.GET_STREAMS_ERROR:
            return {
                ...state,
                streams: [],
                error: action.data,
            };

            case constants.GET_STREAM_SUCCESS:
            return {
                ...state,
                stream: action.data,
                error: false,
            };

        case constants.GET_STREAM_ERROR:
            return {
                ...state,
                stream: [],
                error: action.data,
            };

        default:
            return state;
    }
}
