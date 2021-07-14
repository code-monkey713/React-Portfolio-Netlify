import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import portrait from './images/portrait-small.png';

const Contact = () => {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Tony Tran</h2>
          <img src={portrait} alt="avatar" style={{ height: '250px' }} />
          <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
            Full Stack Developer with a background in IT/Business Analyst and
            customer service. With the background of working as an IT Analyst,
            the experiences will be a great asset to being a software developer.
            Looking to use the knowledge, communication, and technical skills to
            add value to an organization while focusing on continuous learning
            and engaging in the community to give back in the field of web
            development.
          </p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />

          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: '30px', fontFamily: 'Anton' }}
                >
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  (832) 630-5193
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: '30px', fontFamily: 'Anton' }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  tony.tran713@outlook.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: '30px', fontFamily: 'Anton' }}
                >
                  <i className="fa fa-github" aria-hidden="true" />
                  code-monkey713
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Contact;
