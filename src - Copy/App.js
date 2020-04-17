import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { FaAlignRight } from 'react-icons/fa';
import logo from './th.jpg';
import './App.css';

export default class App extends Component {
    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
    render() {
		const li = [
            {
                link: "/",
                text:"Groceries"
            },
            {
                link: "/PoojaItems/",
                text:"Pooja Items"
            },
            {
                link: "/Cosmetics/",
                text:"Cosmetics"
            },
            {
                link: "/Sanitary/",
                text:"Sanitary"
            }
 ];
        return (
        <>

<div className="mainApp">
            <div className="App">
                    <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
          
                    </header>
            </div>
      
              <div className="navBar">
                    <button onClick={this.Toggle}>
                      
                    </button>
                    <ul className={this.state.toggle ? "links show-nav" : "links"}>
                        {
                            li.map((objLink, i) => {
                                return ( <li><a href={objLink.link}>{objLink.text}</a></li> )
                            })
                        }
                    </ul>
                    {this.props.children}
              </div>
</div>
          </>
        
        );
    }
}


class Groceries extends React.Component {
   render() {
      return (
         <div>
            <h1>Groceries...</h1>
         </div>
      )
   }
}
export default Groceries;

class PoojaItems extends React.Component {
   render() {
      return (
         <div>
            <h1>Pooja Items...</h1>
         </div>
      )
   }
}
export default PoojaItems;

class Cosmetics extends React.Component {
   render() {
      return (
         <div>
            <h1>Cosmetics...</h1>
         </div>
      )
   }
}
export default Cosmetics;


class Sanitary extends React.Component {
   render() {
      return (
         <div>
            <h1>Sanitary...</h1>
         </div>
      )
   }
}
export default Sanitary;


ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "Groceries" component = {Groceries} />
         <Route path = "PoojaItems" component = {PoojaItems} />
         <Route path = "Cosmetics" component = {Cosmetics} />
         <Route path = "Sanitary" component = {Sanitary}/>
      </Route>
   </Router>
), document.getElementById('app'))

