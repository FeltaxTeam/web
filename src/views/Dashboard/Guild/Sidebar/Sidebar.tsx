import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

export default function Sidebar(props: { guild: any }) {
  const guild = (props.guild !== '') ? props.guild : { name: 'GUILD' };
  if (guild == null || guild.name === 'GUILD') return <></>;
  return (
    <React.Fragment>
      <div className="guild">
        <img alt="icon" src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=512`} />
        <div className="name">
          {guild.name}
        </div>
      </div>
      <ul className="modules">
        <li className="module">
          <Link to={`/dashboard/${guild.id}/panel`}>
            <div className="icon">
              <i className="fa-regular fa-user" />
            </div>
            <span className="name">Panel</span>
          </Link>
        </li>
        <li className="module">
          <Link to={`/dashboard/${guild.id}/settings`}>
            <div className="icon">
              <i className="fa-solid fa-gear" />
            </div>
            <span className="name">Settings</span>
          </Link>
        </li>
        <li className="module">
          <Link to={`/dashboard/${guild.id}/leaderboard`}>
            <div className="icon">
              <i className="fa-solid fa-ranking-star" />
            </div>
            <span className="name">Leaderboard</span>
          </Link>
        </li>
        <li className="module">
          <Link to={`/dashboard/${guild.id}/widget`}>
            <div className="icon">
              <i className="fa-solid fa-gamepad" />
            </div>
            <span className="name">Widget</span>
          </Link>
        </li>
        <li className="module">
          <Link to={`/dashboard/${guild.id}/premium`}>
            <div className="icon">
              <i className="fa-solid fa-circle-dollar-to-slot" />
            </div>
            <span className="name">Premium</span>
          </Link>
        </li>
      </ul>
      <hr className='modules-divider' />
      <ul className="modules">
        <h3 className='title'>Server Management</h3>
        <li className="module">
          <Link to={`/dashboard/${guild.id}/automod`}>
            <div className="icon">
              <i className="fa-solid fa-shield-halved" />
            </div>
            <span className="name">Automoderation</span>
          </Link>
        </li>
        <li className="module">
          <Link to={`/dashboard/${guild.id}/placeholder`}>
            <div className="icon">
              <i className="fa-solid fa-robot" />
            </div>
            <span className="name">PlaceHolder</span>
          </Link>
        </li>
      </ul>
      <hr className='modules-divider' />
      <ul className="modules">
        <h3 className='title'>Functions</h3>
        <li className="module">
          <Link to={`/dashboard/${guild.id}/embeds`}>
            <div className="icon">
              <svg className='on' height="10" width="10">
                <circle cx='50%' cy='50%' r="4" fill="red" />
              </svg>
              <i className="fa-solid fa-indent" />
            </div>
            <span className="name">Custom Embeds</span>
          </Link>
        </li>
      </ul>
      <hr className='modules-divider' />
      <ul className="modules">
        <h3 className='title'>Twitch</h3>
        <li className="module">
          <Link to={`/dashboard/${guild.id}/twitch/bot`}>
            <div className="icon">
              <i className="fa-brands fa-twitch" />
              <svg className='stream' height="10" width="10">
                <circle cx='50%' cy='50%' r="4" fill="red" />
              </svg>
            </div>
            <span className="name">BOT</span>
          </Link>
        </li>
        <li className="module">
          <Link to={`/dashboard/${guild.id}/twitch/chat`}>
            <div className="icon">
              <svg className='off' height="10" width="10">
                <circle cx='50%' cy='50%' r="4" fill="red" />
              </svg>
              <i className="fa-regular fa-comments" />
            </div>
            <span className="name">Chat</span>
          </Link>
        </li>
        <li className="module">
          <Link to={`/dashboard/${guild.id}/twitch/streams`}>
            <div className="icon">
              <svg className='live' height="10" width="10">
                <circle cx='50%' cy='50%' r="4" fill="red" />
              </svg>
              <i className="fa-solid fa-satellite-dish" />
            </div>
            <span className="name">Streams</span>
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
}