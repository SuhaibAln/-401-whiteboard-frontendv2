import React, { useContext } from 'react';
import '../App.css';
import { themeContext } from '../contexs/ThemeProvider';

function Footer() {
  const theme_Context = useContext(themeContext);

  return (
    <div className={`foot${theme_Context.mode}`}>
      <p>&copy;Suhaib</p>
    </div >
  )
}

export default Footer