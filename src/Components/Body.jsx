import "../index.css";
import { modalContext } from "../Context/ModalContext";
import { socialLinks } from "../Data/socialLinksData";
import Typewriter from "typewriter-effect";
import { useContext, useCallback } from "react";
import { stack } from "../Data/stackData";
import Marquee from "react-fast-marquee";

export const Body = () => {
  const { toggleModal } = useContext(modalContext);

  const moveBackground = useCallback((event) => {
    const scaleFactor = 1 / 20;
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shapes[i].style.transform = `translate(${x * boolInt}px, ${
        y * boolInt
      }px`;
    }
  }, []);

  const TypingEffect = () => {
    return (
      <Typewriter
        options={{
          loop: true,
          autoStart: true,
          strings: [
            'with a strong passion for building web applications with <strong><span style="color : #f06449;">great user experiences.</></strong>',
          ],
        }}
      />
    );
  };

  const options = {
    pauseOnHover: true,
    speed: 60,
    gradient: false,
  };

  return (
    <>
      <section id="body" onMouseMove={(event) => moveBackground(event)}>
        <div className="container about__container">
          <div className="row">
            <h1 data-aos="fade-in" className="section__title">
              <div className="orange">About</div> me
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="100"
              className="header__para"
            >
              I'm a <b className="orange">frontend software engineer </b>
              {TypingEffect()}
              <br />
              Here's a bit more{" "}
              <b className="click orange" onClick={toggleModal}>
                about me.
              </b>
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="social__list"
            >
              {socialLinks.map((link) => {
                return (
                  <a
                    key={link.id}
                    href={link.linkTo}
                    target="_blank"
                    rel="noreferrer"
                    className="social__link click"
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>

            <div data-aos="fade-in" className="modal__languages">
              <Marquee {...options}>
                {stack.map((tech) => {
                  return (
                    <figure className="modal__language" key={tech.id}>
                      <img
                        className="model__language--img"
                        src={tech.image}
                        alt={tech.name}
                        title={tech.name}
                      />
                    </figure>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
