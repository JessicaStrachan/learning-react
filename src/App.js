import React from 'react';

// Class components can have states, stateless cannot.
class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'Change my value in the inputs below',
    }
  }

  update( e ){
    this.setState({txt: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1> 
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}

const Widget = (props) =>
  <input type="text" onChange={props.update} placeholder="Change value above"/>


export default Button