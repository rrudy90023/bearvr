import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Leap from 'leapjs'
import AFRAME from 'aframe'
import Orbit from 'aframe-orbit-controls-component-2'
import io from 'socket.io-client';
import Modelpath from '../assets/images/polarbear-obj.obj'

let socket = io.connect('https://bearvr.herokuapp.com/')
let swipeDirection;
let animation;

export default class Mirror extends Component {

	constructor(props) {
		super(props)
		this.state = {
			color: "color: white",
			rotate: "0 0 0",
			curPos: "0 0 0 ",
			orbitControls: null
		};
	}

	changeColor(klr) {
			this.setState({
				color: klr.mixer
			});
	}

	moveBear(pos){
		var xaxis = pos.cord;
		console.log('socket', xaxis);	
		this.orbit().handleGestMoveRotate(xaxis,null)
	}

	swipeBear(pos){
		var xaxis = Math.round(pos[0]);
		var yaxis = Math.round(pos[1]);
		var zaxis = pos[2];
		console.log(xaxis, pos[0]);	
		this.orbit().handleGestMoveRotate(xaxis,yaxis)

	}

	componentDidMount(){
		socket.on('loadx', data=> {
			this.moveBear(data);
		})

		socket.on('colorcatcher', data=> {
			console.log('colors colors', data.mixer)
			this.changeColor(data)
		})
	}

	orbit() {
		return this.refs.camera.components.orbitcontrols;
	}

	render(){
		console.log("Mirror")
		return (

            <a-scene vr-mode-ui="enabled: true" onClick={this.changeColor.bind(this)}>
                <a-entity
                    id="camera"
					ref="camera"
                    camera
                    position="0 0 5"
                    orbitcontrols="autoRotate: false; target: #target; enableDamping: true; dampingFactor: 0.125; rotateSpeed:0.15" mouse-cursor=""></a-entity>
					
					<a-assets>
						<a-asset-item id="model" src={Modelpath}></a-asset-item>
					</a-assets>


					<a-entity>
						<a-entity id="target" obj-model="obj: #model" scale=".2 .2 .2" position="0 -0.95 -0.41" rotation={this.state.rotate} material={this.state.color}></a-entity>
						<a-animation attribute="rotation" dur="1000" fill="forwards" from="" to="" repeat="0"></a-animation>	
					</a-entity>
			
                <a-sky color="#000000"></a-sky>
            </a-scene>
		
				

		);
	}
}






