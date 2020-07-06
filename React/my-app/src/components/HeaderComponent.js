import React, { Component } from "react";
import { Navbar, NavbarBrand , Jumbotron } from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <React.Fragment>
            <Navbar dark color="dark">
                 <div className="container">
                <NavbarBrand href="/">Food</NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="cointainer">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Food</h1>
                            <p>We sell good food.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            </React.Fragment>

        );
    }
}

export default Header;
