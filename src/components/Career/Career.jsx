import SCareer from './Style';

export default function Career() {
  return (
    <SCareer>
      <h5>A PROPOS</h5>
      <div className="aboutme">
        <div className="image">
          <img src="/img/me.jpg" alt="" />
        </div>
        <div className="description">
          <div className="profil">
            <p>
              Après 17 ans d’expérience dans le domaine juridique, j’ai choisi
              de me reconvertir dans le développement web.
            </p>
            <p>
              {' '}
              La formation au sein de la Wild Code School m’a permis d’acquérir
              toutes les connaissances techniques et de les allier à mes
              qualités.
            </p>
            <p>
              {' '}
              Je souhaite désormais m’investir dans une entreprise dynamique et
              innovante, en apportant mes compétences, ma détermination et ma
              polyvalence.
            </p>
          </div>
          <div className="softskills">
            <div className="qualities">
              <h1>Mes qualités</h1>
              <p className="ecoute">Ecoute</p>
              <p className="rigueur">Rigueur</p>
              <p className="autonomie">Autonomie</p>
              <p className="fiabilite">Fiabilité</p>
              <p className="reflechi">Réfléchi</p>
              <p className="esprit">Esprit d’équipe</p>
              <p className="observateur">Observateur</p>
              <p className="analyse">Analyse</p>
            </div>
            <div className="interest">
              <h2>Mes centres d’intérêt</h2>
              <p>
                <span>Sport</span> Course à pied (Semi-marathons, Trails,
                Marathons), VTT, ancien arbitre de football
              </p>
              <p>
                <span>Cinéma</span>
              </p>
              <p>
                <span>Voyages</span> (New-York, Thaïlande, Tanzanie, Afrique du
                Nord, Nord, Europe...)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
        <h3>Experiences professionnelles</h3>
        <p>
          <span>Développeur Front end & Back end</span> stage au sein de la
          société Marjory de Septembre 2021 à Février 2022
        </p>
        <p> paragraphe à compléter</p>
        <p>
          <span>
            Clerc d’Huissier de Justice assermenté et habilité aux constats
          </span>{' '}
          au sein de la SCP KINGET-MARLIERE de Septembre 2003 à Mars 2021
        </p>
        <p>
          {' '}
          Informer la clientèle | Ecouter, dialoguer et négocier avec les
          parties | Rédiger les courriers et les actes juridiques | Réaliser des
          constats (dicter et rédiger) | Saisir des écritures comptables |
          Mettre à jour les actes informatiquement | Analyser et gérer des
          dossiers | Choisir les procédures | Signifier les actes sur le terrain
          | Effectuer la veille juridique
        </p>
      </div>
      <div className="formation">
        <h4>Formation</h4>
        <p>
          <span>WILD CODE SCHOOL</span> de Mars 2021 à Juillet 2021
        </p>
        <p>
          {' '}
          Apprentissage de HTML, CSS, JavaScript, React, NodeJS, ExpressJS,
          MySQL... mais aussi de Git, Github, la méthode Scrum...
        </p>
        <p>
          {' '}
          <span>Ecole Nationale de Procédure</span> de Septembre 2003 à Juin
          2005 (Formation en 2 ans aux procédures civiles d’exécution)
        </p>
        <p> Alternance au sein d’une étude d’Huissier de Justice</p>
        <p>
          {' '}
          <span>Faculté Libre de Droit de Lille</span> Obtention de la Maitrise
          de Droit Privé en 2003
        </p>
        <p> Cursus universitaire en droit privé</p>
      </div>
    </SCareer>
  );
}
