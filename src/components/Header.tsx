import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-4 bg-stone-500 h-12">
        <h1 className="flex-grow-0">
          <NavLink to={"/"}>Yarniverse</NavLink>
        </h1>
        <nav className="flex-grow">
          <ul className="flex flex-row gap-4 justify-end">
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
