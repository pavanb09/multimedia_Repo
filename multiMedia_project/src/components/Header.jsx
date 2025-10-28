import React from "react";

export default class Header extends React.Component{

    render(){
        return(
            <header className="nav header">
        <div className="icon-part">
          <h2>🍔 Burger Shop</h2>
        </div>
        <nav className="nav-buttons">
           <a href="#home"><h3>Home</h3></a>
          <a href="#about"><h3>About</h3></a>
          <a href="#contact"><h3>Contact</h3></a>
        </nav>
      </header>
        )
    }
}