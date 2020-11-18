import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (props) => {


  return (
    <div>
      <Nav pills>
        <NavItem>
          <NavLink href="#">Movies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Books</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Characters</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;