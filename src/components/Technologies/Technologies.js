import React from 'react';
import { DiDatabase, DiReact, DiNodejsSmall } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      2 anos de experiência e contando...
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>Experiência com <br />
            ReactJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>BackEnd</ListTitle>
          <ListParagraph>Experiência com <br />
            Nodejs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>Experiência com <br />
            MongoDB, PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
