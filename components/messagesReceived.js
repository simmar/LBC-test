import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { CartContext } from '../Context';

const Blockmsg = styled('Blockmsg')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const Message = styled.div`
  width: 50%;
  margin: 0 auto 10px;
  min-height: 100px;
`
export default function MessagesReceived() {
  const { newMessages, isActive, checked } = useContext(CartContext);
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

  return (
    <Blockmsg>
      {isActive ? (
        <>
          {newMessages.map((file, index) => {
            return (
              <Message key={index}>
                <p>Bonjour mon nom est: {file.firstName}</p>
                {file.message}
                <Greeting />

              </Message>
            )
          })}
        </>
      ) : null}
    </Blockmsg>
  );
}
