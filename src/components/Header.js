// dependencies
import React from "react";
import { Navbar } from "flowbite-react";
import logo from "../assets/logo.png";
import "../index.css"


// navbar header
function Header() {

  return (

    <Navbar
      fluid={true}
      className="header bg-transparent md:h-auto md:fixed z-50 md:top-0"
      id="header"
      rounded={true}
    >
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="">
          20goto10 家
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/about">
          <span className="">
            About 約
          </span>
        </Navbar.Link>
        <Navbar.Link href="/songs">
          <span className="">
            Songs 曲
          </span>
        </Navbar.Link>
        <Navbar.Link href="/artist">
          <span className="">
            Artist アーティスト
          </span>
        </Navbar.Link>

        <Navbar.Link href="/contact">
          <span className="">
            Contact コンタクト
          </span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default Header;
