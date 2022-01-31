import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
