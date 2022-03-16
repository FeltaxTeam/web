import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

export default function Sidebar(props: { guild: string }) {
  const guild = (props.guild != '')? JSON.parse(props.guild) : {name: 'GUILD'};
  if (guild.name == 'GUILD') return <></>;
  return (
    <React.Fragment>
      <nav className="sidebar">
        <div className="guild-resume">
          <img className="icon" alt="icon" src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=512`} />
          <div className="name">
            {guild.name}
          </div>
        </div>
        <ul>
          <li>
            <Link to={`/dashboard/${guild.id}/panel`}>
              <i className="fa-solid fa-server"></i>
              <div className="title">Panel</div>
            </Link>
          </li>
          <li>
            <Link to={`/dashboard/${guild.id}/settings`}>
              <i className="fa-solid fa-gear"></i>
              <div className="title">Settings</div>
            </Link>
          </li>
          <li>
            <Link to={`/dashboard/${guild.id}/leaderboard`}>
              <i className="fa-solid fa-trophy"></i>
              <div className="title">Leaderboard</div>
            </Link>
          </li>
          <li>
            <Link to={`/dashboard/${guild.id}`}>
             <i className="fa-solid fa-pager"></i>
              <div className="title">Widget</div>
            </Link>
          </li>
          <li>
            <Link to={`/dashboard/${guild.id}/premium`}>
              <i className="fa-solid fa-circle-dollar-to-slot"></i>
              <div className="title">Premium</div>
            </Link>
          </li>
          <li className="menu">
            <Link to="#">Server Management</Link>
            <ul>
              <li>
                <Link to="#">
                  <svg className="icon" width="24" height="24" viewBox="0 0 24 24" focusable="false">
                    <path fill="rgb(255, 255, 255)" d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                  </svg>
                  <div className="title">Premium</div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <svg className="icon" width="24" height="24" viewBox="0 0 24 24" focusable="false">
                    <path fill="rgb(255, 255, 255)" d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                  </svg>
                  <div className="title">Premium</div>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}