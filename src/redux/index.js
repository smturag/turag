import { combineReducers } from 'redux'
import postReducer from './item'

const rootReducer = combineReducers({
      post: postReducer,
    })


    export default rootReducer