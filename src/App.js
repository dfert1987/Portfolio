import {Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Projects from './Pages/Projects/Projects';
import Blogs from './Pages/Blogs/Blogs';
import Design from './Pages/Design/Design';
import Contact from './Pages/Contact/Contact';
import './App.css';

function App() {
  let location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/blogs' exact component={Blogs} />
          <Route path='/design' exact component={Design} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
