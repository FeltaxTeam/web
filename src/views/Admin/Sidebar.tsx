import React from 'react';
import './Sidebar.scss';

export default class Sidebar extends React.Component {
  constructor(props?: any) {
		super(props);
		this.state = { user: props.user };
	}
  componentDidUpdate(prevProps) {//@ts-ignore
    if (this.props.user !== prevProps.user) {//@ts-ignore
      this.setState({ user: this.props.user });
    }
  }
  render() {
    //@ts-ignore
		let user = this.state.user;
    return (
      <aside className="sidebar">
        <div className="user">
          <img src={user?`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=512`:''} alt="avatar" />
          <div className="name">
            <span className="username">{user?user.username:''}</span>
            <span className="discriminator">#{user?user.discriminator:''}</span>
          </div>
        </div>
        <ul className="modules">
          <li className="module">
            <a href="/stats/bot"><div className="icon"><i className="fa-regular fa-user" /></div><span className="name">Profile</span></a>
          </li>
          <li className="module">
            <a href="/stats/bot"><div className="icon"><i className="fa-solid fa-earth-europe" /></div><span className="name">Profile</span></a>
          </li>
        </ul>
        <hr className='modules-divider' />
        <ul className="modules">
          <h3 className='title'>Statistics</h3>
          <li className="module">
            <a href="/stats/api"><div className="icon"><i className="fa-solid fa-server" /></div><span className="name">API</span></a>
          </li>
          <li className="module">
            <a href="/stats/bot"><div className="icon"><i className="fa-solid fa-robot" /></div><span className="name">BOT</span></a>
          </li>
        </ul>
      </aside>
    )
  }
}
