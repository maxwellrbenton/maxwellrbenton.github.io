import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink className="navlink" to="/#">
        Home
      </NavLink>
      <NavLink className="navlink" to="/#projects">
        Projects
      </NavLink>
    </nav>
  );
}
export default Navigation;
