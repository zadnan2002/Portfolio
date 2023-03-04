
import './App.scss';

import ResponsiveAppBar from './components/Sidebar/Sidebar';
import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
import HomeSnow from './HomeSnow';
import{BrowserRouter as Router,Routes,Route, HashRouter} from 'react-router-dom';
import ReactGA from 'react-ga';
import { useEffect } from 'react';


 


function App() {
  ReactGA.initialize('G-NBFCWVE4LG');
  useEffect (() => {
    ReactGA.pageview(window.location.pathname + window.location.search);

  });

  return (

  <Router >
      <div className="App">

        <HomeSnow></HomeSnow>
     
     <Routes>
        <Route  path='/' element={<Home1/>} />
        <Route  path='/about' element={<Home3/>} />
     </Routes>
         </div>
  </Router>
  );
}

export default App;
