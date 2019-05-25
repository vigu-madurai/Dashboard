import React from 'react';
import MainPage from './modules/MainPage/index';
import { Offline, Online } from "react-detect-offline";

const App = () => (
  <div>
    <Online><MainPage/></Online>
    <Offline>
      <div className='offline-container'>
        <span>Please check your internet connectivity!</span>
        <span>Please be Online to enjoy this app...</span>
      </div>
    </Offline>
  </div>
);

export default App;
