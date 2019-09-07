import constants from '../constants/index';

const initialState = {
    loader: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.LOADER_START:
            return {
                ...state,
                loader: true,
            }

        case constants.LOADER_FINISH:
            return {
                ...state,
                loader: false,
            }

        default: return state;
    }
}