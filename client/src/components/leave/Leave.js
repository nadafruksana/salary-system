import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {startAddLeave} from '../../actions/leavesAction'

class LeaveForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            staffId:'',
            leaves:'',
            from_date:'',
            to_date:'',
            description:''
            
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const redirect = () => {
            return this.props.history.push('/leaves')

        }
        this.props.dispatch(startAddLeave(this.state.redirect))
    }
        // const formData = {
        //     staffId:this.state.staffId,
        //     leaves:this.state.leaves,
        //     from_date:this.state.from_date,
        //     to_date:this.state.to_date,
        //     description:this.state.description
           
        // }
        //console.log(formData)
        

    render(){
        return(
            <div className="col-md-3">
                <h2>Leave Application</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="staffid">StaffId</label>
                    <input type="text"
                           name="staffid"
                           id="staffid"
                           value={this.state.staffid}
                           onChange={this.handleChange}
                           placeholder="StaffId"
                           className="form-control"/>
                    </div>
                    
                    <div className="form-group">
                    <label htmlFor="leaves">Leaves</label>
                    <input type="text"
                           name="leaves"
                           id="leaves"
                           value={this.state.leaves}
                           onChange={this.handleChange}
                           placeholder="Number of Leaves"
                           className="form-control"/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="from_date">From_Date</label>
                    <input type="Date"
                           id="from_date"
                           name="from_date"
                           value={this.state.from_date}
                           onChange={this.handleChange}
                           placeholder="From Date"
                           className="form-control"/>
                    </div>
                    
                    <div className="form-group">
                    <label htmlFor="to_date">To_Date</label>
                    <input type="Date"
                           id="to_date"
                           name="to_date"
                           value={this.state.to_date}
                           onChange={this.handleChange}
                           placeholder="to Date"
                           className="form-control"/>
                    </div>
                    
                    <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea 
                           id="description"
                           name="description"
                           value={this.state.description}
                           onChange={this.handleChange}
                           placeholder="Description"
                           className="form-control"/>
                    </div>

                    

                    <input type="submit"
                            value="Apply Leave"/>


                </form>
            </div>
            
        )
    }
}
export default connect()(LeaveForm)