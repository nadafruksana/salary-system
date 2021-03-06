import axios from 'axios'

export const setUser = (user) => {
    return {type:'SET_USER', payload:user}
}

export const startLoginUser = (formData, redirect)=> {
    return (dispatch)=>{
        axios.post('/users/login', formData)
            .then((response)=> {
                if(response.data.hasOwnProperty('error')){
                    alert(response.data.error)
                }else{
                    alert('successfully logged in')
                    localStorage.setItem('authToken', response.data.token)
                    axios.get('users/account',{
                        headers:{
                            'Authorization':localStorage.getItem('authToken')
                        }
                    })
                    .then((response)=> {
                        const user = response.data
                        dispatch(setUser(user))
                        redirect()
                    })
                    .catch((err)=> {
                        alert(err)
                    })
                    redirect()
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}
export const startGetUser= () => {
    return(dispatch) => {
        axios.get('/users/account', {
            headers:{
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const user=response.data
            dispatch(setUser(user))
        })
        .catch((err)=> {
            alert(err)
        })
    }
}


export const startRegisterUser = (formData, redirect) => {
    return(dispatch) =>{
        //console.log('action generator', formData)
        axios.post('/users/register', formData)
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    alert('you have registered successfully')
                    redirect()
                }
                //console.log(response.data)
            })
            .catch((err)=> {
                console.log(err)
            })
    }
}

export const startUserLogout = () => {
    return (dispatch) => {
        axios.delete ('/users/logout',{
            headers:{
                'Authorization':localStorage.getItem('authToken')
            }
            .then((response)=>{
                if(response.data.notice){
                    alert(response.data.notice)
                    localStorage.removeItem('authToken')
                    dispatch(setUser({}))
                    window.location.href = "/"
                }

            })
        })
    }
}