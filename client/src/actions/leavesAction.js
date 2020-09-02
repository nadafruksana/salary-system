import axios from 'axios'
export const setLeaves = (leaves) => {
    return {type: 'SET_LEAVES' , payload: leaves}
}

export const startGetLeaves = () => {
    return (dispatch) => {
        axios.get('/leaves' , {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response)=> {
            const leaves = response.data
            dispatch(setLeaves(leaves))
        })
    }
}

// export const addLeave = (leavedata,redirect) => {
//     return {type: 'ADD_LEAVE', payload:leave}
// }
export const startAddLeave = (leaveData, redirect)=>{
    return (dispatch) => {
        axios.post('/leaves/new', leaveData, {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response)=> {
            console.log('LeaveAddAction',response.data)
            redirect()
            dispatch(startGetLeaves())
           
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}