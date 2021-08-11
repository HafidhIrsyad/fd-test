import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
  <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact key="Home" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
