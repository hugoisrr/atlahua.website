import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { GiWaterSplash } from 'react-icons/gi';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <a
        style={{ display: 'flex', alignItems: 'center', color: 'white' }}
        href='/'
      >
        <GiWaterSplash size='3rem' /> <span>Atlahua</span>
      </a>
    </Div1>
    <Div2>
      <li>
        <NavLink href='#projects'>Projects</NavLink>
      </li>
      <li>
        <NavLink href='#tech'>Technologies</NavLink>
      </li>
      <li>
        <NavLink href='#about'>About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/hugoisrr' target='_blank'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/hugoisrr/' target='_blank'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://twitter.com/hugoisrr' target='_blank'>
        <AiOutlineTwitter size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
