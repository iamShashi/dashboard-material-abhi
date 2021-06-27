import { combineReducers } from '../combineReducers';
import authState, { initialAuthState } from './auth';

export const initialAppState = {
  authState: initialAuthState,
};

export default combineReducers({
  authState
});
