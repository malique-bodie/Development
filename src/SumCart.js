import React, { Component } from "react";

class SumCart extends Component {
  sum = 0;
  sumPrice = (list) => {
    this.sum = 0;
    var i;
    for (i = 0; i < list.length; i++) {
      this.sum += list[i].Price;
    }
    return this.sum;
  };

  render() {
    const style = {
      color: "white"
    };
    return (
      <h4 style={style}>
        <br />
        Cart Total is : ${this.sumPrice(this.props.list)} .00
      </h4>
    );
  }
}

export default SumCart;
