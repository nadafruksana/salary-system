import React from 'react'
import { Link } from 'react-router-dom'
import {Nav,Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'



function NavBar(props) {
    return (
        <div>
          <Nav className="nav-bar-header justify-content-center">
            <Nav.Item>
              <div >
              <h2 >Order today and get free shipping on your first deliver</h2>
              </div>
            </Nav.Item>
          </Nav>


          <Navbar className="nav-bar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto "  >
                <Nav.Link style={{color:'black',fontWeight:'bold'}} as={Link} to='/'>Home</Nav.Link>
                <Nav.Link style={{color:'black',fontWeight:'bold'}}as={Link} to="/menu">Menu</Nav.Link>
                <Nav.Link style={{color:'black',fontWeight:'bold'}} as={Link} to="/meal-plans">Meal-plans</Nav.Link> 
              </Nav>  
              {Object.keys(props.user).length!==0 ? <h2>Sunbasket</h2> :
              <Nav>
              <Nav.Link   style={{color:'black',fontWeight:'bold'}} as={Link} to="/login" > Sign In</Nav.Link>
              <Nav.Link  style={{color:'black',fontWeight:'bold'}} as={Link} to="/users/register">
                Register
              </Nav.Link>
            </Nav>
               }
              
            </Navbar.Collapse>
          </Navbar>
        </div>
 
    )

}

const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(NavBar)