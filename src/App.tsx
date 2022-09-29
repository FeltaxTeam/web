import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navigate from './utility/navigation';
import './App.css';
import Commands from './views/Commands/Commands';
import Home from './views/Home/Home';
import Nav from './views/Home/Nav/Nav';
import Footer from './views/Home/Footer/Footer';
import NotFoundElement from './views/404/404';
import Auth from './views/Auth/Auth';
import Guild from './views/Dashboard/Guild/Guild';
import Dashboard from './views/Dashboard/Dashboard';
import Team from './views/Team/Team';
import Admin from './views/Admin/Admin';
import Invite from './views/Invite/Invite'
import Support from './views/Support/Support';
import AdminAuth from './views/Auth/AdminAuth';
import { fetchURL } from './utility/fetching';
import { Acknowledgements } from './views/Acknowledgements/Acknowledgements';
import TruthOrDare from './views/TruthOrDare/TruthOrDare';
import CookiesPrompt from './views/CookiesPrompt/CookiesPrompt';

export default function App() {
  console.log(window.location.hostname.split('.')[0]);
  let expires = localStorage.getItem('expires');
  if (expires && new Date(expires).getTime() <= Date.now() + (1000 * 60 * 120)) localStorage.clear(); // 2h margin
  let [user, setUser] = useState(null);
  useEffect(() => {
    async function getUser() {
      let tokenType = localStorage.getItem('tokenType'), acessToken = localStorage.getItem('accessToken');
      if ((tokenType == null || acessToken == null) && user != null) {
        setUser(null);
      } if ((tokenType != null && acessToken != null) && user == null) {
        setUser(await fetchURL(tokenType, acessToken, 'https://discord.com/api/users/@me'));
      }
    }
    getUser();
  }, [user]);
  //const mainProps = {user: user};

  const subDomain = window.location.hostname.split('.')[0];
  switch (subDomain) {
    case 'admin':
      return (
        <Router>
          <Routes>
            <Route path='*' element={<Navigate to="/404" />} />
            <Route path='/404' element={<NotFoundElement />} />
            <Route path="/auth/*" element={<AdminAuth />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Admin user={user} />} />
          </Routes>
        </Router>
      );
    case 'tod':
      return (
        <TruthOrDare />
      );
    default:
      return (
        <Router>
          <PageReseter />
          <Nav paths={['/404', '/team/iron']} user={user} />
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
            <Route path="/admin" element={<Admin user={user} />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/support" element={<Support />} />
            <Route path="/premium" element={<Support />} />
            <Route path="/acknowledgements" element={<Acknowledgements />} />
          </Routes>
          <Footer paths={['/', '/team', '/team']} />
          <CookiesPrompt />
        </Router>
      );
  }

  function Logout() {
    localStorage.clear();
    setUser(null);
    return <Navigate to="/" />;
  }
}

function PageReseter(){
	const location = useLocation()
  useEffect(() => {
    document.getElementsByClassName("App")[0].scrollIntoView();
  }, [location])
	return <></>
}