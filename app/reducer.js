import { combineReducers } from 'redux';
import userResource from './resources/user';

const reducer = combineReducers({
  users: userResource.reducer,
});

export default reducer;
