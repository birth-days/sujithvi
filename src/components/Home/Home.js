import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import svgRect from '@src/static/home_rect.svg';

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from '@common/IconLink';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';
import Button from '@common/Button';

import { Card, CardIcon, CardText, CardTitle } from '@common/Card';
import { faArrowDown, faBlog, faBook, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBlogger, faInstagram, faLinkedin, faMicroblog } from '@fortawesome/free-brands-svg-icons';

const ThingsILove = () => (
  <Flex align="center">

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={faBook} />
      </CardIcon>
      <CardText style={{fontSize:'25px'}}>Currently Reading : </CardText>
      <CardTitle style={{fontSize:'20px', paddingTop: '0px'}}>
        Rich Dad Poor Dad
      </CardTitle>
    </Card>
    
    <Card>
    <a href="/blog">
      <CardIcon>
        <FontAwesomeIcon icon={faMicroblog} />
      </CardIcon>
      <CardText style={{fontSize:'25px'}}>Read my blog on : </CardText>
      <CardTitle style={{fontSize:'20px', paddingTop: '0px'}}>
        Offline In A Flash
      </CardTitle>
      </a>
    </Card>
  </Flex>
);

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro style={{ marginBottom: 10 }}>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          {/* <p>Hello, I’m</p> */}
          <h1>Hey I'm Sujith!</h1>
          <p className="adjust">I'm here to Inspire the universe with my lyrics!</p>

          <div className="home__CTA">
            

            <div className="home__social">
              <IconLink
                label="github"
                icon={['fab', 'github']}
                href="//github.com/VI-Suji"
              />
              &emsp;
              <IconLink
                label="twitter"
                icon={['fab', 'twitter']}
                href="#"
              />
              &emsp;
              <IconLink
                label="linkedin"
                icon={faLinkedin}
                href="#"
              />
              &emsp;
              <IconLink
                label="instagram"
                icon={faInstagram}
                href="//instagram.com/v.i_suji"
              />
            </div>
            <Button className="cta" as="a" href="/blog">
              Read My Blog
            </Button>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard />
      </Intro>
      {/* <br /> <br /><br /> <br /> */}
      {/* Things I LOVE */}
      <PageHeader style={{ marginBottom: 10 }}>
        What's in Here <FontAwesomeIcon icon={faArrowDown} />
      </PageHeader>
      <ThingsILove />
    </HomeWrapper>
  );
};

export default Home;
