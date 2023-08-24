import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/prologue" activeStyle>
                        Prologue
                    </NavLink>
                    <NavLink to="/self-study" activeStyle>
                        Self Study
                    </NavLink>
                    <NavLink to="/turning-18" activeStyle>
                        Turning 18
                    </NavLink>
                    <NavLink to="/gap-year" activeStyle>
                        Gap Year
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;