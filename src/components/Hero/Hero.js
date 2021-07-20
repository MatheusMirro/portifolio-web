import React, { useState } from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const file = "https://download1980.mediafire.com/1015xdr27eog/z78f0al7oxa1rla/MatheusCV.pdf";

const Hero = () => {
  const [download, setDownload] = useState('');
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Matheus Alves :] <br />
        </SectionTitle>
        <SectionText>
        FULLSTACK WEB DEVELOPER  <br />
        </SectionText>
        <Button onClick={() => setDownload(file)}>Download CV</Button>
        {download && <iframe src={download} style={{ display: "none" }}></iframe>}
      </LeftSection>
    </Section>
  )
};

export default Hero;