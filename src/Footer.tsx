import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-stone-500 font-mono">
        <div className="text-sm">
          <div>
            <Link to={"/contact"}>Kontakt</Link>
          </div>
          <div>
            <Link to={"/about"}>Om oss</Link>
          </div>
          <div>
            <Link to={"/projekt"}>Projekt</Link>
          </div>
        </div>
        <h1 className="text-center text-1xl pb-2">Yarniverse</h1>
      </footer>
    </>
  );
}

export default Footer;
