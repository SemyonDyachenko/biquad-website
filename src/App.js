import React from 'react';
import TopBar  from './components/TopBarComponent/TopBarComponent.jsx';
import ShortDescription from './components/ShortDescriptionComponent/ShortDescriptionComponent.jsx';
import FooterBar from './components/FooterBarComponent/FooterBarComponent.jsx';
import HowWorkContainer from './components/HowWorkContainerComponent/HowWorkContainer.jsx';
import GetStarted from './components/GetstartedComponent/GetstartedComponent.jsx';
import './App.css';



function App() {
  return (
    <div className="wrapper">
    <div className="head-section">
      <TopBar/>
      <ShortDescription/>
      </div>
      <FooterBar/>
    </div>
  );
}

export default App;
