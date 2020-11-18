import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (props) => {
console.log(props)

  return (
    <div>
      <Nav pills>
        <NavItem>
          <NavLink href="#" onClick={()=>props.lordAPI("movie")}>Movies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={()=>props.lordAPI("book")}>Books</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#" onClick={()=>props.lordAPI("character")}>Characters</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;