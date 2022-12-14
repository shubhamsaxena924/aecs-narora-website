import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { uiReducer } from './ui.reducer';
import { userReducer } from './user.reducer';

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  ui: uiReducer,
});

export const rootReducer = (state: any, action: any) =>
  appReducer(state, action);

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
