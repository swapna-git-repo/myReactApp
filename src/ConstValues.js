import React, { Component } from "react";
 
class ConstValues extends Component {
  render() {
    return (
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
    );
  }
}
 
export default ConstValues;