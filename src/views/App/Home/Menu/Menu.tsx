import React from 'react'
import { Link } from 'react-router-dom';
import { data, NavElement } from '../Nav/Nav'
import './Menu.scss'

export default class Menu extends React.Component<{ language: string, user: any }, any> {
  render() {
    function closeMenu() {
      if (document.getElementById('menu')?.style.visibility == 'hidden') {
        document.getElementById('menu').style.visibility = 'visible';
        document.getElementById('menu').style.left = '0';
      } else {
        document.getElementById('menu').style.visibility = 'hidden';
        document.getElementById('menu').style.left = '-100vw';
      }
    }
    return (
      <nav id="menu">
        <button className='closeMenu' onClick={closeMenu}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <ul>
          {
            data.elements.map((element, index) => <NavElement key={index} data={element} locale={this.props.language} />)
          }

          <div className="navbar-item">
            <Link className="navbar-item" data-tooltip="Dashboard" to={`/${this.props.user !== null ? 'dashboard' : 'auth'}`}>
              <p>Dashboard</p>
              <span className="underline"></span>
            </Link>
          </div>
        </ul>
      </nav>
    )
  }
}
