import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/card";
import Collapse from "./components/collapse";
const App = () => {
  return (
    <div className="container">
    <div className="row">
    <div className="card-group w-100">  
    <div className="col">  
      <Collapse href="collapseExample1">
        <Card
          cardTitle="Card 2 "
          cardText="Lorem Ipsum Text 1"
          updatedTime="2"
          image= "https://picsum.photos/id/1/200/300"/>
        </Collapse>
        </div>
   
      <div className="col">
      <Collapse href="collapseExample2">
        <Card
          cardTitle="Card 2 "
          cardText="Lorem Ipsum Text 2"
          updatedTime="2"
          image= "https://picsum.photos/id/10/200/300"/>
        </Collapse>
      </div>
      <div className="col"><Collapse href="collapseExample3">
        <Card
          cardTitle="Card 3s"
          cardText="Lorem Ipsum Text 3"
          updatedTime="3"
          image= "https://picsum.photos/id/13/200/300"/>
        </Collapse>
        </div>
        </div>
        </div>  
     
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
