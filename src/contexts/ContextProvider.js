import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(null);
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false)

  const setMode = (ele) => {
    setCurrentMode(ele.target.value)
    localStorage.setItem('theme', currentMode);
  }

  const handleClick = (element) => {
    setIsClicked({ ...initialState, [element]: !isClicked[element] });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentMode,
        setMode,
        setThemeSettings,
        themeSettings
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
