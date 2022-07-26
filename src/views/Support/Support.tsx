import React from 'react';
import './Support.scss';

export default function Support() {
  return (
    <>
      <React.Fragment>
        <div className="support-body">
          <div className="botlist">
            <p className="description">
              You can also support us by voting for the BOT in one of the following BotList.
            </p>
            <div className="botlist-links">
              <a href="https://discordlist.gg/bot/568435616153337916">DiscordList.gg</a>
              <a href="https://top.gg/bot/568435616153337916">Top.gg</a>
              <a href="https://discordthings.com/bot/568435616153337916">DiscordThings.com</a>
            </div>
          </div>
          <div className="discord-nitro">
            <h1 className="title">Support us boosting our Discord server!</h1>
            <p className="description">
              <svg className="nitro-badge" viewBox='0 0 8 12'>
                <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z"></path>
                <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z"></path>
              </svg>
              Join our support server and boost it one or more times to help us.
            </p>
            <a href="https://www.patreon.com/bePatron?u=70438277" className='discord PremiumSourceButton' target="_blank" rel="noreferrer">
              <i className="fa-brands fa-discord" />Join Discord Server
            </a>
          </div>
          <div className="patreon">
            <h1 className="title">Become a Patron to support us economically!</h1>
            <a href="https://www.patreon.com/bePatron?u=70438277" className='patreon PremiumSourceButton' target="_blank" rel="noreferrer">
              <i className="fa-brands fa-patreon" />Become a Patron
            </a>
          </div>
          <div className="ko-fi">
            <h1 className="title">Buy me a coffee to help keep us working!</h1>
            <a href="https://ko-fi.com/feltax" className='ko-fi PremiumSourceButton' target="_blank" rel="noreferrer">
              <img className='icon' alt="Ko-Fi" src="assets/ko-fi.png" />
              <span className="text">Buy Me a Coffee</span>
            </a>
          </div>
          <table>
            <tr className="header">
              <th>Feature</th>
              <th>Free</th>
              <th>Premium</th>
            </tr>
            <tr className="feature">
              <td>Discord Exclusive Role</td>
              <td>
                <i className="fa-solid fa-times" />
              </td>
              <td>
                <i className="fa-solid fa-check" />
              </td>
            </tr>
            <tr className="feature">
              <td>Discord Exclusive Role</td>
              <td>
                <i className="fa-solid fa-times" />
              </td>
              <td>
                <i className="fa-solid fa-check" />
              </td>
            </tr>
            <tr className="feature">
              <td>Discord Exclusive Role</td>
              <td>
                <i className="fa-solid fa-times" />
              </td>
              <td>
                <i className="fa-solid fa-check" />
              </td>
            </tr>
            <tr className="feature">
              <td>Discord Exclusive Role</td>
              <td>
                <i className="fa-solid fa-times" />
              </td>
              <td>
                <i className="fa-solid fa-check" />
              </td>
            </tr>
            <tr className="feature">
              <td>Discord Exclusive Role</td>
              <td>
                <i className="fa-solid fa-times" />
              </td>
              <td>
                <i className="fa-solid fa-check" />
              </td>
            </tr>
          </table>
        </div>
      </React.Fragment>
    </>
  );
}