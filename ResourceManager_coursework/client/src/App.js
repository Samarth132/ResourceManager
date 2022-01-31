import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home'
import ResourceList from './components/resourceList';
import NoticeList from './components/noticeList';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/resources" element={<ResourceList/>}/>
            <Route exact path="/notices" element={<NoticeList/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
