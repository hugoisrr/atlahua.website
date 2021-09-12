import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+49 17 679 544 609'>+49 17 679 544 609</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:84rami@gmail.com'>84rami@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            "Walking on water and developing software from a specification are
            easy if both are frozen."
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/hugoisrr' target='_blank'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons
            href='https://www.linkedin.com/in/hugoisrr/'
            target='_blank'
          >
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://twitter.com/hugoisrr' target='_blank'>
            <AiOutlineTwitter size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
