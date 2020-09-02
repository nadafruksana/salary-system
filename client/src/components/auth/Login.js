import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startLoginUser} from '../../actions/userAction'
import '../../styles/login.css'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            show:false
        }
        
    }
    handleShow = () => {
        this.setState((prevState) => ({
            show: !prevState.show
        }))
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=> {
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        const redirect =()=>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startLoginUser(formData, redirect))
        //console.log(formData)
    }



    render(){
        return(
            <div className='Login-component'>
            <div>
            {/* <div className="login-container">
             */}
                {/* <div className="login-logo"></div> */}
                            
                {/* <img className={'login-logo-img'} src={require('../../styles/icons/login-logo.png')}  alt='logo' /> */}

                <center><h2>Sign In</h2></center>
               
                <div  
                className="col-md-4 offset-md-2">
                <form 
                className="login-form" onSubmit={this.handleSubmit}>
                 <div className="form-group">

                 <label htmlFor="email">Email</label><br/>
                    <input 
                           type="text"
                           name="email"
                           id="email"
                           value={this.state.email}
                           onChange={this.handleChange}
                           placeholder="EmailId"
                           className="form-control"/>
                           
                    </div>
                     

                    <div className="form-group">
                    
                    <label htmlFor="password">Password</label><br />
                    <input 
                           type={this.state.show ? 'text' : 'password'}
                           name="password"
                           id="password"
                           value={this.state.password}
                           onChange={this.handleChange}
                           placeholder="Password"
                           className="form-control"/>
                           
                </div>
                <div className='checkbox-control'>
            <div>
            <input
                type='checkbox'
                name='show'
                id='show'
                value={this.state.show}
                onClick={this.handleShow}
              />
              <label htmlFor='show'>Show password</label>
            </div><br />
                
                <center><Link className='link' to='#'>
              Forgot Password ?
            </Link></center>
                
           
          </div>

          <input className='btn-login' type='submit' value='Login' />
          <center><small>
            Don't have an account?
            <Link className='link' to='/users/register'>
              Sign Up
            </Link>
          </small></center>
                    {/* <input 
                          type="submit"
                          value="Login"/> */}

                </form>
            </div>
            </div>
            </div>
        
        )
    }
}
export default connect()(Login)