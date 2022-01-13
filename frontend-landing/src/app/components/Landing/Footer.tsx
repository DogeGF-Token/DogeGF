import FooterIcon from "./FooterIcon";
import { FOOTER_LINKS } from "app/constants";

const Footer = () => {
  const handleClickScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="footer" className="container-fluid px-3 px-sm-5">
      <div className="footer-content container-fluid">
        <div className="row">
          <div className="col-12 col-lg-3 order-lg-1 px-0">
            <div className="panel-email d-flex justify-content-center align-items-center mb-lg-0">
              Contact us: dogegf@dogegf.com
            </div>
          </div>
          <div className="col-12 col-lg-6 order-lg-3 px-0">
            <div className="panel-social d-flex flex-wrap align-items-center justify-content-center mb-lg-0">
              {FOOTER_LINKS.map((footer, index) => (
                <FooterIcon
                  key={index}
                  link={footer.link}
                  target={footer.target}
                  children={footer.children}
                />
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-3 order-lg-2 px-0">
            <div className="panel-copyright d-flex justify-content-center align-items-center h-100">
              All Rights Reserved © DogeGF
            </div>
          </div>
        </div>
        <button
          className="btn btn-outline-dark p-0"
          onClick={handleClickScrollTop}
        >
          <i className="bi bi-arrow-up fs-5" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
