import { taskReducer } from "./task-reducers";
import {combineReducers} from 'redux';


var allReducers =combineReducers({tasks:taskReducer});

export default allReducers;