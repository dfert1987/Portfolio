import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Projects from './Pages/Projects/Projects';
import Blogs from './Pages/Blogs/Blogs';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/blogs' exact component={Blogs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
