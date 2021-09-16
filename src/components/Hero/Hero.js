import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Atlahua <br />
          Personal Portfolio
        </SectionTitle>
        <SectionText>
          <span style={{ fontStyle: 'italic' }}>
            "The person who doesn't make mistakes is unlikely to make anything"
          </span>{' '}
          - Paul Arden
        </SectionText>
        <a href='#about'>
          <Button>Learn More</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
