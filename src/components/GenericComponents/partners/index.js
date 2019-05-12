import React from 'react';
import './partnersStyle.scss';


class Partners extends React.Component {
	render() {
		return (
			<Tiles data={this.props.data} />
		);
	}
}

class Tiles extends React.Component {
	render() {
		// Create tile for each item in data array
		// Pass data to each tile and assign a key
		return (
			<div className="tiles">
				{this.props.data.map((data) => {
					return <Tile data={data} key={data.id} />
				})}
			</div>
		);
	}
}

class Tile extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				open: false,
				mouseOver: false
			};
			// Bind properties to class instance
			this._clickHandler = this._clickHandler.bind(this);
			this._mouseEnter = this._mouseEnter.bind(this);
			this._mouseLeave = this._mouseLeave.bind(this);
		}
		// Event handlers to modify state values
	_mouseEnter(e) {
		e.preventDefault();
		if (this.state.mouseOver === false) {
			console.log(this.props.data.name);
			this.setState({
				mouseOver: true
			})
		}
	}
	_mouseLeave(e) {
		e.preventDefault();
		if (this.state.mouseOver === true) {
			this.setState({
				mouseOver: false
			})
		}
	}
	_clickHandler(e) {
		e.preventDefault();
		console.log(this.props.data.website);
		window.open(this.props.data.website);
		this._mouseLeave();
		if (this.state.open === false) {
			this.setState({
				open: true
			});
		} else {
			this.setState({
				open: false
			});
		}
	}

	render() {
		// Modify styles based on state values
		let tileStyle = {};
		let headerStyle = {};
		let zoom = {};
		// When tile clicked
		if (this.state.open) {
			tileStyle = {
				width: '62vw',
				height: '62vw',
				position: 'absolute',
				top: '50%',
				left: '50%',
				margin: '0',
				marginTop: '-31vw',
				marginLeft: '-31vw',
				boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
				transform: 'none'
			};
		} else {
			tileStyle = {
				width: '30vw',
				height: '30vw'
			};
		}

		return (
			<div className="tile container" 
			onMouseEnter={this._mouseEnter}
			onMouseLeave={this._mouseLeave}
			
			>
			
				<img
					
					src={this.props.data.image}
					alt={this.props.data.name}
					style={tileStyle}
					
				/>
				 { this.state.mouseOver && <button className="btn" onClick={this._clickHandler}>Website</button>}

			</div>
		);
	}
}


export default (Partners)
