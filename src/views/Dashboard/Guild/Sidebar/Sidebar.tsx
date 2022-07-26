import React from 'react';
import './Sidebar.scss';

export default function Sidebar(props: { guild: any }) {
  const guild = (props.guild !== '') ? props.guild : { name: 'GUILD' };
  if (guild == null || guild.name === 'GUILD') return <></>;
  return (
    <React.Fragment>
      <aside className="sidebar">
        <div className="guild">
          <img alt="icon" src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=512`} />
          <div className="name">
            {guild.name}
          </div>
        </div>
        <ul className="modules">
          <li className="module">
            <a href={`/dashboard/${guild.id}/panel`}>
              <div className="icon">
                <i className="fa-regular fa-user" />
              </div>
              <span className="name">Panel</span>
            </a>
          </li>
          <li className="module">
            <a href={`/dashboard/${guild.id}/settings`}>
              <div className="icon">
                <i className="fa-solid fa-gear" />
              </div>
              <span className="name">Settings</span>
            </a>
          </li>
          <li className="module">
            <a href={`/dashboard/${guild.id}/leaderboard`}>
              <div className="icon">
                <i className="fa-solid fa-ranking-star" />
              </div>
              <span className="name">Leaderboard</span>
            </a>
          </li>
          <li className="module">
            <a href={`/dashboard/${guild.id}/widget`}>
              <div className="icon">
                <i className="fa-solid fa-gamepad" />
              </div>
              <span className="name">Widget</span>
            </a>
          </li>
          <li className="module">
            <a href={`/dashboard/${guild.id}/premium`}>
              <div className="icon">
                <i className="fa-solid fa-circle-dollar-to-slot" />
              </div>
              <span className="name">Premium</span>
            </a>
          </li>
        </ul>
        <hr className='modules-divider' />
        <ul className="modules">
          <h3 className='title'>Server Management</h3>
          <li className="module">
            <a href={`/dashboard/${guild.id}/moderation`}>
              <div className="icon">
                <i className="fa-solid fa-shield-halved" />
              </div>
              <span className="name">Automoderation</span>
            </a>
          </li>
          <li className="module">
            <a href={`/dashboard/${guild.id}/placeholder`}>
              <div className="icon">
                <i className="fa-solid fa-robot" />
              </div>
              <span className="name">PlaceHolder</span>
            </a>
          </li>
        </ul>
        <hr className='modules-divider' />
        <ul className="modules">
          <h3 className='title'>Twitch</h3>
          <li className="module">
            <a href={`/dashboard/${guild.id}/twitch/bot`}>
              <div className="icon">
                <i className="fa-brands fa-twitch" />
                <svg className='stream' height="10" width="10">
                  <circle cx='50%' cy='50%' r="4" fill="red"/>
                </svg>
              </div>
              <span className="name">BOT</span>
            </a>
          </li>
          <li className="module">
            <a href={`/dashboard/${guild.id}/twitch/chat`}>
              <div className="icon">
              <svg className='off' height="10" width="10">
                  <circle cx='50%' cy='50%' r="4" fill="red"/>
                </svg>
                <i className="fa-regular fa-comments" />
              </div>
              <span className="name">Chat</span>
            </a>
          </li>
          <li className="module">
            <a href={`/dashboard/${guild.id}/twitch/streams`}>
              <div className="icon">
              <svg className='live' height="10" width="10">
                  <circle cx='50%' cy='50%' r="4" fill="red"/>
                </svg>
                <i className="fa-solid fa-satellite-dish" />
              </div>
              <span className="name">Streams</span>
            </a>
          </li>
        </ul>
      </aside>
    </React.Fragment>
  );
}