import React, { Component } from 'react'
import UserService from '../services/UserService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            User: {
                firstName:"",
                lastName:"",
                email:"",
                bio:""
            }
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            console.log('user',res.data)
            this.setState({User: res.data.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> User First Name: </label>
                            <div> { this.state.User.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> User Last Name: </label>
                            <div> { this.state.User.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> User Email ID: </label>
                            <div> { this.state.User.email}</div>
                        </div>
                        <div className = "row">
                            <label> User Bio: </label>
                            <div> { this.state.User.bio }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
