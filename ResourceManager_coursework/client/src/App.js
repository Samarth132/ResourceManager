import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home'
import ResourceList from './components/resourceList';
import NoticeList from './components/noticeList';
import Create from './components/Create';
import Unauthourized from './components/Unauthorized';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className="content">
          <Routes>
            <Route exact path="/resources" element={<ResourceList/>}/>
            <Route exact path="/notices" element={<NoticeList/>}/>
            <Route exact path="/create" element={<Create/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/unauthorized" element={<Unauthourized/>}/>
            <Route path="*" element={<Logout/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
