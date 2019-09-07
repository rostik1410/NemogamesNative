import {combineReducers} from 'redux';
import games from './GamesReducer';
import streams from './StreamsReducer';
import matches from './MatchesReducer';
import loader from './LoaderReducer';

export default combineReducers({
    games,
    streams,
    matches,
    loader,
});
