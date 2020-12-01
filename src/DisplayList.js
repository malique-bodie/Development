import React, { Component } from "react";
import { Button } from "react-bootstrap";
import SumCart from "./SumCart";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";

class DisplayList extends Component {
  state = {
    cart: []
  };

  cartList = [];

  addItemToCart = (item) => {
    this.cartList.push(item);
    this.setState({
      cart: this.cartList
    });
  };

  removeItemFromCart = (item) => {
    for (var i = 0; i < this.cartList.length; i++) {
      if (this.cartList[i] === item) {
        this.cartList.splice(i, 1);
        break;
      }
    }
    this.setState({
      cart: this.cartList
    });
  };

  render() {
    const card = {
      height: "525px",
      backgroundColor: "#7F867B",
      color: "#E3E4E0",
      marginTop: "15px",
      paddingTop: "5px",
      paddingBottom: "25px",
      paddingLeft: "5px",
      paddingRight: "5px"
    };

    const media = {
      height: "350px"
    };

    const paper = {
      backgroundColor: "#C7C7BB",
      paddingLeft: "25px",
      paddingRight: "25px"
    };

    return (
      <>
        <Grid
          container
          spacing={5}
          direction="row"
          justify="space-around"
          alignItems="baseline"
          className="card-grid"
        >
          {this.props.list.map((item) => (
            <Grid item xs={4} key={item.id}>
              <Card style={card}>
                <CardMedia image={item.Image} style={media} />
                <CardContent>
                  <Typography>{item.Name}</Typography>
                  <Typography variant="body2" component="p">
                    {item.Designer}
                  </Typography>
                  <br />
                  <Typography variant="body2" component="p">
                    ${item.Price}.00{" "}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    eventkey={item.id}
                    onClick={() => this.addItemToCart(item)}
                    variant="dark"
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <br />
        <br />
        <Paper style={paper}>
          <h2 style={{ paddingTop: "25px", color: "white" }}>Cart</h2>
          <Grid
            container
            spacing={5}
            direction="row"
            justify="flex-start"
            alignItems="baseline"
          >
            {this.state.cart.map((item) => (
              <Grid item xs={4} key={item.id}>
                <Card style={card}>
                  <CardMedia image={item.Image} style={media} />
                  <CardContent>
                    <Typography>{item.Name}</Typography>
                    <Typography variant="body2" component="p">
                      {item.Designer}
                    </Typography>
                    <Typography variant="body2" component="p">
                      ${item.Price}.00{" "}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      eventkey={item.id}
                      onClick={() => this.removeItemFromCart(item)}
                      variant="danger"
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <br />
          <SumCart list={this.state.cart} />
          <br />
          <br />
        </Paper>
      </>
    );
  }
}

export default DisplayList;
