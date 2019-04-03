import React, { Component } from 'react';


class AppHeader extends Component {
  render() {
    return (
            <header>
            <img id="logo" src="img/logo.png" alt="logo"/>
            <nav>
                <ul>

                    <li><a href="">Home</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Contact us</a></li>

                </ul>
            </nav>

            <input id="input" type="text"/>
            <button id="sog" type="submit">SEARCH</button>
        </header>
    );
  }
}

export default AppHeader;