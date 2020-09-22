import React, { Component } from "react";

class ControllerInput extends Component {
    constructor(props) {
        super(props);
        this.state = { id: props, name: "", value: "" };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
      }
    
      handleChange = (event) => {
        this.setState({name: event.target.value});
      }

      handleSubmit = (e) => {
        console.log(`Name: ${this.state.name}`)
        e.preventDefault();
      }
    

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              vetêments :
              <input type="text" value={this.state.name} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        );
      }
}
 
export default ControllerInput;