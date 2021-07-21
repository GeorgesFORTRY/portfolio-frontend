import { Link } from 'react-router-dom';
import SAbout from './Style';

export default function About() {
  return (
    <SAbout>
      <div className="career">
        <img className="imgcoding" src="/img/coding-man.jpg" alt="coding-man" />
        <div className="textcareer">
          <h1>Mon parcours</h1>
          <p>
            Après 17 ans d’expérience dans le domaine juridique, j’ai choisi de
            me reconvertir dans le développement web.
          </p>
          <p>
            {' '}
            La formation au sein de la Wild Code School m’a permis d’acquérir
            toutes les connaissances techniques et de les allier à mes qualités
            que sont le sens de l’observation, l’écoute, la rigueur ou
            l’autonomie.
          </p>
          <p>
            {' '}
            Je souhaite désormais m’investir dans une entreprise dynamique et
            innovante, en apportant mes compétences, ma détermination et ma
            polyvalence.
          </p>
          <Link className="btn-career" to="/career">
            En savoir plus...
          </Link>
        </div>
      </div>
      <div className="project">
        <div className="textproject">
          <h2>Mes réalisations</h2>
          <p>
            Dans le cadre de ma formation à la Wild Code School de Lille, j’ai
            pu réaliser de nombreux projets de groupe ainsi que des travaux en
            autonomie.
          </p>
          <p>
            {' '}
            J’ai, ainsi, participé à la création d’un site de e-commerce (HTML,
            CSS, JS Vanilla), à la création d’un quiz de personnalité sur le
            thème des super-héros (ReactJS) ainsi qu’à la création d’un site
            pour l’association Edtech Hauts-de-France (ReactJS, NodeJS){' '}
          </p>
          <p>
            {' '}
            Lors de deux hackathons, j’ai contribué à la création d’une réplique
            du site Netflix ainsi qu’un projet en partenariat avec Fiverr.
          </p>
          <Link className="btn-project" to="/project">
            En savoir plus...
          </Link>
        </div>
        <img className="imgproject" src="/img/project.jpg" alt="project" />
      </div>
    </SAbout>
  );
}
