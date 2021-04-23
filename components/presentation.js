import styled from '@emotion/styled';
import React from 'react';
import data from '../presentation/data';

const Fieldset = styled.div((props) => ({
  margin: '0 auto 20 auto',
  border: '2px solid #ff6e14',
  boxShadow: '2px 2px 2px black',
  padding: '10px',
}));

const LI = styled.li({
  fontSize: 18,
  marginBottom: 10,
});

export default function Presentation() {
  return (
    <Fieldset>
      <ul className="has-text-centered" id="stickers">
        {data.map((item, key) => {
          return <LI key={key}>{item.message}</LI>;
        })}
      </ul>
    </Fieldset>
  );
}
