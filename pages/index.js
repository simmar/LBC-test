import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import Form from '../components/Form';
import MessagesReceived from '../components/MessagesReceived';
import Presentation from '../components/Presentation';
import CartContextProvider from '../Context';

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,300&display=swap');
</style>

const Section = styled.section`
  width: 1240px;
  margin: 0 auto;
  color: #333;
`;

const Container = styled.div((props) => ({
  display: 'flex',
  flexDirection: props.column && 'column',
  width: '1240px',
  margin: '0 auto',
  color: '#333',
}));

const H1 = styled.h1({
  fontSize: 60,
  textAlign: 'center',
  color: '#ff6e14',
  textTransform: 'uppercase',
  fontStyle: 'italic'
});
const H2 = styled.h2({
  fontSize: 20,
});

export default function Home() {
  return (
  <>
      <Global
        styles={css`
          body{
            font-family: 'Roboto Thin', sans-serif;
            font-size: 18px
          }
        `}
      />    
      <CartContextProvider>
        <Container column>
          <H1 color="lightgreen">Bonjour LBC !!</H1>
          <H2>J'en profite pour faire une petite présentation ^^</H2>
          <Section>
            <Presentation></Presentation>
            <Form></Form>
            <MessagesReceived></MessagesReceived>
          </Section>
        </Container>
      </CartContextProvider>
    </>
  );
}
