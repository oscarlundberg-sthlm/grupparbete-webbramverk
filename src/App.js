import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ManageItems from './pages/admin/ManageItems';
import CreateItem from './pages/admin/CreateItem';
import Items from './pages/Items';
import Item from './pages/Item';

function App() {

  // const buttonEffect = () => {
  //   const allButtons = document.querySelectorAll('button');
  //   console.log(allButtons);
  //   // const computedStyle = window.getComputedStyle(allButtons[0]);
  //   // console.log(computedStyle);
  // }
  
  // useEffect(() => {
  //   buttonEffect();
  // })

  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact component={Items} />
          <Route path="/admin/ManageItems" component={ManageItems} />
          <Route path="/admin/CreateItem" component={CreateItem} />
          <Route path="/Item/:id" component={Item} />
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
