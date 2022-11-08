import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

/**
 * 
 */

function NavBar(){
    return(
        <div>
            <Navbar>
                <NavLink exact to = "/" className="navbar-brand">
                    Yodlr
                </NavLink>
                <Nav>
                    <NavItem>
                        <NavLink to="/register">
                            Register
                        </NavLink>
                        <NavLink to="/admin-page">
                            Admin Page
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;