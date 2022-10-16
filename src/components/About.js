import React, { useEffect, useContext } from 'react';
import cookies from 'react-cookies';
import { themeContext } from '../contexs/ThemeProvider';



function About() {

  const { mode, setMode } = useContext(themeContext);
  
  useEffect(() => {
    const token = cookies.load("token");
    setMode(cookies.load("mode"))
  }, []);

  return (
    <div>
      <p>
       Suhaib Alnaji
      </p>
    </div>
  )
}

export default About