import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

class Module extends React.Component<{ name: string, icon: string, link: string, unreleased?: boolean }, {}> {
  render() {
    return this.props.unreleased === undefined ? (
      <li className="module">
        <Link to={this.props.link}>
          <div className="icon">
            <i className={`fa-solid fa-${this.props.icon}`} />
          </div>
          <span className="name">{this.props.name}</span>
        </Link>
      </li>
    ) : <></>
  }
}

// <svg className='stream' height="10" width="10">
//   <circle cx='50%' cy='50%' r="4" fill="red" />
// </svg >

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
        <Module name='Panel' icon='user' link={`/dashboard/${guild.id}/panel`} />
        <Module name='Settings' icon='gear' link={`/dashboard/${guild.id}/settings`} />
        <Module name='Leaderboard' icon='ranking-star' link={`/dashboard/${guild.id}/leaderboard`} unreleased />
        <Module name='Widget' icon='gamepad' link={`/dashboard/${guild.id}/widget`} />
        <Module name='Premium' icon='circle-dollar-to-slot' link={`/dashboard/${guild.id}/premium`} />
      </ul>
      <hr className='modules-divider' />
      <ul className="modules">
        <h3 className='title'>Server Management</h3>
        <Module name='Automoderation' icon='shield-halved' link={`/dashboard/${guild.id}/automod`} />
        <Module name='Placeholder' icon='robot' link={`/dashboard/${guild.id}/placeholder`} unreleased/>
      </ul>
      <hr className='modules-divider' />
      <ul className="modules">
        <h3 className='title'>Functions</h3>
        <Module name='Custom Embeds' icon='indent' link={`/dashboard/${guild.id}/embeds`} />
      </ul>
      <hr className='modules-divider' />
      <ul className="modules">
        <h3 className='title'>Twitch</h3>
        <Module name='BOT' icon='twitch' link={`/dashboard/${guild.id}/twitch/bot`} unreleased/>
        <Module name='Chat' icon='comments' link={`/dashboard/${guild.id}/twitch/chat`} />
        <Module name='Streams' icon='satellite-dish' link={`/dashboard/${guild.id}/twitch/streams`} unreleased/>
      </ul>
    </React.Fragment>
  );
}