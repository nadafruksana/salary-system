import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../../App.css'
import {startGetStaffs} from '../../actions/staffsAction'
import {startDeleteStaff} from '../../actions/staffsAction'

class StaffsList extends React.Component{
    componentDidMount() {  
        if (this.props.staffs.length === 0) {
            this.props.dispatch(startGetStaffs())
        }
    }

    handleRemove = (id) =>{
        window.alert('Are you sure')
        this.props.dispatch(startDeleteStaff(id))        
    }
     
    render(){
      return(    
        <div>
          
          <br/><br/>                       
          <div class="row"> 
                {
                   this.props.staffs.map((staff,i) =>{
                       return(                         
                        <div class="col-sm-3">
                        <div class="card  border-secondary  mb-5" >
                        <div class="card-header text-white bg-secondary h6"><strong><em>
                            Staff </em></strong>                              
                        </div>

                        <div class="card-body">                      
                            <p class="card-text h6"><strong><em>Name : {staff.name} </em></strong></p>
                            <p class="card-text h6"><strong><em>Email: {staff.email} </em></strong></p>
                            <p class="card-text h6"><strong><em>Phone : {staff.phone}</em></strong></p>
                            <p class="card-text h6"><strong><em>DOB : {staff.dob}</em></strong></p>
                            <p class="card-text h6"><strong><em>Leaves : {staff.leaves}</em></strong></p>
                            <p class="card-text h6"><strong><em>designation : {staff.designation}</em></strong></p>
                            <p class="card-text h6"><strong><em>Bank details : {staff.bank_details}</em></strong></p>
                            <p class="card-text h6"><strong><em>Salary: {staff.salary}</em></strong></p>


                        </div>

                        <div class="card-footer text-white bg-light">
                        <h6 class="btn btn-dark ">{ <button onClick={() => {
                                                        this.handleRemove(staff._id)
                                                            }}><em><strong>Remove</strong></em></button>}</h6>
                        </div>
                        </div>
                        </div>                   
                       )
                    }) 
                }
          </div>        
          <Link to={`/staffs/new`} ><u><strong>Add Staff</strong></u></Link> <br/><br/>
        </div>
    )
  }    
}

const mapStateToProps = (state) => {
    return {
        staffs:state.staffs        
    }
}
export default connect(mapStateToProps)(StaffsList)