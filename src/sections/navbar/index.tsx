import Logo from "./Logo";
import NavMenu from "./NavMenu";

function NavBar() {
  return (
    <nav className="flex justify-between items-center px-28 py-8">
      <Logo />
      <NavMenu />
    </nav>
  );
}

export default NavBar;
