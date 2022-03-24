import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #10002b;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: darkgray;
text-decoration: none
&.active {
	color: #06ad06;
}
`;

export const NavLogo = styled.div`
padding: 0 1rem;
box-shadow: 0 4px 10px -2px #252424;
display: flex;
align-items: center;
justify-content: space-between;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
`;
