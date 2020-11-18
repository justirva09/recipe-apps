import {combineReducers} from 'libraries';

// Reducer
import profile from './profile/reducer';
import popup from './popup/reducer';

const reducer = combineReducers({
  profile,
  popup
});

// Action
export * from './profile/action';
export * from './popup/action';

// Selector
export * from './profile/selector';
export * from './popup/selector';

export default reducer;
