let commandComponents: any = [];
let commandInfos: any = []; //here attach the specific properties of each command (premium, slsh, on development / beta....)
//MAIN MODULE
commandComponents['main'] = [];
commandInfos['main'] = [];

commandInfos['main'].push({ name: "Help", tags: ['slash'] });
commandComponents['main'].push(function Help() {
  return (<>
    <div className={'command-focuser'} id={'help'}></div>
    <h1>help</h1>
    <p className='use'>Da igual cuanto te deuelva, siempre es demasiado ping</p>
  </>);
})

commandInfos['main'].push({ name: "Ping", tags: ['premium'] });
commandComponents['main'].push((function Ping() {
  return (
    <>
      <div className='command-focuser' id="ping"></div>
      <h1 className='name'>ping</h1>
      <p className='use'>Da igual cuanto te deuelva, siempre es demasiado ping</p>
    </>);
}));

//----------------MODERATION-----------------
commandComponents['moderation'] = [];
commandInfos['moderation'] = [];

commandInfos['moderation'].push({ name: "ban", tags: ['slash'] });
commandComponents['moderation'].push((function Command() {
  return (<>
    <div className={'command-focuser'} id={'ban'}></div>
    <h1>ban</h1>
    <h3>Usage: /ban [id:string] [reason:string]</h3>
    <p>Bans the the user with the specified id (if the bot has permissons to do so) for the reasons given.</p>
  </>);
}));
commandInfos['moderation'].push({ name: "unban", tags: ['slash'] });
commandComponents['moderation'].push((function Test() {
  return (<>
    <div className={'command-focuser'} id={'unban'}></div>
    <h1>unban</h1>
    <p className='use'>Da igual cuanto te deuelva, siempre es demasiado ping</p>
    <p>Removes the ban of the user with the specified id (if the bot has permissons)</p>
  </>);
}));
commandInfos['moderation'].push({ name: "kick", tags: ['slash'] });
commandComponents['moderation'].push((function Test() {
  return (<>
    <div className={'command-focuser'} id={'kick'}></div>
    <h1>kick</h1>
    <p className='use'>Da igual cuanto te deuelva, siempre es demasiado ping</p>
    <p>Kicks the user specified by the id from the server (if permissons are matched) for the reasons given. </p>
  </>);
}));
commandInfos['moderation'].push({ name: "clear", tags: [] });
commandComponents['moderation'].push((function Test() {
  return (<>
    <div className={'command-focuser'} id={'clear'}></div>
    <h1>clear</h1>
    <p className='use'>Da igual cuanto te deuelva, siempre es demasiado ping</p>
    <p>Clears messages from a channel depending on the 'bulk' parameter. As the discord limit is set to 100, this parameter can not exceed that amount. We're planning to exceed that limit (with some fancy techniques) but for now we're working on it, may be added soon.</p>
  </>);
}));
// Utility
commandComponents['utility'] = [];
commandInfos['utility'] = [];

commandInfos['utility'].push({ name: "userinfo", tags: ['slash'] });
commandComponents['utility'].push((function Test() {
  return (<>
    <div className={'command-focuser'} id={'userinfo'}></div>
    <h1>userinfo</h1>
    <p className='use'>Da igual cuanto te deuelva, siempre es demasiado ping</p>
    <p>Provides an embed with detailed information about the specified user</p>
  </>);
}));
commandInfos['utility'].push({ name: "serverinfo", tags: ['slash'] });
commandComponents['utility'].push((function Test() {
  return (<>
    <div className={'command-focuser'} id={'serverinfo'}></div>
    <h1>serverinfo</h1>
    <p className='use'>Da igual cuanto te deuelva, siempre es demasiado ping</p>
    <p>Da igual cuanto te deuelva, siempre es demasiado ping</p>
  </>);
}));
commandInfos['utility'].push({ name: "info", tags: [] });
commandComponents['utility'].push((function Test() {
  return (<>
    <div className={'command-focuser'} id={'test'}></div>
    <p className='use'>Da igual cuanto te deuelva, siempre es demasiado ping</p>
    <p>Da igual cuanto te deuelva, siempre es demasiado ping</p>
  </>);
}));

export { commandInfos };
export { commandComponents };