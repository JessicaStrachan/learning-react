import React from 'react';

class Title extends React.Component {
  render() {
    return <MyTitle text="&hearts; Jessica's React Learning &hearts;"/>
  }
}

const MyTitle = (props) =>
  <h1>{props.text}</h1> 

MyTitle.propTypes = {
	text(props, propName, component){
		// Console error messages if either no value or characters less than 6.
		if(!(propName in props)){
			return new Error(`missing ${propName}`)
		}
		if(props[propName].length < 6) {
			return new Error(`${propName} was too short`)
		}
	}
}

export default Title