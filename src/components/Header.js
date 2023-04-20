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
      className="header bg-transparent hover:bg-transparent md:h-auto md:fixed z-50 md:top-0"
      id="header"
      rounded={true}
    >
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="">
          20goto10
        </span>
      </Navbar.Brand>
      <Navbar.Toggle className="bg-transparent hover:bg-cyan-300/50"/>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="bg-transparent hover:bg-cyan-300/50 rounded-lg border-b-0">
          <span>
            Home 家
          </span>
        </Navbar.Link>
        <Navbar.Link href="/songs" className="bg-transparent hover:bg-cyan-300/50 rounded-lg border-b-0">
          <span>
            Songs 曲
          </span>
        </Navbar.Link>
        <Navbar.Link href="/artist" className="bg-transparent hover:bg-cyan-300/50 rounded-lg border-b-0">
          <span>
            Artist アーティスト
          </span>
        </Navbar.Link>

        <Navbar.Link href="/contact" className="bg-transparent hover:bg-cyan-300/50 rounded-lg border-b-0">
          <span>
            Contact コンタクト
          </span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default Header;
