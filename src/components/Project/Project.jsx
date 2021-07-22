import PropTypes from 'prop-types';
import SProject from './Style';

export default function Project({
  label,
  imgSrc,
  imgAlt,
  subtext,
  date,
  link,
}) {
  return (
    <SProject>
      <article className="illustration">
        <img src={imgSrc} alt={imgAlt} />
        <div className="datename">
          <h2>
            <span>Projet :</span> {label}
          </h2>
          <h3>{date}</h3>
        </div>
      </article>
      <article className="description">
        <div className="text">{subtext}</div>
        <a className="link" href={link} target="_blank" rel="noreferrer">
          Lien Github
        </a>
      </article>
    </SProject>
  );
}

Project.propTypes = {
  label: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
