import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import DisplayList from "./DisplayList";
import { AppBar } from "@material-ui/core";

class FilteredList extends Component {
  state = {
    Designer: "All",
    Type: "All",
    Sort: "All"
  };

  onSelectFilterDesigner = (event) => {
    this.setState({
      Designer: event
    });
  };

  onSelectFilterType = (event) => {
    this.setState({
      Type: event
    });
  };

  onSelectSort = (event) => {
    this.setState({
      Sort: event
    });
  };

  sortList = (list) => {
    if (this.state.Sort === "All") {
    } else if (this.state.Sort === "low") {
      list.sort(function (a, b) {
        return a.Price - b.Price;
      });
    } else if (this.state.Sort === "high") {
      list.sort(function (a, b) {
        return b.Price - a.Price;
      });
    }
    return list.filter(this.matchesFilterDesigner);
  };

  matchesFilterType = (item) => {
    if (this.state.Type === "All") {
      return this.matchesFilterDesigner;
    } else if (this.state.Type === item.Type) {
      return true;
    } else {
      return false;
    }
  };

  matchesFilterDesigner = (item) => {
    if (this.state.Designer === "All") {
      return this.matchesFilterType(item);
    } else if (this.state.Designer === item.Designer) {
      return this.matchesFilterType(item);
    } else {
      return false;
    }
  };

  render() {
    const paper = {
      padding: "25px"
    };
    return (
      <>
        <AppBar position="static" style={{ backgroundColor: "#7F867B" }}>
          <h1 style={{ paddingLeft: "25px" }}>Furniture Archive</h1>
          {/* //</AppBar> */}
          <div style={paper}>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand>Designer : </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Item>
                  <Nav.Link
                    eventKey="All"
                    onSelect={this.onSelectFilterDesigner}
                  >
                    All
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Le Corbusier"
                    onSelect={this.onSelectFilterDesigner}
                  >
                    Le Corbusier
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Ludwig Mies van der Rohe"
                    onSelect={this.onSelectFilterDesigner}
                  >
                    Ludwig Mies van der Rohe
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Marcel Breuer"
                    onSelect={this.onSelectFilterDesigner}
                  >
                    Marcel Breuer
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Florence Knoll"
                    onSelect={this.onSelectFilterDesigner}
                  >
                    Florence Knoll
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>

            <Navbar bg="light" expand="lg">
              <Navbar.Brand>Type : </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Item>
                  <Nav.Link eventKey="All" onSelect={this.onSelectFilterType}>
                    All
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="chair" onSelect={this.onSelectFilterType}>
                    Chair
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="chaise"
                    onSelect={this.onSelectFilterType}
                  >
                    Chaise
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sofa" onSelect={this.onSelectFilterType}>
                    Sofa
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>

            <Navbar bg="light" expand="large">
              <Nav className="mr-auto">
                <Navbar.Brand>Sort by Price : </Navbar.Brand>
                <NavDropdown title="Select" id="collasible-nav-dropdown">
                  <NavDropdown.Item eventKey="low" onSelect={this.onSelectSort}>
                    Lowest to Highest
                  </NavDropdown.Item>
                  <br />
                  <NavDropdown.Item
                    eventKey="high"
                    onSelect={this.onSelectSort}
                  >
                    Highest to Lowest
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar>
          </div>
        </AppBar>
        <DisplayList list={this.sortList(this.props.list)} />
      </>
    );
  }
}

export default FilteredList;
