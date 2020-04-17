import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Groceries from "./Groceries";
import Poojaitems from "./Poojaitems";
import Cosmetics from "./Cosmetics";
import Sanitary from "./Sanitary";
import logo from './th.jpg';
//import { ExcelExport } from '@progress/kendo-react-excel-export';
	// CommonJS format
//const { ExcelExport } = require('@progress/kendo-react-excel-export');

class Main extends Component {

render() {
	return (
		<HashRouter>
	<div className="App">
					<header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />         
                    </header>
                    
		<ul className="header">
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/Groceries">Groceries</NavLink></li>
			<li><NavLink to="/Poojaitems">Poojaitems</NavLink></li>
            <li><NavLink to="/Cosmetics">Cosmetics</NavLink></li>
			<li><NavLink to="/Sanitary">Sanitary</NavLink></li>
		</ul>
          <div className="content">
			<Route exact path="/" component={Home}/>
            <Route path="/Groceries" component={Groceries}/>
            <Route path="/Poojaitems" component={Poojaitems}/>
            <Route path="/Cosmetics" component={Cosmetics}/> 
             <Route path="/Sanitary" component={Sanitary}/>
          </div>
        </div>
</HashRouter>
    );
  }
}
 
export default Main;