import { combineReducers } from 'redux';
import shortcutItems from './shortcutItems.js';

const rootReducer = combineReducers({
	shortcutItems: shortcutItems
});

export default rootReducer;
