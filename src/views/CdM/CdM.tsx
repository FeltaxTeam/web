import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import CdMRouter from "./CdMRouter";
import Footer from "./Footer/Footer";
import Nav from './Nav/Nav';
import './CdM.scss';

export interface User {
  id: string;
  username: string;
  password: string;
}
const adminUsers: User[] = [
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
  user?: User | null;
}
interface P {
  user?: User | null;
}
export default class CdM extends React.Component<P, S> {
  user?: User | null = null;

  constructor(props: any) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    document.title = "Castellers de Mollet";
    document.documentElement.setAttribute("lang", "ca");
    document.getElementById("favicon")!.setAttribute("href", "assets/CdMLogo.png");
    return (
      <React.Fragment>
        <Router>
          <div id="CdM">
            <Nav user={this.user} />
            <div className="body">
              <CdMRouter />
            </div>
            <Footer />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}