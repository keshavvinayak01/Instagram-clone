import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import browserHistory from '../history'; 
import comments from '../client/data/comments';
import posts from '../client/data/posts'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './reducers/index';


export const ConfigureStore = () => {
    const store = createStore(
        rootReducer, 
        {
            posts : posts,
            comments : comments
        },
        applyMiddleware(thunk, logger)
    );
    return store;
}

export const history = syncHistoryWithStore(browserHistory, ConfigureStore());