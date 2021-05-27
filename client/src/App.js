import logo from './logo.svg';
import './App.css';
import {Router, Link} from "@reach/router";
import Create from './components/Create'
import ShowAll from './components/ShowAll'
import ShowOne from './components/Show'
import Edit from './components/Edit'

function App() {
  return (
    <div className="App">
    <h1>Pet Shelter</h1>

    <Router>
    <ShowAll path="/"/>
    <Create path="/pets/new"/>
    <ShowOne path="/pets/:id"/>
    <Edit path="/pets/update/:id"/>
    </Router>
    </div>
  );
}

export default App;

