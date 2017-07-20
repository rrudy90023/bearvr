import React, { Component } from 'react';

import styles from '../assets/stylesheets/base.scss'

export default class Intro extends Component {
	render() {

		return (
			<div style={{'margin':'0 auto', 'fontSize':'20px', 'width':'70%', 'position':'relative', 'textAlign':'center'}}>
				<h3>Go to:</h3>
				<h2 style={{'wordBreak':'break-all'}}>
				<a href="http://labyrinth3d.herokuapp.com/#/floor">http://labyrinth3d.herokuapp.com/#/floor</a>
				</h2>

				<h3>on your desktop browser to view the labyrinth</h3>
				<h3>Go to:</h3>

				<h2 style={{'wordBreak':'break-all'}}>
				<a href="http://labyrinth3d.herokuapp.com/#/controller"> http://labyrinth3d.herokuapp.com/#/controller</a>
				</h2>

				<h3>on your mobile browser to use phone as a controller</h3>
			</div>
		);
	}
}
