import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponents";
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">PIC</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
