import styled from '@emotion/styled';
import React from 'react';
import dataPresentation from '../presentation/Data';

const P = styled.p`
  margin-bottom: 20px;
  color: ${(props) => (props.primary ? 'red' : 'black')};
  margin-top: ${(props) => (props.primary ? '5px' : '20px')};
`;

const Fieldset = styled.div`
  margin: 0 auto 50px auto;
  border: 2px solid #ff6e14;
  boxShadow: 2px 2px 2px black;
  padding: 10px;
  `;

const LI = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  `;

export default function Presentation() {
  return (
    <>
      <Fieldset>
        <ul className="has-text-centered" id="stickers">
          {dataPresentation.map((item, key) => {
            return <LI key={key}>{item.intro}</LI>;
          })}
        </ul>
      </Fieldset>
      <P>
        Si vous avez envie de me faire un petit retour, cela sera avec plaisir
        :)
      </P>
    </>
  );
}
