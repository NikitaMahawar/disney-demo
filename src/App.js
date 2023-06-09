
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import './App.css';
import Switch from 'react-js-switch';
import Login from "./componants/Login";
import Header from "./componants/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Router>
       <Switch>
        <Route exact Path="/">
        
        </Route>
        </Switch>
        
       
      </Router>
      
    </div>
  );
}

export default App;

