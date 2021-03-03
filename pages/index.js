import styled from '@emotion/styled';
import React from 'react';
import Form from '../components/form';
import Presentation from '../components/Presentation';
import CartContextProvider from '../Context';

const Section = styled.section`
  width: 1240px;
  margin: 0 auto;
  color: #333;
`;

const Container = styled.div((props) => ({
  display: 'flex',
  flexDirection: props.column && 'column',
  width: '1240px',
  margin: '0 auto 20 auto',
  color: '#333',
}));

const H1 = styled.h1({
  fontSize: 40,
  textAlign: 'center',
});
const H2 = styled.h2({
  fontSize: 20,
});

export default function Home() {
  return (
    <CartContextProvider>
      <Container column>
        <H1 color="lightgreen">Bonjour LBC !!</H1>
        <H2>J'en profite pour faire une petite présentation ^^</H2>
        <Section>
          <Presentation></Presentation>
          <Form></Form>
        </Section>
      </Container>
    </CartContextProvider>
  );
}
