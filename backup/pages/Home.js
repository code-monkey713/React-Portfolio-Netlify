import React from 'react';

const Home = () => {
  return (
    <>
      <div>
        <div class='grid grid-cols-3 gap-4'>
          <div style={{ width: '100%', margin: 'auto' }}>
            <div className='contact-grid'>
              <div col={12}>
                <img src='' alt='avatar' className='avatar-img' />
                <div className='banner-text'>
                  <h1>Full Stack Web Developer</h1>
                  <hr />
                  <p>
                    HTML/CSS | Bootstrap | JavaScript | React | React Native |
                    NodeJS | Express | MongoDB
                  </p>
                  <div className='social-links'>
                    {/* LinkedIn */}
                    <a
                      href='http://google.com'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <i
                        className='fa fa-linkedin-square fa-5x'
                        aria-hidden='true'
                      />
                    </a>
                    {/* Github */}
                    <a
                      href='http://google.com'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <i
                        className='fa fa-github-square fa-5x'
                        aria-hidden='true'
                      />
                    </a>
                    {/* Freecodecamp */}
                    <a
                      href='http://google.com'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <i
                        className='fa fa-free-code-camp  fa-5x'
                        aria-hidden='true'
                      />
                    </a>
                    {/* Youtube */}
                    <a
                      href='http://google.com'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <i
                        className='fa fa-youtube-square  fa-5x'
                        aria-hidden='true'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
