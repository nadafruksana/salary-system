import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import leavesReducer from '../reducers/leavesReducer'
import staffsReducer from '../reducers/staffsReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user:userReducer,
        staffs: staffsReducer,  
        leaves:leavesReducer
        

    }), applyMiddleware(thunk))
    return store
}

export default configureStore