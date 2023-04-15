// dependencies
import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import logo from "../assets/logo.png";
import "../index.css"


// navbar header
function Header() {

  return (

    <Navbar
      fluid={true}
      className=""
      id="header"
      rounded={true}
    >
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="">
          20goto10
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/about">
          <span className="">
            About
          </span>
        </Navbar.Link>
        <Navbar.Link href="/songs">
          <span className="">
            Songs
          </span>
        </Navbar.Link>
        <Navbar.Link href="/artist">
          <span className="">
            Artist
          </span>
        </Navbar.Link>

        <Navbar.Link href="/contact">
          <span className="">
            Contact
          </span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default Header;
