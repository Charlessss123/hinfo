import React from "react";
import logo from './blob:https://web.whatsapp.com/91a0fb04-32da-4395-93ec-66e23e238c96';

console.log(logo); // /blob:https://web.whatsapp.com/91a0fb04-32da-4395-93ec-66e23e238c96

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>

		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
