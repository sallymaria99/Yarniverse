import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1 className="flex-grow-0">
          <NavLink to={"/"}>Yarniverse</NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to={"/about"}>Om oss</NavLink>
            </li>
            <li>
              <NavLink to={"/projekt"}>Projekt</NavLink>
            </li>
            <li>
              <NavLink to={"/tutorials"}>Tutorials</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
