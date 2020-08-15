import React from 'react';
import TopBar  from './components/TopBarComponent/TopBarComponent.jsx';
import ShortDescription from './components/ShortDescriptionComponent/ShortDescriptionComponent.jsx';
import FooterBar from './components/FooterBarComponent/FooterBarComponent.jsx';
import './App.css';



function App() {
  return (
    <div className="wrapper">
      <TopBar/>
      <ShortDescription/>
      <FooterBar/>
    </div>
  );
}

export default App;
