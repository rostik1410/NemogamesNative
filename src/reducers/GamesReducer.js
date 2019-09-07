import constants from "../constants/index";

const initialState = {
    games: null,
    error: false,
}

export default (state = initialState, action) => {
    switch (action.type){
        case constants.GET_GAMES_SUCCESS:
            return {
                ...state,
                games: action.data,
                error: false,
            };

        case constants.GET_GAMES_ERROR:
            return {
                ...state,
                games: null,
                error: action.data,
            };

        default:
            return state;
    }
}
