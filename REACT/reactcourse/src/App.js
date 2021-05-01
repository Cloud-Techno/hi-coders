import React, { Component } from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Navi from "./Navi";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find(item=>item.product.id === product.id)
    if(addedItem){
      addedItem.quantity+=1;
    }
    else{
      newCart.push({ product: product, quantity: 1 });
    }
     
    this.setState({ cart: newCart });
  };
  changeCategory = (item) => {
    this.setState({ currentCategory: item.categoryName });
    this.getProducts(item.id);
  };
  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let categoryInfo = { title: "CategoryList" };
    let productInfo = { title: "ProductList" };
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                addToCart={this.addToCart}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
