import React from 'react';
import './Settings.css';
import { postApi } from '../../../../utility/fetching';
const defaultPrefix = 'f-';

async function setGuildPrefix() {
  if (!validatePrefix()) return;
  postApi(`https://us-central1-feltax-87fb9.cloudfunctions.net/app/mongo/setGuildPrefix`, {
    tokenType: localStorage.getItem('tokenType'), accessToken: localStorage.getItem('accessToken'),
    //@ts-ignore
    newPrefix: document.getElementById('prefixInp').value,
    //@ts-ignore
    guildId: document.getElementById('guildId').value
  });
}
function validatePrefix() {
  let edisplay = document.getElementById('prefixErrDisp')//, submitBtn = document.getElementById('submitBtn');
  if (inps.prefix.length === 0) {
    edisplay.innerText = `The prefix can't be empty`;
    return false;
  }
  if (inps.prefix.length > 6) {
    edisplay.innerText = 'The maximun length for a prefix is 6 characters!';
    return false;
  }
  if (inps.prefix.replace(/[!-"]|[$-']|[*-?]|[A-~]/g, '').length !== 0) {
    edisplay.innerText = 'You can only use alfanumeric characters and basic symbols except #, @, (, ) with no spaces';
    return false;
  }
  const malasPalabras = ['puto', 'puta', 'dick', 'pene', 'bitch'];
  if (RegExp(malasPalabras.join('|')).test(inps.prefix)) {
    edisplay.innerText = 'You can\'t include offenive words in your prefix!';
    return false;
  }
  edisplay.innerText = '';
  return true;
}
let inps = {
  get prefix() { //@ts-ignore
    return document.getElementById('prefixInp').value;
  },
  set prefix(value) { //@ts-ignore
    document.getElementById('prefixInp').value = value;
  },
  get nickname() { //@ts-ignore
    return document.getElementById('nicknameInp').value;
  },
  set nickname(value) { //@ts-ignore
    document.getElementById('nicknameInp').value = value;
  }
};
// props: { dbGuild, guild }
type Props = { guild?: string, dbGuild?: string };
export default class Guild extends React.Component<Props> {
  shouldReload: boolean;
  constructor(props) {
    super(props);
    this.state = { user: null };
  }
  handleClick = (e) => {
    e.target.select();
  };
  render() {
    //@ts-ignore
    let guild = this.props.guild;
    //@ts-ignore
    let dbGuild = (this.props.dbGuild != null) ? this.props.dbGuild : null;
    console.log('guilds:');
    //@ts-ignore
    console.log(guild.id);
    console.log(dbGuild);
    return (
      <>
        <React.Fragment>
          <div className="interface">
            <div className="avatar">
              <img className="avatar" src="https://cdn.discordapp.com/avatars/568435616153337916/fb7ce8b32cedb104a74aab8c184007c3.png?size=256" alt='Bot Avatar' />
            </div>
            <div className="custom">
              <input type="text" className="nickname" defaultValue="FΞLTΛX" id="nicknameInp" onClick={this.handleClick} />
              {/*@ts-ignore */}
              <input type="text" className="prefix" defaultValue={dbGuild ? dbGuild.prefix ?? defaultPrefix : defaultPrefix} id="prefixInp" onInput={validatePrefix} onClick={this.handleClick} />
              <span id="prefixErrDisp"></span>
              {/*@ts-ignore */}
              <input type="hidden" value={guild.id} id="guildId" />
              <input type="button" value='Update guild prefix!' id="submitBtn" onClick={setGuildPrefix} />
            </div>
          </div>
        </React.Fragment>
      </>
    );
  }
}