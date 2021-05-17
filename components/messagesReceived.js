import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { CartContext } from '../Context';

const Blockmsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const Message = styled.div(({ isPrivate }) => css`

  width: 50%;
  margin: 0 auto 10px;
  min-height: 100px;
  opacity: ${isPrivate ? 0.5 : 1};
  `)
const P = styled.p`
  margin: 10px 0;
  font-family: 'Roboto Thin',sans-serif;
  font-weight: 100;
`

export default function MessagesReceived() {
  const { newMessages, isActive } = useContext(CartContext);
  console.log('newMessages', newMessages);

  console.log(Object.values(newMessages).includes('private'));

  
  function UserGreeting(props) {
    return <P>Ce message est privé</P>;
  }

  function GuestGreeting(props) {
    return <P>Ce message n'est pas privé</P>;
  }

  // function Greeting(props) {

  //   if (newMessages.filter(i => i.private === true)) {
  //     // return <UserGreeting />;
      
  //   } else if (newMessages.filter(i => i.private === false)) {
  //     // return <GuestGreeting />;
  //     console.log('false', );
    
  // }

  return (
    <Blockmsg>
      {isActive ? (
        <>
          {newMessages.map((file, index) => {
            return (
              <Message key={index} 
              isPrivate={file.private}
              
              > 
                <P>Bonjour mon nom est: {file.firstName}</P>
                <P>{file.message}</P>
                <P>{file.private}</P>
                {/* <Greeting /> */}
              </Message>
            )
          })}
        </>
      ) : null}
    </Blockmsg>
  );
}
