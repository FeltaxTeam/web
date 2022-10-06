import React from "react";
import { User } from "../CdM";
import './Nav.scss';
import CdMLogo from '../CdMLogo.png';
import { Link } from "react-router-dom";


interface P {
  user: User | null;
}
interface S { }

export default class Nav extends React.Component<P, S> {
  render() {
    return (
      <header id="header">
        <Link to='/'>
          <div className="logo">
            <img src={CdMLogo} alt="Logo" className="logo" />
            <div className="name">
              Castellers de Mollet
            </div>
          </div>
        </Link>
      </header>
    );
  }
}