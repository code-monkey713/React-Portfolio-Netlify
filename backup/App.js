import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Frame from './components/Frame';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider, ThemeProvider } from './store';
import { Main } from './layouts/Main';
// import { About, Contact, Portfolio } from './pages';
import './design/scss/app.scss';

const App = () => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Main />}>
              
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  );
};

export default App;
