export interface NavItemData {
  menu: string;
  link: string;
}

const NavItem = ({ menu, link }: NavItemData) => {
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        href={link}
        target={link.startsWith("http") ? "_blank" : "_self"}
        rel="noreferrer noopener"
      >
        {menu}
      </a>
    </li>
  );
};

export default NavItem;