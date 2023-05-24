import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({

});

export const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


