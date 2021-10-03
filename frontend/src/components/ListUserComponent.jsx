import React, { Component } from 'react'
import UserService from '../services/UserService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        console.log('prop',props)
        this.addEmployee = this.addUser.bind(this);
        this.editEmployee = this.editUser.bind(this);
        this.deleteEmployee = this.deleteUser.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(User => User._id !== id)});
        });
    }
    viewUser(id){
        console.log('id',id)
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id){
        console.log('props',this.props);
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            console.log('data',res.data);
            this.setState({ users: res.data.data});
        });
    }
    addUser(){
        console.log('props',this.props);
        this.props.history.push(`/add-user/_add`);
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Users List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={ () => this.addUser()}> Add User</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> User First Name</th>
                                    <th> User Last Name</th>
                                    <th> User Email Id</th>
                                    <th> User Bio</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user._id}>
                                             <td> {user.firstName} </td>   
                                             <td> {user.lastName}</td>
                                             <td> {user.email}</td>
                                             <td> {user.bio}</td>
                                             <td>
                                                 <button onClick={ () => this.editUser(user._id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user._id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user._id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListUserComponent
