import { LogoImg, HEADER_LINKS } from "app/constants";
import { BurgerIcon, CloseIcon } from "..";
import NavItem from "./NavItem";
import { useNavbarOpen } from "app/hooks";

const NavBar = () => {
  const [navbarOpen] = useNavbarOpen(false);

  return (
    <nav
      id="header"
      className="navbar navbar-expand-lg navbar-light position-sticky sticky-top bg-white"
    >
      <div className="navbar-container container-xxl h-100">
        <a className="navbar-brand p-0 h-100" href="#home">
          <div className="d-flex align-items-center h-100">
            <img src={LogoImg} alt="dogegf-logo" />
          </div>
        </a>
        <button
          className="navbar-toggler p-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          {!navbarOpen && <BurgerIcon />}
          {navbarOpen && <CloseIcon />}
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto me-xxl-0 mb-4 mb-lg-0">
            {HEADER_LINKS.map((menu, index) => (
              <NavItem menu={menu.menu} link={menu.link} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
