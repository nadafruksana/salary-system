import React from 'react'
import {connect} from 'react-redux'

function UserAccount(props){
    return (
        <div>
            <h1>{props.user.usrname} { props.user.email}</h1>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(UserAccount)