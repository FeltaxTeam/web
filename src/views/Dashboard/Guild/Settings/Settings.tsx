import React from 'react';
import './Settings.css';
import {postApi} from '../../../../utility/fetching';
const defaultPrefix = 'f-';

async function setGuildPrefix(){
  postApi(`https://feltax-api.herokuapp.com/mongo/setGuildPrefix`, {tokenType : localStorage.getItem('tokenType'), accessToken: localStorage.getItem('accessToken'),
  //@ts-ignore
  newPrefix: document.getElementById('prefixInp').value,
  //@ts-ignore
  guildId: document.getElementById('guildId').value
});
}

function validatePrefix(){
  //console.log(`updating:${inps.prefix}`);
  if (inps.prefix.replaceAll(' ', '') == ''){
    inps.prefix = defaultPrefix;
  }
  //AARON HAZ LO QUE VEAS NECESARIO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  
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
export default function Guild(props:{dbGuild, guild}) {
  let guild = JSON.parse(props.guild);
  let dbGuild = (props.dbGuild != null)? props.dbGuild : null;

  console.log('guilds:');
  console.log(guild.id);
  console.log(dbGuild);
  return (
    <>
      <React.Fragment>
        <div className="interface">
          <div className="avatar">
            <img className="avatar" src="https://cdn.discordapp.com/avatars/568435616153337916/fb7ce8b32cedb104a74aab8c184007c3.png?size=256" />
          </div>
          <div className="custom">
            <input type="text" className="nickname" defaultValue="FΞLTΛX" id="nicknameInp" />
            <input type="text" className="prefix" defaultValue={dbGuild? dbGuild.prefix ?? defaultPrefix: defaultPrefix} id="prefixInp" onInput={validatePrefix}/>
            <input type="hidden" value={guild.id} id="guildId"/>
            <input type="button" value='Update guild prefix!' id="submitBtn" onClick={setGuildPrefix}/>
          </div>
        </div>
      </React.Fragment>
    </>
  );
}