import React from'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

import LogIn from './components/pages/LogIn';


function App() {
  return (
    <>
    <Router>
    <Navbar />
       <Switch>
       <Route path='/' exact component={Home} />
       
       
       <Route path='/log-in' component={LogIn}/>
       
       </Switch>
    </Router>
    </>
  
   
    
      
     
 );
}

export default App;
   