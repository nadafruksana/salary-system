import React from 'react'
import {connect} from 'react-redux'
import {startRegisterUser} from '../../actions/userAction'

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state={
            username: '',
            email:'',
            password:''
        }
    }

handleChange = (e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
   
}
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            username:this.state.username,
            email: this.state.email,
            password:this.state.password
        }
        const redirect = ()=> {
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startRegisterUser(formData,redirect))
        //this.props.dispatch(startRegisterUser(formData))
    }

    render(){
        return(
            <div >
                <div className="col-md-4 offset-md-2">
                <h2>SIGN UP</h2>
               
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                          value={this.state.username}
                          id="username"
                          name="username"
                          onChange={this.handleChange}
                          className="form-control"/>
                          
                          </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                          type="text"
                          name="email"
                          id="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          className="form-control"/>
                          
                </div>

                <div className="form-group">
                <label htmlFor="password">password</label>
                <input 
                      type="text"
                      name="password"
                      id="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      className="form-control" />
                      
                </div>
                <input 
                   type="submit" value="Register" className="btn btn-primary"/>
                </form>
                </div>
            </div> 
        )
    }
}
export default connect()(Register)