import React from 'react'
import serialize from "form-serialize"

export default class AddPerson extends React.Component {
    handleFormSubmit=(event)=>{
        event.preventDefault();
        const newPerson = serialize(event.target, { hash: true });//form'daki bilgileri obje olarak almak icin serialize kullandim
       this.props.addNewPersonProps(newPerson)
    }
    render() {
       
return(
    <div className="container">
    <form className="mt-5" onSubmit={this.handleFormSubmit}>
    <input required className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To New Person.." disabled/>
        <div className="form-row">
            <div className="form-group col-md-12">
                <label htmlFor="inputName">Name</label>
                <input   type="text" 
                        className="form-control" 
                        name="firstName" required />
            </div>
            
        </div>
        <div className="form-row">
        <div className="form-group col-md-12">
                <label htmlFor="inputName">Last Name</label>
                <input   type="text" 
                        className="form-control" 
                        name="lastName"/>
            </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-12">
                <label htmlFor="inputName">Gender</label>
                <input   type="text" 
                        className="form-control" 
                        name="gender"/>
            </div>
        </div>
        
        <div className="form-row">
        <div className="form-group col-md-12">
                <label htmlFor="inputName">Birth Day</label>
                <input  
                type="date" 
                        className="form-control" 
                        name="birhday"/>
            </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-12">
                <label htmlFor="inputName">E-mail</label>
                <input   type="email" 
                        className="form-control" 
                        name="email"/>
            </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-12">
                <label htmlFor="inputName">Password</label>
                <input   type="password" 
                        className="form-control" 
                        name="password"/>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-12">
                <label htmlFor="overviewTextarea">About</label>
                <textarea  
                        className="form-control" 
                        name="about" rows="1"></textarea>
            </div>
        </div>
        <input type="submit" className="btn btn-danger btn-block" value="Add" />
    </form>
</div>
)
    }
}
