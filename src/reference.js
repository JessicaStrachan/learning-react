import React from 'react';

class Reference extends React.Component {
	constructor(){
		super();
		this.state = {a: ''}
	}
	update(e){
		this.setState({
			a: this.a.refs.input.value,
			b: this.b.refs.input.value,
		})
	}

	render() {
		return (
			<div>
				<h2>Use React Ref to get a reference to specific components</h2>
				<Input
				ref={ component => this.a = component}
					update={this.update.bind(this)}
				/> {this.state.a}
				<hr />
				<Input
				ref={ component => this.b = component}
					update={this.update.bind(this)}
				/> {this.state.b}
			</div>
		)
	}
}

class Input extends React.Component {
	render() { 
		return <div><input ref="input" type="text" onChange={this.props.update} /></div>
	}
}

export default Reference
