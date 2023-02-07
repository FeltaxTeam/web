import React from 'react';
import './Twitch.scss';

interface Props { }

interface State {
  twitchAnnounceStyle: string;
}

export default class Twitch extends React.Component<Props, State> {
  state: State = {
    twitchAnnounceStyle: 'default',
  }
  render() {
    return (
      <div className='twitch'>
        <section className="stream">
          <iframe
            src={`https://player.twitch.tv/?channel=gemita&parent=${window.location.host.replace(`:3000`, '').replace(':', '%3A')}&muted=false`}
            allowFullScreen
            frameBorder="0"
            title='twitch-embed'
            id="twitch-stream-embed"
          />
          <div className="panel">
            <div className="header">
              <div className="avatar">
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/f16985d4-df35-4cb9-ae59-d2dcc1905153-profile_image-300x300.png" alt="avatar" />
              </div>
              <h3 className="title">Streamer's Control Panel</h3>
              <div className="streamStatus"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <i className="fa-solid fa-podcast"
                  style={{
                    color: '#F00',
                    fontSize: '30px',
                  }}
                ></i>
              </div>
            </div>
            <main className="body">
              <div className="announcement">
                <h3 className="title">Make an Announcement</h3>
                <textarea className="textarea" id='TwitchAnnouncementContent' placeholder="Enter your announcement here..." onChange={
                  (e) => {
                    for (let i = 0; i < document.getElementsByClassName('announce').length; i++) {
                      document.getElementsByClassName('announce')[i].getElementsByClassName('message')[0].innerHTML = e.target.value;
                    }
                  }
                } />
                <div role="textbox" data-a-target="chat-input" data-test-selector="chat-input" aria-label="Enviar un mensaje" data-placeholder="Enviar un mensaje" className="chat-wysiwyg-input__editor" data-slate-editor="true" data-slate-node="value" ><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" className="ScTransitionBase-sc-eg1bd7-0 fcjsVf tw-transition" data-a-target="chat-input-text"><span data-slate-zero-width="n" data-slate-length="0"><br /></span></span></span></div></div>
                <div className="colors">
                  <div
                    className={`color default ${this.state.twitchAnnounceStyle === 'default' ? 'selected' : ''}`}
                    onClick={(e) => {
                      this.setState({
                        twitchAnnounceStyle: 'default',
                      });
                    }}
                  />
                  <div
                    className={`color blue ${this.state.twitchAnnounceStyle === 'blue' ? 'selected' : ''}`}
                    onClick={(e) => {
                      this.setState({
                        twitchAnnounceStyle: 'blue',
                      });
                    }}
                  />
                  <div
                    className={`color green ${this.state.twitchAnnounceStyle === 'green' ? 'selected' : ''}`}
                    onClick={(e) => {
                      this.setState({
                        twitchAnnounceStyle: 'green',
                      });
                    }}
                  />
                  <div
                    className={`color orange ${this.state.twitchAnnounceStyle === 'orange' ? 'selected' : ''}`}
                    onClick={(e) => {
                      this.setState({
                        twitchAnnounceStyle: 'orange',
                      });
                    }}
                  />
                  <div
                    className={`color purple ${this.state.twitchAnnounceStyle === 'purple' ? 'selected' : ''}`}
                    onClick={(e) => {
                      this.setState({
                        twitchAnnounceStyle: 'purple',
                      });
                    }}
                  />
                </div>
                <div className="examples">
                  <div className={`announce ${this.state.twitchAnnounceStyle}`}>
                    <h3 className="title">Announcement</h3>
                    <p className="message">
                    </p>
                  </div>
                </div>
                <div className="buttons">
                  <button className="button">Submit</button>
                  <button className="button">Cancel</button>
                </div>
              </div>
            </main>
          </div>
          <iframe
            title='Twitch Chat'
            id="twitch-chat-embed"
            sandbox='allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-modals'
            src="https://www.twitch.tv/embed/gemita/chat?parent=localhost&amp;darkpopout"
            frameBorder="0"
          />
        </section>
      </div>
    );
  }
}
