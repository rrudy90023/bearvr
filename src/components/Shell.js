import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router-dom'
import Mirror from './Mirror'
import Fixed from './Fixed'
import io from 'socket.io-client';
import Intro from './Intro'

export default class Shell extends Component {

	render() {
		return (
			<div style={{"position": "absolute", "width":"100%", "height":"100%"}}>
				{(this.props.location.hash === "#/intro") ?
				<Intro /> :
				(this.props.location.hash === "#/fixed") ?
				<Fixed /> :
				(this.props.location.hash === "#/mirror") ?
				<Mirror /> :
				null
				}
			</div>
		);
	}
}