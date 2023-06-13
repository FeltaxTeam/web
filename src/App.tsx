import React from 'react';
import { Suspense, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navigate from './utility/navigation';
import './App.css';
const Commands = React.lazy(() => import('./views/App/Commands/Commands'));
import Home from './views/App/Home/Home';
import Nav from './views/App/Home/Nav/Nav';
import Footer from './views/App/Home/Footer/Footer';
import NotFoundElement from './views/404/404';
import Auth from './views/Auth/Auth';
import TwitchAuth from './views/Auth/TwitchAuth';
const Guild = React.lazy(() => import('./views/App/Dashboard/Guild/Guild'));
const Dashboard = React.lazy(() => import('./views/App/Dashboard/Dashboard'));
const Team = React.lazy(() => import('./views/App/Team/Team'));
const Admin = React.lazy(() => import('./views/Admin/Admin'));
import Invite from './views/App/Invite/Invite'
const Support = React.lazy(() => import('./views/App/Support/Support'));
import AdminAuth from './views/Auth/AdminAuth';
import { fetchURL } from './utility/fetching';
import { Acknowledgements } from './views/App/Acknowledgements/Acknowledgements';
import CookiesPrompt from './views/App/CookiesPrompt/CookiesPrompt';
const TruthOrDare = React.lazy(() => import('./views/TruthOrDare/TruthOrDare'));
const CdM = React.lazy(() => import('./views/CdM/CdM'));
const Edith = React.lazy(() => import('./views/Edith/Edith'));
const StarWars = React.lazy(() => import('./views/StarWars/StarWars'));
const Music = React.lazy(() => import('./views/Music/Music'));
const DnD = React.lazy(() => import('./views/DnD/DnD'));
import Loading from './views/App/Home/Loading/Loading';

interface State {
  user: any;
}
export default class App extends React.Component<{}, State> {
  state: State = {
    user: null
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
      case 'dnd':
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <DnD />
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
      case 'starwars':
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <StarWars />
          </Suspense>
        );
      case 'music':
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Music />
          </Suspense>
        );
      default:
        return (
          <Router>
            <PageReseter />
            <Nav paths={['/404', '/team/iron', '/admin']} user={this.state.user} />
            <Routes>
              <Route path='*' element={<NotFoundElement />} />
              <Route path='/404' element={<NotFoundElement />} />
              <Route path="/" element={<Home />} />
              <Route path="/commands" element={<Navigate to="/commands/main" />} />
              <Route path="/commands/*" element={
                <Suspense fallback={<Loading />}>
                  <Commands />
                </Suspense>
              } />
              <Route path="/dashboard" element={
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
              } />
              <Route path="/dashboard/:guildId/*" element={
                <Suspense fallback={<Loading />}>
                  <Guild />
                </Suspense>
              } />
              <Route path="/twitch/auth" element={<TwitchAuth />} />
              <Route path="/auth/*" element={<Auth />} />
              <Route path="/logout" element={<Logout app={this} />} />
              <Route path="/team/*" element={
                <Suspense fallback={<Loading />}>
                  <Team />
                </Suspense>
              } />
              <Route path="/terms" element={<Team />} />
              <Route path="/privacy" element={<Team />} />
              <Route path="/admin" element={
                <Suspense fallback={<Loading />}>
                  <Admin user={this.state.user} />
                </Suspense>
              } />
              <Route path="/support" element={
                <Suspense fallback={<Loading />}>
                  <Support />
                </Suspense>
              } />
              <Route path="/premium" element={
                <Suspense fallback={<Loading />}>
                  <Support />
                </Suspense>
              } />
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