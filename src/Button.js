import React from 'react';

class Button extends React.Component {
  render() {
    return <MyButton>I <Heart /> react</MyButton>
  }
}

const MyButton = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

export default Button