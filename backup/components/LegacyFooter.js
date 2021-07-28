import { Navbar, Nav } from 'react-bootstrap';

const LegacyFooter = () => {
  return (
    <Navbar
      className='d-flex flex-column flex-sm-row align-items-center align-horizontal nav-tabs mx-auto'
      fixed='bottom'
    >
      <Nav.Item>
        <a
          href='https://www.linkedin.com/in/tony-tran-developer/'
          className='m-3'
        >
          <i class='fab fa-linkedin'></i> LinkedIn
        </a>
      </Nav.Item>
      {' | '}
      <Nav.Item>
        <a href='/' className=' m-3'>
          &copy; 2021 Tony Tran
        </a>
      </Nav.Item>
      {' | '}
      <Nav.Item>
        <a href='https://github.com/code-monkey713/' className='m-3'>
          <i class='fab fa-github-square'></i> GitHub
        </a>
      </Nav.Item>
    </Navbar>
  );
};

export default LegacyFooter;
