import React from 'react'
import { connect } from 'react-redux'
import { startPostStaff } from '../../actions/staffsAction'

class StaffsNew extends React.Component{
    constructor(){
        super()
        this.state= {
            name : '',
            email : '',
            phone : '',
            gender:'',
            dob:'',
            salary:'',
            leaves:'',
            bank_details:'',
            designation:''

        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state)
        const redirect=()=>{     
            return this.props.history.push('/staffs')
        }
        this.props.dispatch(startPostStaff(this.state,redirect))    
    }

    render(){
        return (
            <div>
            <br/> <br/> <br/>
            <div className="row ">  
                <div className="col-md-5">
               
                </div>

                <div className="col-md-5 offset-md-1">                              
                <p className="h4 text-center">Add Staff</p><br/>

                <form onSubmit = {this.handleSubmit}>
                
                <div className="form-group row">
                <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'name'>Name</label>   
                <div class="col-sm-10">  
                <input className="form-control form-control-sm"   type ='text' id ='name' name ='name' value = { this.state.name} onChange= {this.handleChange}/>
                </div>    
                </div><br/>

                <div className="form-group row">
                <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'email'>Email</label>   
                <div class="col-sm-10">  
                <input className="form-control form-control-sm" type ='text' id ='email' name='email' value = { this.state.email} onChange= {this.handleChange}/>
                </div>    
                </div><br/>

                <div className="form-group row">                    
                <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'phone'>Phone</label>   
                <div class="col-sm-10">  
                <input className="form-control form-control-sm" type ='text' id ='phone' name='phone' value = { this.state.phone} onChange= {this.handleChange}/>
                </div>    
                </div><br/>

                <div className="form-group row">                    
                <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'leaves'>Leaves</label>   
                <div class="col-sm-10">  
                <input className="form-control form-control-sm" type ='text' id ='leaves' name='leaves' value = { this.state.leaves} onChange= {this.handleChange}/>
                </div>    
                </div><br/>

                <div className="form-group row">                    
                <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'dob'>dob</label>   
                <div class="col-sm-10">  
                <input className="form-control form-control-sm" type ='Date' id ='dob' name='dob' value = { this.state.dob} onChange= {this.handleChange}/>
                </div>    
                </div><br/>

                <div className="form-group row">                    
                <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'designation'>Designation</label>   
                <div class="col-sm-10">  
                <input className="form-control form-control-sm" type ='text' id ='designation' name='designation' value = { this.state.designation} onChange= {this.handleChange}/>
                </div>    
                </div><br/> 

                 <div className="form-group row">                    
                <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'bank_details'>bankdetails</label>   
                <div class="col-sm-10">  
                <input className="form-control form-control-sm" type ='text' id ='bank_details' name='bank_details' value = { this.state.bank_details} onChange= {this.handleChange}/>
                </div>    
                </div><br/> 

                <div className="form-group row">                    
                <label class="col-sm-2 col-form-label col-form-label-sm h3" htmlFor= 'salary'>Salary</label>   
                <div class="col-sm-10">  
                <input className="form-control form-control-sm" type ='text' id ='salary' name='salary' value = { this.state.salary} onChange= {this.handleChange}/>
                </div>    
                </div><br/>  

                <input className="btn btn-secondary btn-sm btn-block" type ='submit' value='Submit' /><br/><br/><br/>
                       
                </form>
                </div>                   
            </div>
            </div>
        )
    }
}
export default connect()(StaffsNew)

