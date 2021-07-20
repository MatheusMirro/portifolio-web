import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import Head from 'next/head';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (

  <Container>
    <Head>
      <title>Matheus Alves</title>
      <link rel="shortcut icon" href="/m.png" />
    </Head>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          <DiCssdeck size="3rem" />  <Span>Matheus Alves</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projetos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tecnologias</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Sobre</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/MatheusMirro">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/matheus-alves96/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/matheusmirro/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
