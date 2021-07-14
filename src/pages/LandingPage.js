import { Grid, Cell } from 'react-mdl';
import portrait from './images/portrait-small.png';

const Landing = () => {
  return (
    <div style={{ width: '75%', margin: 'auto' }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img src={portrait} alt="avatar" className="avatar-img" />

          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>
              HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
              MongoDB
            </p>
            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tony-tran-developer/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/* Github */}
              <a
                href="https://github.com/code-monkey713"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Landing;
