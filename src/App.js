import React, { Component } from "react";
import FilteredList from "./FilteredList";
import "bootstrap/dist/css/bootstrap.min.css";

const productList = [
  {
    id: 1,
    Image:
      "https://hivemodern.com/public_resources/full/le-corbusier-lc1-sling0chair-cassina-1.jpg",
    Name: "LC1 Sling Chair",
    Designer: "Le Corbusier",
    Type: "chair",
    Price: 1059
  },
  {
    id: 2,
    Image:
      "https://hivemodern.com/public_resources/full/le-corbusier-lc4-chaise-lounge-cassina-1.jpg",
    Name: "LC4 Chaise Lounge",
    Designer: "Le Corbusier",
    Type: "chaise",
    Price: 1297
  },
  {
    id: 3,
    Image:
      "https://www.smow.com/pics/ca-003-000/cassina-lc2-sofa-2-sitzer-galerie-01_zoom.jpg",
    Name: "LC2 2 Seat Sofa",
    Designer: "Le Corbusier",
    Type: "sofa",
    Price: 1899
  },
  {
    id: 4,
    Image:
      "https://www.knoll.com/static_resources/images/products/catalog/eco/parts/250L/250L-C_~_(VO)_VOBLK_FZ.jpg",
    Name: "Barcelona Chair",
    Designer: "Ludwig Mies van der Rohe",
    Type: "chair",
    Price: 5507
  },
  {
    id: 5,
    Image:
      "https://www.smow.com/pics/kn-003-000/knoll-intl-barcelona-liege-volo-black_zoom.jpg",
    Name: "Barcelona Day Bed",
    Designer: "Ludwig Mies van der Rohe",
    Type: "chaise",
    Price: 9623
  },
  {
    id: 6,
    Image:
      "https://www.northdeco.fr/muebles-de-diseno/fotos/silla-barcelona-2-plazas-piel-italiana-negra-1550232892.jpg",
    Name: "Barcelona 2 Seat Sofa",
    Designer: "Ludwig Mies van der Rohe",
    Type: "sofa",
    Price: 1499
  },
  {
    id: 7,
    Image:
      "https://cdn.connox.co.uk/m/100030/152323/media/Knoll/Wassily-Stuhl/Wassily-stuhl-schwarz-frei.jpg",
    Name: "Wassily Chair",
    Designer: "Marcel Breuer",
    Type: "chair",
    Price: 2459
  },
  {
    id: 8,
    Image:
      "https://d32dm0rphc51dk.cloudfront.net/uqdQ2IqgK8cpVo1VJYGyWA/large.jpg",
    Name: "Birch Chaise Lounge",
    Designer: "Marcel Breuer",
    Type: "chaise",
    Price: 5829
  },
  {
    id: 9,
    Image:
      "https://a.1stdibscdn.com/marcel-breuer-f40-cantilever-settee-for-sale/archivesE/upload/3663232/f_105329711524499284100/marcel_2_org_master.jpg?width=1500",
    Name: "F-40 Cantilever Sofa",
    Designer: "Marcel Breuer",
    Type: "sofa",
    Price: 7485
  },
  {
    id: 10,
    Image:
      "https://hivemodern.com/public_resources/full/florence-knoll-relaxed-lounge-chair-knoll-1.jpg",
    Name: "Relaxed Lounge Chair",
    Designer: "Florence Knoll",
    Type: "chair",
    Price: 3929
  },
  {
    id: 11,
    Image:
      "https://immagini.designbest.com/immaginiprodotti/chaise_longue/big/276-chaiselongue-16431-b-2.jpg",
    Name: "Relaxed Bench",
    Designer: "Florence Knoll",
    Type: "chaise",
    Price: 3154
  },
  {
    id: 12,
    Image:
      "https://moletamunro.com/var/images/product/850.850/Knoll_Florence_Two_Seater_Sofa%20-3.jpg",
    Name: "Relaxed 2 Seat Sofa",
    Designer: "Florence Knoll",
    Type: "sofa",
    Price: 6278
  }
];

class App extends Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "#e3e4eo",
      padding: "10px"
    };
    return (
      <div style={mystyle}>
        <FilteredList list={productList} />
      </div>
    );
  }
}

export default App;
