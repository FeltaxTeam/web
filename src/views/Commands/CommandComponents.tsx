let commandComponents: any = {
  main: [
    function Help() {
      return (<>
        <div className={'command-focuser'} id={'help'}></div>
        <h1 className="name">help</h1>
        <p className='use'><div className="command"><div className="prefix">/</div><div className="name">help</div></div></p>
      </>
      );
    },
    function Ping() {
      return (
        <>
          <div className='command-focuser' id="ping"></div>
          <h1 className='name'>ping</h1>
          <p className='use'><div className="command"><div className="prefix">/</div><div className="name">ping</div></div></p>
        </>
      );
    }
  ],
  moderation: [
    function Ban() {
      return (
        <>
          <div className={'command-focuser'} id={'ban'}></div>
          <h1 className="name">ban</h1>
          <p className='use'><div className="command"><div className="prefix">/</div><div className="name">ban</div></div><div className="option">member</div><div className="option optional">reason</div></p>
          <p>Bans the the user with the specified id (if the bot has permissons to do so) for the reasons given.</p>
        </>
      );
    },
    function Unban() {
      return (
        <>
          <div className={'command-focuser'} id={'unban'}></div>
          <h1 className="name">unban</h1>
          <p className='use'><div className="command"><div className="prefix">/</div><div className="name">unban</div></div><div className="option">member</div><div className="option optional">reason</div></p>
          <p>Removes the ban of the user with the specified id (if the bot has permissons)</p>
        </>
      );
    },
    function Kick() {
      return (
        <>
          <div className={'command-focuser'} id={'kick'}></div>
          <h1 className="name">kick</h1>
          <p className='use'><div className="command"><div className="prefix">/</div><div className="name">kick</div></div><div className="option">member</div><div className="option optional">reason</div></p>
          <p>Kicks the user specified by the id from the server (if permissons are matched) for the reasons given. </p>
        </>
      );
    },
    function Clear() {
      return (
        <>
          <div className={'command-focuser'} id={'clear'}></div>
          <h1 className="name">clear</h1>
          <p className='use'><div className="command"><div className="prefix">/</div><div className="name">clear</div></div><div className="option">bulk</div></p>
          <p>Clears messages from a channel depending on the 'bulk' parameter. As the discord limit is set to 100, this parameter can not exceed that amount. We're planning to exceed that limit (with some fancy techniques) but for now we're working on it, may be added soon.</p>
        </>
      );
    }
  ],
  utility: [
    function Userinfo() {
      return (
        <>
          <div className={'command-focuser'} id={'userinfo'}></div>
          <h1 className="name">userinfo</h1>
          <p className='use'><div className="command"><div className="prefix">/</div><div className="name">userinfo</div></div><div className="option optional">user</div></p>
          <p>Provides an embed with detailed information about the specified user</p>
        </>
      );
    },
    function Serverinfo() {
      return (
        <>
          <div className={'command-focuser'} id={'serverinfo'}></div>
          <h1 className="name">serverinfo</h1>
          <p className='use'><div className="command"><div className="prefix">/</div><div className="name">serverinfo</div></div><div className="option optional">invite</div></p>
          <p>Da igual cuanto te deuelva, siempre es demasiado ping</p>
        </>
      );
    },
    function Info() {
      return (
        <>
          <div className={'command-focuser'} id={'info'}></div>
          <h1 className="name">Info</h1>
          <p className='use'><div className="command"><div className="prefix">/</div><div className="name">info</div></div></p>
          <p>Da igual cuanto te deuelva, siempre es demasiado ping</p>
        </>
      );
    }
  ]
};
let commandInfos: any = {
  main: [
    { name: "Help", tags: ['slash'] },
    { name: "Ping", tags: ['premium'] }
  ],
  moderation: [
    { name: "ban", tags: ['slash'] },
    { name: "unban", tags: ['slash'] },
    { name: "kick", tags: ['slash'] },
    { name: "clear", tags: [] }
  ],
  utility: [
    { name: "userinfo", tags: ['slash'] },
    { name: "serverinfo", tags: ['slash'] },
    { name: "info", tags: [] }
  ]
}; //here attach the specific properties of each command (premium, slash, on development / beta....)

console.log(commandComponents)
export { commandInfos };
export { commandComponents };