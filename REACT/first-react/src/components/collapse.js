import React from "react";
import { a } from 'react-bootstrap';

class Collapse extends React.Component{
 constructor(){
     super()
     this.state={
         showContent:true
     }
 }
 showMore =()=>{
   this.setState({showContent: !this.state.showContent})
 }
   render(){
    return (
        <div>
        
            <a
              className="btn btn-primary w-100" onClick={this.showMore}
             
            >
              Link with href
            </a>
           {
               this.state.showContent ? (
                   <div className="collapse show">
                {this.props.children}</div>
               ): null 
                 } 
                 </div>
      )
   }

   
   
};

export default Collapse;
