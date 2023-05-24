import { useContext } from "react";
import personalLogo from "../assets/logo.png";
import { modalContext } from "../Context/ModalContext";
import { Link } from "react-router-dom";
import { socialLinks } from "../Data/socialLinksData";

export const Footer = () => {
  const { toggleModal } = useContext(modalContext);

  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <figure onClick={() => window.scrollTo(0, 0)}>
            <img
              className="footer__logo--img click"
              src={personalLogo}
              alt=""
            />
          </figure>
          <div className="footer__social--list">
            {socialLinks.map((link) => {
              return (
                <a
                  key={link.id}
                  href={link.linkTo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                footer__social--link
                link__hover-effect
                link__hover-effect--white
                "
                >
                  {link.name}
                </a>
              );
            })}
            <Link
              to="/"
              onClick={toggleModal}
              className="
                footer__social--link
                link__hover-effect
                link__hover-effect--white
                "
            >
              Contact
            </Link>
          </div>
          <div className="footer__copyright">
            Copyright &copy; {new Date().getFullYear()} Kylie Arellano
          </div>
        </div>
      </div>
    </footer>
  );
};
