import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ManageItems from './pages/admin/ManageItems';
import CreateItem from './pages/admin/CreateItem';
import UpdateItem from './pages/admin/UpdateItem';
import Items from './pages/Items';
import Item from './pages/Item';
import Header from './components/Header';

function App() {

  const headerBackgroundColor = '#212121DD';
  const headerTextColor = 'whitesmoke';

  return (
    <Router>
      <div className="App">
        <Header 
        headerBackgroundColor={headerBackgroundColor} 
        headerTextColor={headerTextColor} 
        />
        <Nav 
        headerBackgroundColor={headerBackgroundColor} 
        headerTextColor={headerTextColor} 
        />

        <Switch>
          <Route path="/" exact component={Items} />
          <Route path="/admin/ManageItems" component={ManageItems} />
          <Route path="/admin/CreateItem" component={CreateItem} />
          <Route path="/admin/UpdateItem/:id" component={UpdateItem} />
          <Route path="/Item/:id" component={Item} />
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
