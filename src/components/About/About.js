import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpeg" />
        </div>
        <p>
        I'm an Undergraduate CS Engineer and a hardware enthusiast. 
        I was a part of R&D at Core.AI and now I’m currently a R&D intern at IBM ISL. I love to read mostly novels, drawing potraits and listen to songs too much addicted to *Melodies*
        </p>
      </AboutInfo>

      <Flex center="space-between" className="quotes__wrapper">
        
        <Quote>
          <p align="center" style={{fontSize: '20px'}}>
            "Life is like a music, to enjoy it we first tune it"
          </p>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
