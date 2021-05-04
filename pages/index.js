import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import AddMessages from '../components/addMessages';
import MessagesReceived from '../components/messagesReceived';
import Presentation from '../components/presentation';
import CartContextProvider from '../Context';

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,300&display=swap');
</style>

const H1 = styled.h1`
  font-size: 60px;
  text-align: center;
  color: #ff6e14;
  text-traansform: uppercase;
  font-style: italic
  `;

  const H2 = styled.h2`
  font-size: 20px;
  `;

const Section = styled.section`
  width: 1240px;
  margin: 0 auto;
  color: #333;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1240px;
  margin: 0 auto;
  color: #333;
  `;

export default function Home() {
  return (
  <>
      <Global
        styles={css`
          body{
            font-family: 'Roboto wght', sans-serif;
            font-size: 18px
          }
        `}
      />    
      <CartContextProvider>
        <Container>
          <H1>Bonjour LBC !!</H1>
          <H2>J'en profite pour faire une petite présentation ^^</H2>
          <Section>
            <Presentation/>
            <MessagesReceived/>

            <AddMessages/>
          </Section>
        </Container>
      </CartContextProvider>
    </>
  );
}
