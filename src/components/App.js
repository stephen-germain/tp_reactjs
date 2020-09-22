import React, { Component } from "react";
import Compteurs from "./compteurs";
import NavBar from "./navbar";
import ControllerInput from "./controllerInput";
import Footer from "./footer";

class App extends Component {

  constructor() {
    super();
    console.log("App - Constructor", this.props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    compteurs: [
      { id: 1, name: "", value: 0 },
      // { id: 2, value: 0 },
      // { id: 3, value: 0 },
    ],
  };

  handleDelete = (idCompteur) => {
    const compteurs = this.state.compteurs.filter(
      (compteur) => compteur.id !== idCompteur
    );
    this.setState({ compteurs });
  };

  handleReset = () => {
    const compteurs = this.state.compteurs.map((compteur) => {
      compteur.value = 0;
      return compteur;
    });
    this.setState({ compteurs });
  };

  handleIncrement = (compteur) => {
    const compteurs = [...this.state.compteurs];

    const index = compteurs.indexOf(compteur);
    compteurs[index].value++;
    this.setState({ compteurs });
  };

  handleDecrement = (compteur) => {
    const compteurs = [...this.state.compteurs];

    const index = compteurs.indexOf(compteur);
    compteurs[index].value--;
    this.setState({ compteurs });
  };

  handleSubmit = (e) => {
    console.log(`Name: ${this.state.name}`)
    e.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          // totalCompteurs={
          //   this.state.compteurs.filter((compteur) => compteur.value > 0).length
          // }
        ></NavBar>

        <main className="container">
          <Compteurs
            compteurs={this.state.compteurs}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          ></Compteurs>

          <ControllerInput
            onSubmit={this.handleSubmit}
          ></ControllerInput>
          
        </main>

        <Footer/>

      </React.Fragment>
    );
    
  }
}

export default App;
