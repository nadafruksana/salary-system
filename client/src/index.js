import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'


import configureStore from './store/configureStore'
import {startGetUser} from './actions/userAction'

import {startGetLeaves} from './actions/leavesAction'
import {startGetStaffs} from './actions/staffsAction'
const store = configureStore()

console.log(store.getState())

store.subscribe(() =>{
    console.log(store.getState())
})

if(localStorage.getItem('authToken')){
    store.dispatch(startGetUser)
    store.dispatch(startGetLeaves())
    store.dispatch(startGetStaffs())
}

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))