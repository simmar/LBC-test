import styled from '@emotion/styled';
import React, {useContext} from 'react';
import {CartContext} from '../Context';
import data from '../messages/data';

const Fieldset = styled.div((props) => ({
  margin: '0 auto 20 auto',
  border: '1px solid black',
  padding: '10px',
}));

const LI = styled.li({
  fontSize: 18,
  marginBottom: 10,
});

export default function Presentation() {
  const {values} = useContext(CartContext);
  console.log('values', values);

  return (
    <Fieldset>
      <ul className="has-text-centered" id="stickers">
        {data.map((item, key) => {
          return <LI key={key}>{item.message}</LI>;
        })}
      </ul>
      <p>Bonjour {values.firstName}</p>
    </Fieldset>
  );
}
