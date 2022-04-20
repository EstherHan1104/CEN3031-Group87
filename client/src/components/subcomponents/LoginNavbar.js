import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Buttons } from './MenuItems';
import '../../css/Navbar.css';

class LoginNavbar extends Component {
    state = { isOpen: false }

    onClick = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    
    render() {
        return (
            <nav className="NavbarItems">
                <Link className="nav-home" to="/login">SmartyPants</Link>
                <ul className={this.state.isOpen ? 'nav-menu active' : 'nav-menu'}>
                    {Buttons.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url} 
                                target={item.title === 'Github' ? '_blank' : ''}>
                                    {item.title}    
                                </a>
                            </li>
                        )
                    })}                 
                </ul>
            </nav>           
        );
    }
};

export default LoginNavbar;

