import styled from '@emotion/styled';
import React, {useContext} from 'react';
import {CartContext} from '../Context';

const LI = styled.li({
  fontSize: 18,
  marginBottom: 10,
});

export default function MessagesReceived() {
  const {values, isActive} = useContext(CartContext);
  console.log('values', values);
  return (
    <div>
      {isActive ? (
        <div>
          <p>Bonjour mon nom est: {values.firstName}</p>
          <p>{values.message}</p>
        </div>
      ) : null}
    </div>
  );
}
