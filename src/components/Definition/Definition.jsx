import SDefinition from './Style';

export default function Definition() {
  return (
    <SDefinition>
      <div className="front-end">
        <img className="imgfront" src="/img/frontend.jpg" alt="frontend" />
        <div className="textfront">
          <h1>Front end</h1>
          <p>
            Le <span>Front End</span> c’est la partie du code qui est reçue par
            le client. Le client c’est notre navigateur Web. Il s’agit des
            éléments du site web que l’utilisateur aperçoit à l’écran et avec
            lesquels il pourra interagir directement.
          </p>
          <p>
            {' '}
            Le principal défi du développement front-end est de toujours
            s’adapter aux dernières évolutions ; les outils et les techniques de
            développement étant en évolution constante.
          </p>
          <p>
            {' '}
            Il est composé de 3 langages: <span>HTML </span>(qui décrit le
            contenu et définit la structure dans une page Web), <span>CSS</span>{' '}
            (qui consiste à définir un ensemble de règles de style) et
            <span> Javascript</span> (qui sert à contrôler les données saisies
            et à interagir avec le document HTML)
          </p>
        </div>
      </div>
      <div className="back-end">
        <div className="textback">
          <h2>Back end</h2>
          <p>
            Le <span>Back End </span>est la partie qu’on ne voit pas en tant que
            simple internaute. Plus précisement, c’est la partie du code qui est
            exécutée par le serveur ou la base de données.
          </p>
          <p>
            {' '}
            Elle représente une très grande partie d’un projet web. Cela
            consiste à trouver des solutions techniques pour développer des
            dispositifs fonctionnels sur le site web en fonction des besoins du
            client.
          </p>
          <p>
            {' '}
            Il existe de nombreux langages pour le Back End comme PHP, C#, C++,
            Java, Python, NodeJs, SQL ...
          </p>
        </div>
        <img className="imgback" src="/img/backend.jpg" alt="backend" />
      </div>
    </SDefinition>
  );
}
