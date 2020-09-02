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
       
           
            
          

                    
              
         



    























// import React from 'react'
// import {BrowserRouter, Route, Link} from 'react-router-dom'
// import isEmpty from 'lodash/isEmpty'
// import {connect} from 'react-redux'
// import './App.css'
// import logo from './images/logo.png'
// import 'bootstrap/dist/css/bootstrap.css'
// //import NavBar from './components/navbar'


// import Home from './components/static/Home'
// import UserAccount from './components/auth/Account'
// import Register from './components/auth/Register'
// import Login from './components/auth/Login'
// import {startUserLogout} from './actions/userAction'

// import Show from './components/Admin/Show'
// import List from './components/Admin/List'
// import New from './components/Admin/New'
// import Edit from './components/Admin/Edit'

// import StaffList from './components/staff/List'
// import StaffShow from './components/staff/Show'

// import Leave from './components/leave/Leave'

// import CustomersList from './components/customer/List'
// import CustomersNew from './components/customer/New'



// //import Leave from './components/leave/Leave'

// function App(props){
//     const isBackground = true
//     const handleLogout= () => {
//         props.dispatch(startUserLogout())
//     }
//     return(
        
//             <div  styles={{ backgroundImage:`url(${logo})` }}>
//         {/*<div className={isBackground ? 'background-red': 'background-blue'}>*/}
//         <BrowserRouter>
//         <div className="container">
            
//             <ul className="nav justify-content-end">
//                 <li className="nav-item-left">
//                 <Link to="/" className="nav-link">Home</Link>
//                 </li>
            
           
//             {
//                 isEmpty(props.user) ? (
//                     <React.Fragment>
//                         <li className="nav-item">
//                         <Link to = "/users/register" className="nav-link">Register</Link>
        
//                         </li>

//                         <li className="nav-item">
//                         <Link to = "/users/login" className="nav-link"> Login</Link>
//                         </li>
//                     </React.Fragment>
//                 ) : (
//                     <React.Fragment>
//                         <li className="nav-item">
//                         <Link to = "/admins" className="nav-link">Admin  </Link>
//                         </li>

//                         <li className="nav-item">
//                         <Link to = "/staffs" className="nav-link">Staff  </Link>
//                         </li>

//                         <li className="nav-item">
//                             <Link to="/leaves" className="nav-link">Leave Application  </Link>
//                         </li>

//                         <li className="nav-item">
//                             <Link to="/customers" className="nav-link">Customer  </Link>
//                         </li>



//                         <li className="nav-item">
//                         <Link to = "/users/account" className="nav-link">Account  </Link>
//                         </li>

//                         <li className="nav-item">
//                         <Link to = "#" onClick={handleLogout} className="nav-link">Logout</Link>
//                         </li>

//                     </React.Fragment>
//                 )
//                 }
//                 </ul>
                
        
        
        
//             <Route path = "/" component={Home} exact={true} />
//             <Route path ="/users/register" component={Register} />
//             <Route path ="/users/login" component={Login} />
//             <Route path ="/users/account" component={UserAccount} />

//             <Route path="/admins" component={List} exact={true} />
//             <Route path="/admins/new" component={New}/>
//             <Route path="/admins/edit/:id" component={Edit}/>
            
//             <Route path="/staffs" component={StaffList} exact={true}/>
//             <Route path="/staffs/:id" component={StaffShow}/>

//             <Route path="/customers" component={CustomersList} exact={true} /> 
//                 <Route path="/customers/new" component={CustomersNew} />

//             <Route path="/leaves" component={Leave}/>
// </div>

//     </BrowserRouter>
//     </div>
    
//     )
// }
// const mapStateToProps = (state)=> {
//     return{
//         user:state.user
//     }
// }
// export default connect(mapStateToProps)(App)











// import React from 'react'
// import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
// import {connect} from 'react-redux'
// import 'bootstrap/dist/css/bootstrap.css'


// import Home from './components/static/Home'
// import UserAccount from './components/auth/Account'
// import Register from './components/auth/Register'
// import Login from './components/auth/Login'
// import {startUserLogout} from './actions/userAction'

// import Show from './components/Admin/Show'
// import List from './components/Admin/List'
// import New from './components/Admin/New'
// import Edit from './components/Admin/Edit'

// function App(props){
//     const handleLogout= () => {
//         props.dispatch(startUserLogout())
//     }
//     return(
//         <BrowserRouter>
//         <div>
           
//             <Link to="/">Home</Link>
//             {
//                 Object.keys(props.user).length !==0 ? (
//                 <div>
                     
//                      <Link to = "/account">Account | </Link>
//                      <Link to = "/admins">Admin | </Link>
//                      <Link to = "/staff">Staff |</Link>
//                      <Link to = "/leave">Leave Application |</Link>
//                      <Link to = "#" onClick={handleLogout}>Logout</Link>
//                 </div>
//             ):(
//     <div>
//         <Link to = "/users/register">Register</Link>
//         <Link to = "/users/login"> Login</Link>
        
//         </div>

//     )  
// }
//     <Switch>
//             <Route path = "/" component={Home} exact={true} />
//             <Route path ="/users/register" component={Register} />
//             <Route path ="/users/login" component={Login} />
//             <Route path ="/account" component={UserAccount} />

//             <Route path="/admins" component={List} exact={true} />
//             <Route path="/admins/new" component={New}/>
//             <Route path="/admins/edit/:id" component={Edit}/>
            
//     </Switch>
// </div>
//     </BrowserRouter>
//     )
// }
// const mapStateToProps = (state)=> {
//     return{
//         user:state.user
//     }
// }
// export default connect(mapStateToProps)(App)