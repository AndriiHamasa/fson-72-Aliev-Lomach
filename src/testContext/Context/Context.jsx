// import { createContext, useContext, useState } from 'react'

import { createContext, useState, useContext } from "react";
// import { ToggleContext } from "../App";

// const ToggleContext = createContext()

// export const useCustomContext = () => useContext(ToggleContext)

// const Context = ({ children }) => {
// 	const [toggle, setToggle] = useState(false)

// 	return (
// 		<ToggleContext.Provider
// 			value={{
// 				toggleValue: toggle,
// 				toggleFn: () => setToggle((prev) => !prev),
// 			}}
// 		>
// 			{children}
// 		</ToggleContext.Provider>
// 	)
// }

// export default Context

const ToggleContext = createContext();

export const Context = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  

  return (
    <ToggleContext.Provider
      value={{
        toggleValue: toggle,
        toggleFn: () => setToggle((prev) => !prev),
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export const CustomUseContext = () => useContext(ToggleContext)
