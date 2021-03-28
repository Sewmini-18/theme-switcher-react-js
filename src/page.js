import React, { Component } from 'react';
import './page.css'

class Page extends Component {

    componentDidMount() {
        document.title = "Home Page";
    }

    render() {
        return (
            <div>
                <div className="topnav">
                    <a className="active" href="#home">Home</a>
                    <a href="#profile">Profile</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                    <a href="#logout"  style={{float:'right'}}>Logout</a>
                </div>
                <div class="footer">
  <p>Footer</p>
</div>
            </div>
        );
    }
}

export default Page;