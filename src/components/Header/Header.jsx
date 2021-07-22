import { Link } from 'react-router-dom';
import SHeader from './Style';

export default function Header() {
  return (
    <SHeader>
      <Link className="logo-name" to="/">
        <img className="logo" src="/img/Logo.png" alt="logo" />
        <div className="name">Georges FORTRY</div>
      </Link>
      <div className="menu">
        <ul className="barre">
          <a
            className="item"
            href="https://www.canva.com/design/DAEY6hRHTMc/g-QYAZXrcHps_ghevev6cg/view?utm_content=DAEY6hRHTMc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="blank"
            rel="noreferrer"
          >
            CV
          </a>
          <Link className="item" to="/projects">
            Portfolio
          </Link>
          <Link className="item" to="/career">
            A propos
          </Link>
          <a className="item" href="#contact">
            Contact
          </a>
        </ul>
      </div>
    </SHeader>
  );
}
