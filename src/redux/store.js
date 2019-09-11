import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-index';
import browserHistory from '../history'; 
import rootReducer from './reducers/index';
import comments from '../client/data/comments';
import posts from '../client/data/posts';

const defaultState = {
    posts,
    comments
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;