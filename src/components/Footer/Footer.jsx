import SFooter from './Style';

export default function Footer() {
  return (
    <SFooter>
      <div className="links">
        <div className="networks">
          <div className="github">
            <a href="https://github.com/GeorgesFORTRY" target="blank">
              <img src="/img/githubwhite.png" alt="Github" />
            </a>
          </div>
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/georges-fortry/"
              target="blank"
            >
              <img src="/img/linkedin.png" alt="linkedin" />
            </a>
          </div>
          <div className="mail">
            <a
              href="mailto:gfortry@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/enveloppe.png" alt="email" />
            </a>
          </div>
        </div>
        <div className="aboutme">
          <p>Georges Fortry</p>
          <p>(+33)6.46.31.09.95</p>
          <p>
            <a
              href="mailto:gfortry@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              gfortry@hotmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="copyright">© Georges Fortry 2021</div>
    </SFooter>
  );
}
