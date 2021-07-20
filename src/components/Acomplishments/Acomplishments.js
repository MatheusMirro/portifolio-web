import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { string: 'RocketSeat', text: 'Typescript, Nodejs, Reactjs'},
  { string: 'SujeitoProgramador', text: 'React Native'},
  { string: 'FreeCodeCamp', text: 'HTML, CSS, JavaScript'},
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Principais fontes de estudos</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.string}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
