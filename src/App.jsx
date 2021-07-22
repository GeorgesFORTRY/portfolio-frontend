import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ProjectsList from './components/ProjectsList/ProjectsList';
import Career from './components/Career/Career';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={ProjectsList} />
        <Route path="/career" component={Career} />
      </Switch>
      <Footer />
    </div>
  );
}
