import axios from 'axios'

// sync
export const setStaffs = (staffs) => {
    return { type: 'SET_STAFFS', payload: staffs}
}

// async 
export const startGetStaffs = () => {
    return (dispatch) => {
        axios.get('/staffs', {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log('staffsAction',response.data)
                const staffs = response.data                 
                dispatch(setStaffs(staffs))                
            })
    }
}



export const startPostStaff = (staffdata, redirect) => {
    return (dispatch) => {
        axios.post('/staffs/new', staffdata,{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('staffAddAction', response.data) 
                 redirect()              
                 dispatch(startGetStaffs())                
            })
    }
}


export const startDeleteStaff = (staffId) => {
    return (dispatch) => {
        
        axios.delete(`/staffs/${staffId}`, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log('staffDeleteAction', response.data)       
                dispatch(startGetStaffs())                
            })
    }
}