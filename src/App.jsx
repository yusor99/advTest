import AdvertisementPage from './components/advPage/advertisementPage';
import Card from './components/Card';
import './styles/App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";

function App() {
  return (
  <>

    <Router>
            <Route exact path="/"  component={AdvertisementPage} />
            <Route path = "/Card"  component= {Card}/>
        
        </Router>
  </>
  );
}

export default App;
