
import { BrowserRouter as Router, Route, NavLink, HashRouter } from 'react-router-dom';


import Home from './components/Home'
import Spring from './components/Spring'
// import page1 from './pages/page1'
// import page2 from './pages/page2'
function App() {

  return (
    
    <Router>
      
      <Route path='/' component={Home} />
      <Route path='/spring' component={Spring} />

    </Router>
  );
}

export default App;
