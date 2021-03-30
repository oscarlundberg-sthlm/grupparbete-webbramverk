import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import ManageItems from './pages/admin/ManageItems';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin/ManageItems" component={ManageItems} />
          <Route path="/create-pun" component={''} />
          {/* 
                Make sure to specify the parameter ":id" in the URL
                This will ensure that UpdatePun.js gets hold of the punId, through the variable "match"
            */}
          <Route path="/update-pun/:id" component={''} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
