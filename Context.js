import React, { createContext, useState } from 'react';
export const CartContext = createContext();

const Context = (props) => {
  const [values, setValues] = useState({});
  const [newMessages, setnewMessages] = useState([]);

  const [isActive, setisActive] = useState(false);

  return (
    <CartContext.Provider
      value={{values, setValues,newMessages, setnewMessages, isActive, setisActive}}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default Context;
