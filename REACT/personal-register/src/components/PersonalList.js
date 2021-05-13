import React from "react";

import {Link } from "react-router-dom"

const PersonalList =(props)=> {

  return(
    <div className="row">
      {props.personalNames.map((personal,i) => (

        <div className="col-lg-4" key={i}>
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">{personal.firstName}</div>
                            <div className="d-flex justify-content-between align-items-center">{personal.lastName}</div>
                            <div className="d-flex justify-content-between align-items-center">{personal.gender}</div>
                            <div className="d-flex justify-content-between align-items-center">{personal.birthday}</div>
                            <div className="d-flex justify-content-between align-items-center">{personal.email}</div>
                            <div className="d-flex justify-content-between align-items-center">{personal.password}</div>
                            <button type="button" onClick ={(event)=>props.deletePersonProp(personal)}className=" btn btn-md btn-outline-danger">Delete</button>
                <Link type="button"
                className="btn btn-md btn-outline-primary"
                to={`edit/${personal.id}`}>Edit</Link>
                           
                </div>
            </div>
            </div>
              ))}
        </div>
   
            )

  
}

export default PersonalList;
