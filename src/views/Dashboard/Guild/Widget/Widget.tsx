import React, { useEffect, useState } from 'react';
import { fetchApi } from '../../../../utility/fetching';
import './Widget.css';

export default function Widget(props: { guild, owner?}) {
  const guild = props.guild;
  console.dir(guild);
  function Emoji(props: { id: string, animated: boolean, name: string }) {
    return (
      <img src={`https://cdn.discordapp.com/emojis/${props.id}.${props.animated === false ? 'png' : 'gif'}?size=32`} className="emoji" alt={props.name} />
    )
  }
  function Sticker(props: { id: string, name: string }) {
    return (
      <div className="sticker">
        <img src={`https://cdn.discordapp.com/stickers/${props.id}.png?size=80`} className="image" alt={props.name} />
        <div className="name">
          {props.name}
        </div>
      </div>
    )
  }
  function decimalToHex(d: number) {
    var hex = Number(d).toString(16);
    hex = "000000".slice(0, 6 - hex.length) + hex;
    return hex === '000000' ? 'b9bbbe' : hex;
  }
  function Role(props: { color: number, name: string }) {
    return (
      <span className="role" style={{ borderColor: `#${decimalToHex(props.color)}` }}>
        <span className="color" style={{ backgroundColor: `#${decimalToHex(props.color)}` }}></span>
        <span className="name">
          {props.name}
        </span>
      </span>
    )
  }
  let [owner, setOwner] = useState(null);
  useEffect(() => {
    async function getOwner() {
      setOwner(JSON.parse(await fetchApi(`https://us-central1-feltax-87fb9.cloudfunctions.net/app/discord/users/${guild.owner_id}`)));
    }
    getOwner();
  }, []);
  let premium_subscription_count_goal = [2, 7, 14];
  return (
    <React.Fragment>
      <div className="embed">
        <div className="stats-container">
          <div className="guild-header">
            <img className="icon" src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=512`} alt={guild.name} />
            <div className="info">
              <div className="title">
                <div className="name">{guild.name}</div>
                <div className="badge">
                  <svg className="verified" viewBox="0 0 16 16" preserveAspectRatio="none">
                    <path
                      className="star"
                      d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z">
                    </path>
                    <path className="icon" d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"></path>
                  </svg>
                </div>
                <div className="badge">
                  <svg className="partnered" viewBox="0 0 16 16" preserveAspectRatio="none">
                    <path
                      className="star"
                      d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z">
                    </path>
                    <path className="icon" d="M10.5906 6.39993L9.19223 7.29993C8.99246 7.39993 8.89258 7.39993 8.69281 7.29993C8.59293 7.19993 8.39317 7.09993 8.29328 6.99993C7.89375 6.89993 7.5941 6.99993 7.29445 7.19993L6.79504 7.49993L4.29797 9.19993C3.69867 9.49993 2.99949 9.39993 2.69984 8.79993C2.30031 8.29993 2.50008 7.59993 2.99949 7.19993L5.99598 5.19993C6.79504 4.69993 7.79387 4.49993 8.69281 4.69993C9.49188 4.89993 10.0912 5.29993 10.5906 5.89993C10.7904 6.09993 10.6905 6.29993 10.5906 6.39993Z"></path>
                    <path className="icon" d="M13.4871 7.79985C13.4871 8.19985 13.2874 8.59985 12.9877 8.79985L9.89135 10.7999C9.29206 11.1999 8.69276 11.3999 7.99358 11.3999C7.69393 11.3999 7.49417 11.3999 7.19452 11.2999C6.39545 11.0999 5.79616 10.6999 5.29674 10.0999C5.19686 9.89985 5.29674 9.69985 5.39663 9.59985L6.79499 8.69985C6.89487 8.59985 7.09463 8.59985 7.19452 8.69985C7.39428 8.79985 7.59405 8.89985 7.69393 8.99985C8.09346 8.99985 8.39311 8.99985 8.69276 8.79985L9.39194 8.39985L11.3896 6.99985L11.6892 6.79985C12.1887 6.49985 12.9877 6.59985 13.2874 7.09985C13.4871 7.39985 13.4871 7.59985 13.4871 7.79985Z"></path>
                  </svg>
                </div>
              </div>
              <div className="description">{guild.description !== null ? guild.description : 'No description'}</div>
            </div>
          </div>
          <div className="progress-bar">
            <header>
              <div className="goal">
                <svg
                  className="nitro"
                  aria-hidden="false"
                  width="16" height="16"
                  viewBox="0 0 16 15.2">
                  <path
                    fill="#4f545c"
                    fillRule="evenodd"
                    d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z">
                  </path>
                </svg>
                <div className="icon">
                  <svg
                    aria-hidden="false"
                    width="8"
                    height="16"
                    viewBox="0 0 6 11">
                    <g
                      fill="currentColor"
                      fillRule="evenodd">
                      <path d="M3 0.625305L0 3.62531V7.62531L3 10.6253L6 7.62531V3.62531L3 0.625305ZM5 7.24531L3 9.24531L1 7.24531V4.04531L3 2.04531L5 4.04531V7.24531Z"></path>
                      <path d="M3.76 4.21526L3 3.45526L2 4.45526V5.97526L3.76 4.21526Z"></path>
                      <path d="M2.28003 7.11532L3.00003 7.83532L4.00003 6.83532V5.39532L2.28003 7.11532Z"></path>
                    </g>
                  </svg>
                </div>
                <b className="goal">Goal: Level {guild.premium_tier + 1}</b>
              </div>
              <div className="count">
                <b>{guild.premium_subscription_count}/{premium_subscription_count_goal[guild.premium_tier]}</b> boosts</div>
            </header>
            <div className="bar">
              <div className="progress" style={{ width: `${(((guild.premium_subscription_count) - (guild.premium_tier - 1 < 0 ? 0 : premium_subscription_count_goal[guild.premium_tier - 1])) * 100) / (premium_subscription_count_goal[guild.premium_tier] - (guild.premium_tier - 1 < 0 ? 0 : premium_subscription_count_goal[guild.premium_tier - 1]))}%` }}></div>
            </div>
          </div>
          <div className="id">
            <div className="container">
              <h4 className="title">Server ID</h4>
              {guild.id}</div>
            <button onClick={()=>{navigator.clipboard.writeText(guild.id)}}><i className="fa-regular fa-copy" /></button>
          </div>
          <div className="owner">
            {
              owner!==null?
              <img
              src={`https://cdn.discordapp.com/avatars/${owner.id}/${owner.avatar}.webp?size=64`}
              className="avatar" alt='Avatar' />
              :
              <></>
            }
            <div className="name">{owner !== null ? owner.username : ''}#{owner !== null ? owner.discriminator : ''}</div>
            <svg
              aria-hidden="false"
              className="icon"
              viewBox="0 0 16 16">
              <path
                className="crown"
                d="M13.6572 5.42868C13.8879 5.29002 14.1806 5.30402 14.3973 5.46468C14.6133 5.62602 14.7119 5.90068 14.6473 6.16202L13.3139 11.4954C13.2393 11.7927 12.9726 12.0007 12.6666 12.0007H3.33325C3.02725 12.0007 2.76058 11.792 2.68592 11.4954L1.35258 6.16202C1.28792 5.90068 1.38658 5.62602 1.60258 5.46468C1.81992 5.30468 2.11192 5.29068 2.34325 5.42868L5.13192 7.10202L7.44592 3.63068C7.46173 3.60697 7.48377 3.5913 7.50588 3.57559C7.5192 3.56612 7.53255 3.55663 7.54458 3.54535L6.90258 2.90268C6.77325 2.77335 6.77325 2.56068 6.90258 2.43135L7.76458 1.56935C7.89392 1.44002 8.10658 1.44002 8.23592 1.56935L9.09792 2.43135C9.22725 2.56068 9.22725 2.77335 9.09792 2.90268L8.45592 3.54535C8.46794 3.55686 8.48154 3.56651 8.49516 3.57618C8.51703 3.5917 8.53897 3.60727 8.55458 3.63068L10.8686 7.10202L13.6572 5.42868ZM2.66667 12.6673H13.3333V14.0007H2.66667V12.6673Z">
              </path>
            </svg>
          </div>
          <ul className="stats">
            <li>Maximun members: {guild.max_members}</li>
          </ul>
          <div className="assets">
            <div className="banner">
              <b className="title">Banner</b>
              {
                guild.banner === null ?
                  <div className="placeholder">
                  </div>
                  :
                  <img src={`https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.jpg?size=2048`} className="banner" alt={guild.id} />
              }
            </div>
            <div className="splash">
              <b className="title">Splash</b>
              {
                guild.splash === null ?
                  <div className="placeholder">
                  </div>
                  :
                  <img src={`https://cdn.discordapp.com/banners/${guild.id}/${guild.splash}.jpg?size=2048`} className="splash" alt={guild.id} />
              }
            </div>
          </div>
          <div className="emojis">
            <div className="title">{guild.emojis.length} EMOJIS</div>
            { (guild.emojis.length > 0)?
              <div className="container">
              {guild.emojis.map((emoji, i) => {
                return <Emoji key={i} id={emoji.id} animated={emoji.animated} name={emoji.name} />
              })}
              </div>
              : <div className="container title">No hay emojis en este servidor :(</div>
            }
          </div>
          <div className="stickers">
            <div className="title">{guild.stickers.length} STICKERS</div>
              { (guild.stickers.length > 0)?
                <div  className="container">
                  {guild.stickers.map((sticker, i) => {
                    return <Sticker key={i} id={sticker.id} name={sticker.name} />
                  })}
                </div>  
                : <div className="container title">No hay stickers en este servidor :(</div>
              }
          </div>
          <div className="roles">
            <div className="title">{guild.roles.length} ROLES</div>
            <div className="container">
              {guild.roles.map((role, i) => {
                return <Role key={i} color={role.color} name={role.name} />
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}