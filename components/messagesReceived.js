import styled from '@emotion/styled';
import React, {useContext} from 'react';
import {CartContext} from '../Context';

const LI = styled.li({
  fontSize: 18,
  marginBottom: 10,
});

export default function MessagesReceived() {
  const {values, isActive, checked, setIschecked} = useContext(CartContext);

  function UserGreeting(props) {
    return <p>Ce message est privé</p>;
  }

  function GuestGreeting(props) {
    return <p>Ce message n'est pas privé</p>;
  }

  function Greeting(props) {
    if (!checked) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  console.log('checked', checked);

  return (
    <div>
      {isActive ? (
        <div>
          <p>Bonjour mon nom est: {values.firstName}</p>
          <p>{values.message}</p>
          <Greeting />
        </div>
      ) : null}
    </div>
  );
}
