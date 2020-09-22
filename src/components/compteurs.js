import React, { Component } from "react";

import Compteur from "./compteur";

class Compteurs extends Component {
    render() {
        return (
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.props.onReset}
                    >
                    Reset +
                </button>
                {this.props.compteurs.map((compteur) => (
                    <Compteur
                        key={compteur.id}
                        onDelete={this.props.onDelete}
                        onDecrement={this.props.onDecrement}
                        compteur={compteur}
                        onIncrement={this.props.onIncrement}
                    />
                ))}
            </div>
        );
    }
    
}

export default Compteurs;
