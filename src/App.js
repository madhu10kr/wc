import React, { Component } from 'react'
import Application from './Application'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  return (
    <div>
     
    <Application/> 
    </div>
  );
}

export default App;
