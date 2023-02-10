
import './App.scss';

import ResponsiveAppBar from './components/Sidebar/Sidebar';
import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
import HomeSnow from './HomeSnow';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
  <Router>
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
