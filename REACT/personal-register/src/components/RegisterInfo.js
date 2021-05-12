import React from "react";
import {Link } from "react-router-dom"

class RegisterInfo extends React.Component {
  state = {
    
  };
  handleFormSubmit=(event)=>{
      event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
    
        <div className="row mb-5 mt-5">
          <div className="col-10">
            <input
              onChange={this.props.searchPersonProps
              }
              type="text"
              className="form-control"
              placeholder="search person"
            />
          </div>
          <div className="col-2">
            <Link 
            to="/add"
            type="button"
            className="btn btn-md btn-primary">Add Person</Link>
          </div>
        </div>
       
      </form>
    );
  }
}

export default RegisterInfo;
