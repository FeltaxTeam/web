import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Navigate from './utility/navigation';
import './App.css';
import Commands from './views/Commands/Commands';
import Home from './views/Home/Home';
import Nav from './views/Home/Nav/Nav';
import Footer from './views/Home/Footer/Footer';
import NotFoundElement from './views/404/404';
import Auth from './views/Auth/Auth';
import Logout from './views/Logout/Logout';
import Guild from './views/Dashboard/Guild/Guild';
import Dashboard from './views/Dashboard/Dashboard';
import Team from './views/Team/Team';
import Admin from './views/Admin/Admin';
import Invite from './views/Invite/Invite'
import Support from './views/Support/Support';

export default function App() {
  let expires = localStorage.getItem('expires');
  if (expires && new Date(expires).getTime() <= Date.now() + (0*1000*60*10)) localStorage.clear(); //10 minute margin 
  return (
    <div className="App">
      <Router>
        <Nav paths={['/404', '/team/iron']}/>
        <Routes>
          <Route path='*' element={<Navigate to="/404" />} />
          <Route path='/404' element={<NotFoundElement />} />
          <Route path="/" element={<Home />} />
          <Route path="/commands" element={<Navigate to="/commands/main" />} />
          <Route path="/commands/*" element={<Commands />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:guildId/*" element={<Guild />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/team/*" element={<Team />} />
          <Route path="/terms" element={<Team />} />
          <Route path="/privacy" element={<Team />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer paths={['/', '/team', '/team']}/>
      </Router>
    </div>
  );
}