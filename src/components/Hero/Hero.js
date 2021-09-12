import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

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
        <Link href='#about'>
          <Button>Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
