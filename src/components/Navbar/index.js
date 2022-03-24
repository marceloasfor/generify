import React from "react";
import { Nav, NavLink, NavMenu, NavLogo } from "./NavbarElements";
import logo from "../../notas-musicais.png"

const Navbar = () => {
  return (
      <>
      <Nav>
        <NavLogo>
        <img 
          src={logo}
          style={{
            width: "40px", 
            height: "40px",
            paddingRight: "10px"
          }}
          alt="Generify Music Logo"/>
        <b className="main-font">Generify</b>
        </NavLogo>
        <NavMenu>
        <NavLink to="/" >
            Início
        </NavLink>
        <NavLink to="/faq">
            FAQ
        </NavLink>
        </NavMenu>
      </Nav>
      </>
  );
}

export default Navbar;