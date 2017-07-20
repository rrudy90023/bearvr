import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PropTypes from 'prop-types';
import Mirror from './Mirror'
import Fixed from './Fixed'
import Shell from './Shell'
import Intro from './Intro'

const App = (props) => {

return (
	<div>
		<Router >

			<div>
		      <Switch>
		      	  <Route exact path="/" component={Shell}/>
			      <Route exact path="/fixed" component={Shell}/>
			      <Route exact path="/mirror" component={Shell}/>
			      <Route exact path="/intro" component={Shell}/>
		      </Switch>
		    </div>

		</Router>
	</div>
	)

}

export default App