import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import FootNote from './components/FootNote';

import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import { Layout } from 'react-mdl';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <FootNote />
      </Layout>
    </div>
  );
}

export default App;
