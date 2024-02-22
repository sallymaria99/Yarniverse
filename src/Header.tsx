import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-4 bg-stone-500 h-12">
        <h1>Yarniverse</h1>
        <nav>
          <ul className="flex flex-row gap-4">
            <li>
              <Link to={"/about"}>Om oss</Link>
            </li>
            <li>
              <Link to={"/projekt"}>Projekt</Link>
            </li>
            <li>
              <Link to={"/tutorials"}>Tutorials</Link>
            </li>
            <li>
              <Link to={"/kontakt"}>Kontakt</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
