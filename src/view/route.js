import React from 'react'
import {Router, Switch, Route} from 'react-router'
import Home from '../view/home/Home'

function Root({history}) {
	return(
		<Router history={history}>
		 	<Switch>
                <Route path="/" component={Home} />    
            </Switch>
       	</Router>
		)
}


export default Root