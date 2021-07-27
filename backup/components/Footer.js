import { useThemeContext } from '../store';
import { Navbar, Nav } from 'react-bootstrap';

export const Footer = () => {
  const [state] = useThemeContext();

  return (
    <Navbar
      className={`d-flex flex-column align-items-center align-horizontal navbar-${state.theme} bg-${state.theme}`}
      // fixed="bottom"
    >
      <Nav.Item>
        <a
          href="https://www.linkedin.com/in/tony-tran-developer/"
          rel="noreferrer"
          target="_blank"
          className="m-3"
        >
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
      </Nav.Item>
      © Tony Tran 💛
      <Nav.Item>
        <a href="https://github.com/code-monkey713/" className="m-3">
          <i class="fab fa-github-square"></i> GitHub
        </a>
      </Nav.Item>
    </Navbar>
  );
};
