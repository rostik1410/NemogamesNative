import constants from "../constants/index";

const initialState = {
    matches: null,
    match: null,
    error: false,
    liveMatches: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_MATCHES_SUCCESS:
            return {
                ...state,
                matches: action.data,
                error: false
            };

        case constants.GET_MATCHES_ERROR:
            return {
                ...state,
                matches: null,
                error: action.data
            };

        case constants.GET_LIVE_MATCHES_SUCCESS:
            return {
                ...state,
                liveMatches: action.data,
                error: false
            };

        case constants.GET_LIVE_MATCHES_ERROR:
            return {
                ...state,
                liveMatches: null,
                error: action.data
            };

        case constants.GET_MATCH_SUCCESS:
            return {
                ...state,
                match: action.data,
                error: false,
            };

        case constants.GET_MATCH_ERROR:
            return {
                ...state,
                match: [],
                error: action.data,
            };

        default:
            return state;
    }
};
