import './Sidebar.scss';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="user">
        <img src="https://cdn.discordapp.com/avatars/438390132538605589/857116f173d9036aca601fc79adbc544.webp?size=512" alt="avatar" />
        <div className="name">
          <span className="username">Iron</span>
          <span className="discriminator">#0000</span>
        </div>
      </div>
      <ul className="modules">
        <li className="module">
          <a href="/stats/bot"><div className="icon"><i className="fa-regular fa-user"/></div><span className="name">Profile</span></a>
        </li>
        <li className="module">
          <a href="/stats/bot"><div className="icon"><i className="fa-solid fa-earth-europe"/></div><span className="name">Profile</span></a>
        </li>
      </ul>
      <hr className='modules-divider' />
      <ul className="modules">
        <h3 className='title'>Statistics</h3>
        <li className="module">
          <a href="/stats/api"><div className="icon"><i className="fa-solid fa-server"/></div><span className="name">API</span></a>
        </li>
        <li className="module">
          <a href="/stats/bot"><div className="icon"><i className="fa-solid fa-robot"/></div><span className="name">BOT</span></a>
        </li>
      </ul>
    </aside>
  )
}
