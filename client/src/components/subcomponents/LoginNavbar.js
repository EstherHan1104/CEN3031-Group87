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
                <Link className="nav-home" to="/">SmartyPants</Link>
                <ul className={this.state.isOpen ? 'nav-menu active' : 'nav-menu'}>
                    {Buttons.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}    
                                </Link>
                            </li>
                        )
                    })}                 
                </ul>
            </nav>
        );
    }
};

export default LoginNavbar;

