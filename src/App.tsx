import { Suspense, useEffect, useState } from 'react';
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
const TruthOrDare = React.lazy(() => import('./views/TruthOrDare/TruthOrDare'));
import CookiesPrompt from './views/CookiesPrompt/CookiesPrompt';
const CdM = React.lazy(() => import('./views/CdM/CdM'));
import React from 'react';
import Edith from './Edith/Edith';

interface Props { }
interface State {
  user: any;
}
export default class App extends React.Component<Props, State> {
  state: State = {
    user: null
  }
  constructor(props: Props) {
    super(props);
  }

  async componentDidMount() {
    const expires = localStorage.getItem('expires');
    if (expires !== undefined && new Date(expires).getTime() <= Date.now() + (1000 * 60 * 120)) {
      localStorage.clear()
    }
    const tokenType = localStorage.getItem('tokenType')
    const acessToken = localStorage.getItem('accessToken');
    if ((tokenType === null || acessToken === null) && this.state.user != null) {
      this.setState({ user: null });
    }
    if (tokenType !== null && acessToken !== null) {
      this.setState({ user: await fetchURL(tokenType, acessToken, 'https://discord.com/api/users/@me') });
    }
  }

  render() {
    const subDomain = window.location.hostname.split('.')[0];
    switch (subDomain) {
      case 'admin':
        return (
          <Router>
            <Routes>
              <Route path='*' element={<Navigate to="/404" />} />
              <Route path="/" element={<Admin user={this.state.user} />} />
              <Route path="/home" element={<Admin user={this.state.user} />} />
              <Route path='/404' element={<NotFoundElement />} />
              <Route path="/auth/*" element={<AdminAuth user={this.state.user} />} />
              <Route path="/logout" element={<Logout app={this} />} />
            </Routes>
          </Router>
        );
      case 'cdm':
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <CdM user={null} />
          </Suspense>
        );
      case 'edith':
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Edith />
          </Suspense>
        );
      case 'tod':
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <TruthOrDare />
          </Suspense>
        );
      default:
        return (
          <Router>
            <PageReseter />
            <Nav paths={['/404', '/team/iron', '/admin']} user={this.state.user} />
            <Routes>
              <Route path='*' element={<Navigate to="/404" />} />
              <Route path='/404' element={<NotFoundElement />} />
              <Route path="/" element={<Home />} />
              <Route path="/commands" element={<Navigate to="/commands/main" />} />
              <Route path="/commands/*" element={<Commands />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/:guildId/*" element={<Guild />} />
              <Route path="/auth/*" element={<Auth />} />
              <Route path="/logout" element={<Logout app={this} />} />
              <Route path="/team/*" element={<Team />} />
              <Route path="/terms" element={<Team />} />
              <Route path="/privacy" element={<Team />} />
              <Route path="/admin" element={<Admin user={this.state.user} />} />
              <Route path="/support" element={<Support />} />
              <Route path="/premium" element={<Support />} />
              <Route path="/invite" element={<Invite />} />
              <Route path="/acknowledgements" element={<Acknowledgements />} />
            </Routes>
            <Footer paths={['/', '/team', '/team']} />
            <CookiesPrompt />
          </Router>
        );

    }
  }
}

function Logout(props) {
  localStorage.clear();
  document.cookie = `cookieConsent=, expires=Thu, 01 Jan 1970 00:00:01 GMT`
  props.app.setState({ user: null });
  return < Navigate to="/" />;
}

function PageReseter() {
  const location = useLocation()
  useEffect(() => {
    document.getElementsByClassName("App")[0].scrollIntoView();
  }, [location])
  return <></>
}