import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { CartContext } from '../Context';

const Blockmsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const Message = styled.div`
  width: 50%;
  margin: 0 auto 10px;
  min-height: 100px;
  `
  const MessagePrivate = styled.div(({ isPrivate }) => css`
  font-size: 14px;
  color: #ff6e14;
  opacity: ${isPrivate ? 0.5 : 1};
`)
  
const P = styled.p`
  margin: 10px 0;
  font-family: 'Roboto Thin',sans-serif;
  font-weight: 100;
`

export default function MessagesReceived() {
  const { newMessages, isActive } = useContext(CartContext);
  
  function UserGreeting(props) {
    return <P>Ce message est privé</P>;
  }

  function GuestGreeting(props) {
    return <P>Ce message n'est pas privé</P>;
  }

  return (
    <Blockmsg>
      {isActive ? (
        <>
          {newMessages.map((file, index) => {
            console.log('file', file.private);
            return (
              <Message key={index}> 
                <P>Bonjour mon nom est: {file.firstName}</P>
                <P>{file.message}</P>
                <MessagePrivate isPrivate={file.private}>
                {file.private === true ? (
                  <UserGreeting />
                )  : 
                <GuestGreeting /> }
                </MessagePrivate>
              </Message>
            )
          })}
        </>
      ) : null}
    </Blockmsg>
  );
}
