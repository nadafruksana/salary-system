import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,NavbarBrand,Nav,NavItem} from 'reactstrap'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'

import Home from './components/static/Home'
import Home2 from './components/static/Home2'
import UserAccount from './components/auth/Account'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import {startUserLogout} from './actions/userAction'


import StaffsList from './components/staff/List'
import StaffsNew from './components/staff/New'

import Leave from './components/leave/Leave'
import LeavesList from './components/leave/List'




function App(props) {

  const handleLogout = () => {
     props.dispatch(startUserLogout())
  }

  
  return (        
      <BrowserRouter>
        <div>
        <Navbar  light expand="md"  className="mb-1 navbar-dark bg-secondary">
        <NavbarBrand><strong>Salary Management System</strong></NavbarBrand>
        <Nav className="ml-auto navbar-dark "  navbar> 
        {(Object.keys(props.user).length>0)? (                    
          <React.Fragment>          
              <NavItem>
              <Link className="nav-link text-light" to="/"><strong>Home</strong></Link>
              </NavItem>
             
              <NavItem>
              <Link className="nav-link text-light"  to="/staffs"><strong>Staff</strong> </Link>
              </NavItem>
              <NavItem>
              <Link className="nav-link text-light" to="/leaves"><strong> Leave Application</strong></Link>
              </NavItem>
             
              
              <NavItem>
              <Link className="nav-link text-light" to="#"  onClick={handleLogout}><strong>Logout</strong> </Link>
              </NavItem>     
          </React.Fragment> 
          
          ):(
                       
            <React.Fragment>
            <NavItem>
            <Link className="nav-link text-light" to="/"><strong>Home</strong></Link>
            </NavItem>
            <NavItem>
            <Link className="nav-link text-light" to="/users/login"><strong>Login</strong></Link> 
            </NavItem>
            <NavItem>
            <Link className="nav-link text-light" to="/users/register"><strong>Register</strong></Link>
            </NavItem>
            </React.Fragment>
                        
            )
          }  
           </Nav>  
         </Navbar>   

         <div className="container" >
            <switch>
                {(Object.keys(props.user).length>0)? (
                <Route path="/" component={Home} exact={true} />
                ):(
                  <Route path="/" component={Home2} exact={true} /> 
                )}
                
                <Route path="/users/login" component={Login} exact={true} />
                <Route path="/users/register" component={Register} exact={true}/> 
                
                <Route path="/staffs" component={StaffsList} exact={true} /> 
                <Route path="/staffs/new" component={StaffsNew} />

                <Route path="/leaves" component={LeavesList} exact={true} />
                <Route path="/leaves/new" component={Leave} /> 

              
            </switch> 
           </div>
          </div>  
        </BrowserRouter>        
  )
}

const mapStateToProps = (state) => {
  return {
      user : state.user,         
  }
}
export default connect(mapStateToProps)(App)
       
           
            
          

                    
              
         



    

















