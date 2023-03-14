import './Header.css';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <>
    <header>
      <h1>
        <Link to="/">Rick & Morty</Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
      <Outlet />
    </>
  )
}

export default Header;