import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navigate from "../../utility/navigation";
import NotFoundElement from "../404/404";
import Auth from "../Auth/Auth";
import './CdM.scss';
import Ensayos from "./Ensayos/Ensayos";
import Home from "./Home/Home";
import Nav from './Nav/Nav';
import PartnersPanel from "./PartnersPanel/PartnersPanel";

export interface User {
  id: string;
  username: string;
  password: string;
}

let adminUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    password: 'admin'
  },
  {
    id: '2',
    username: 'admin2',
    password: 'admin2'
  }
];

interface S {
  user: User | null;
}
interface P {
  user: User | null;
}

console.log(adminUsers);

export default class CdM extends React.Component<P, S> {
  user: User | null = null;

  constructor(props: any) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <>
        <React.Fragment>
          <Router>
            <div id="CdM">
              <Nav user={this.user} />
              <div className="body">
                <Routes>
                  <Route path='*' element={<Navigate to="/404" />} />
                  <Route path='/404' element={<NotFoundElement />} />
                  <Route path="/auth/*" element={<Auth />} />
                  <Route path="/logout" element={<CdM user={this.user} />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/panel" element={<PartnersPanel />} />
                  <Route path="/assajos" element={<Ensayos />} />
                </Routes>
              </div>
            </div>
          </Router>
        </React.Fragment>
      </>
    );
  }
}