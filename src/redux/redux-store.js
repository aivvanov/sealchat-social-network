import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer'
import { thunk } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';
import navbarReducer from './navbar-reducer';

const reducersBunch = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    navbar: navbarReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducersBunch, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(reducersBunch, applyMiddleware(thunk));

window.__store__ = store;

export default store;