import React, { Component } from "react";
import { Table,Button } from "reactstrap";
export default class ProductList extends Component {
 
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <Table>
          <thead>
            <tr>
               <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.productName}</td>
                <td>{item.unitPrice}</td>
                <td>{item.quantityPerUnit}</td>
                <td>{item.unitsInStock}</td>
                <td> <Button onClick={()=>this.props.addToCart(item)} color="info">add</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
