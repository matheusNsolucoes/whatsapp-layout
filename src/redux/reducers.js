// @flow

import { combineReducers } from 'redux';
import Layout from './layout/reducers';
import Auth from './auth/reducers';
import AppMenu from './appMenu/reducers';
import nodeSlice from './flows/nodeSlice';

export default combineReducers({
    Auth,
    AppMenu,
    Layout,
    node: nodeSlice
});
