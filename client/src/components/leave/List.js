import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../../App.css'
import {startGetLeaves} from '../../actions/leavesAction'

class LeavesList extends React.Component{
    componentDidMount() {  
        if (this.props.leaves.length === 0) {
            this.props.dispatch(startGetLeaves())
        }
    }

    
     
    render(){
      return(    
        <div>
          
          <br/><br/>                       
          <div class="row"> 
                {
                   this.props.leaves.map((leave,i) =>{
                       return(                         
                        <div class="col-sm-3">
                        <div class="card  border-secondary  mb-5" >
                        <div class="card-header text-white bg-secondary h6"><strong><em>
                            Leave </em></strong>                              
                        </div>

                        <div class="card-body">                      
                            <p class="card-text h6"><strong><em>StaffId : {leave.staffId} </em></strong></p>
                            <p class="card-text h6"><strong><em>Leaves: {leave.leaves} </em></strong></p>
                            <p class="card-text h6"><strong><em>from_date : {leave.from_date}</em></strong></p>
                            <p class="card-text h6"><strong><em>to_date : {leave.to_date}</em></strong></p>
                            <p class="card-text h6"><strong><em>Description : {leave.description}</em></strong></p>
                        


                        </div>

                        {/* <div class="card-footer text-white bg-light">
                        <h6 class="btn btn-dark ">{ <button onClick={() => {
                                                        this.handleRemove(staff._id)
                                                            }}><em><strong>Remove</strong></em></button>}</h6>
                        </div> */}
                        </div>
                        </div>                   
                       )
                    }) 
                }
          </div>        
          <Link to={`/leaves/new`} ><u><strong>Add Leave</strong></u></Link> <br/><br/>
        </div>
    )
  }    
}

const mapStateToProps = (state) => {
    return {
        leaves:state.leaves       
    }
}
export default connect(mapStateToProps)(LeavesList)