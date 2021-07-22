import { useState, useEffect } from 'react';
import axios from 'axios';
import Project from '../Project/Project';
import SProjectsList from './Style';

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/projects`).then(({ data }) => {
      const newProjects = data.map((project) => {
        const newProject = { ...project };
        const [myDate] = project.date.split('T');
        const myDateArr = myDate.split('-');
        let month = '';
        switch (myDateArr[1]) {
          case '01':
            month = 'Janvier';
            break;
          case '02':
            month = 'Février';
            break;
          case '03':
            month = 'Mars';
            break;
          case '04':
            month = 'Avril';
            break;
          case '05':
            month = 'Mai';
            break;
          case '06':
            month = 'Juin';
            break;
          case '07':
            month = 'Juillet';
            break;
          case '08':
            month = 'Août';
            break;
          case '09':
            month = 'Septembre';
            break;
          case '10':
            month = 'Octobre';
            break;
          case '11':
            month = 'Novembre';
            break;
          case '12':
            month = 'Décembre';
            break;
          default:
            month = '';
            return month;
        }
        const myFrDate = `${month} ${myDateArr[0]}`;
        newProject.date = `${myFrDate}`;
        return newProject;
      });
      setProjects(newProjects);
    });
  }, []);

  return (
    <SProjectsList>
      <h1>Portfolio</h1>
      <div className="gallery">
        {projects.map((project) => {
          return <Project {...project} />;
        })}
      </div>
    </SProjectsList>
  );
}
