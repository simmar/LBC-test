import React, { createContext, useState } from 'react';
export const CartContext = createContext();

const Context = (props) => {
  const [values, setValues] = useState([]);
  const [isActive, setisActive] = useState(false);
  const [checked, setIschecked] = useState(false);

  return (
    <CartContext.Provider
      value={{values, setValues, isActive, setisActive, checked, setIschecked}}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default Context;
