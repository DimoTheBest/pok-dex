import React, { Component } from "react";

export default class PokemonCard extends Component {
  state = {
    name: "",
    imagUrl: "",
    pokemonIndex: "",
  };
  render() {
    const name = this.props.name;
    const url = this.props.url;
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
          <div className="card-header">{name}</div>
        </div>
      </div>
    );
  }
}
