import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink
          style={ { color: "blue" } }
          activeStyle={ { color: "darkblue" } }
          exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink
          style={ { color: "blue" } }
          activeStyle={ { color: "darkblue" } }
          exact to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink
          style={ { color: "blue" } }
          activeStyle={ { color: "darkblue" } }
          exact to="/directors">Directors</NavLink>
        </li>
        <li>
          <NavLink
          style={ { color: "blue" } }
          activeStyle={ { color: "darkblue" } }
          exact to="/actors">Actors</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
