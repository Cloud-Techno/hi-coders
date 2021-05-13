import React from 'react'
import axios from "axios"

export default class EditPerson extends React.Component {

 state={
    firstName:"",
    lastName:"",
    gender:"",
     birthday:"",
    email:"",
    password:"",
    about:""
 }
 async componentDidMount(){
     const id = this.props.match.params.id;
    
const response = await axios.get(`http://localhost:3002/personalNames/${id}`)
 const person = response.data
 this.setState({
    firstName : person.firstName,
     lastName : person.lastName,
     gender : person.gender,
     birthday : person.birthday,
     email : person.email,
     password : person.password,
     about: person.about
 })
}

changeInput=(e)=>{
     this.setState({
       
   [e.target.name]: e.target.value
    })
}

    handleFormSubmit=(event)=>{
        event.preventDefault();
       const {firstName,lastName,gender,birthday,email,password,about} = this.state;
       const id = this.props.match.params.id;
       const updatedPerson = {
        firstName,
        lastName,
        gender,
        birthday,
        email,
        password,
        about
       }
       this.props.onEditPerson(id,updatedPerson)
       this.props.history.push("/")
    }
    render() {
       
return(
    <div className="container">
    <form className="mt-5" onSubmit={this.handleFormSubmit}>
    <input required className="form-control" id="disabledInput" type="text" placeholder="Edit Person.." disabled/>
        <div className="form-row">
            <div className="form-group col-md-12">
                <label htmlFor="inputName">Name</label>
                <input   type="text" 
                        className="form-control" 
                        name="firstName" required 
                        value={this.state.firstName}
                        onChange={this.changeInput}/>
            </div>
            
        </div>
        <div className="form-row">
        <div className="form-group col-md-12">
                <label htmlFor="inputName">Last Name</label>
                <input   type="text" 
                        className="form-control" 
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.changeInput}/>
            </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-12">
                <label htmlFor="inputName">Gender</label>
                <input   type="text" 
                        className="form-control" 
                        name="gender"
                        value={this.state.gender}
                        onChange={this.changeInput}/>
            </div>
        </div>
        
        <div className="form-row">
        <div className="form-group col-md-12">
                <label htmlFor="inputName">Birth Day</label>
                <input  type="date" 
                        className="form-control" 
                        name="birhday"
                        value={this.state.birthday}
                        onChange={this.changeInput}/>
            </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-12">
                <label htmlFor="inputName">E-mail</label>
                <input   type="email" 
                        className="form-control" 
                        name="email"
                        value={this.state.email}
                        onChange={this.changeInput}/>
            </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-12">
                <label htmlFor="inputName">Password</label>
                <input   type="password" 
                        className="form-control" 
                        name="password"
                        value={this.state.password}
                        onChange={this.changeInput}/>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-12">
                <label htmlFor="overviewTextarea">About</label>
                <textarea  
                        className="form-control" 
                        name="about" rows="1"
                        value={this.state.about}
                        onChange={this.changeInput}
                       ></textarea>
            </div>
        </div>
        <input type="submit" className="btn btn-danger btn-block" value="Edit Person" />
    </form>
</div>
)
    }
}
