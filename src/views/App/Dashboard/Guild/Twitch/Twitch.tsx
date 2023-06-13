import React from 'react';
import './Twitch.scss';

interface Props { }

interface State {
  twitchAnnounceStyle: string;
  message: string;
}

export default class Twitch extends React.Component<Props, State> {
  state: State = {
    twitchAnnounceStyle: 'default',
    message: '',
  }
  render() {
    return (
      <div className='twitch'>
        <section className="stream">
          <iframe
            src={`https://player.twitch.tv/?channel=belenjurado&parent=${window.location.host.replace(`:3000`, '').replace(':', '%3A')}&muted=false`}
            allowFullScreen
            frameBorder="0"
            title='twitch-embed'
            id="twitch-stream-embed"
          />
          <div className="panel">
            <div className="header">
              <div className="avatar">
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/8f6e2532-5a7b-4151-98dd-424123a52cf2-profile_image-50x50.png" alt="avatar" />
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
                <div className="rich-input-container">
                  {
                    this.state.message.length === 0 && (
                      <div className="chat-wysiwyg-input__placeholder">
                        Enviar un mensaje
                      </div>
                    )
                  }
                  <div
                    role="textbox"
                    data-a-target="chat-input"
                    z-index="-1"
                    tabIndex={0}
                    test-selector="chat-input"
                    data-test-selector="chat-input"
                    aria-label="Enviar un mensaje"
                    data-placeholder="Enviar un mensaje"
                    className="chat-wysiwyg-input__editor"
                    data-slate-editor="true"
                    data-slate-node="value"
                    contentEditable="true"
                    onInput={
                      (e) => {
                        this.setState({
                          message: (e.target as HTMLElement).innerText,
                        });
                      }
                    }
                  >
                    <div data-slate-node="element">
                      <span data-slate-node="text">
                        <span
                          data-slate-leaf="true"
                          className="ScTransitionBase-sc-eg1bd7-0 fcjsVf tw-transition"
                          data-a-target="chat-input-text">
                          <span {
                            ...{
                              'data-slate-zero-width': this.state.message.length === 0 ? 'n' : undefined,
                              'data-slate-length': this.state.message.length === 0 ? '0' : undefined,
                              'data-slate-string': this.state.message.length !== 0 ? 'true' : undefined,
                            }
                          }>
                            {
                              this.state.message.length === 0 && (
                                <React.Fragment >
                                  &#xFEFF;
                                  <br />
                                </React.Fragment>
                              )
                            }
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
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
                    <h3 className="title">
                      <figure
                        className="ScFigure-sc-1hrsqw6-0 geZUHx tw-svg"
                        style={{
                          margin: '0 5px 0 0',
                        }}
                      >
                        <svg
                          width="18px"
                          height="20px"
                          version="1.1"
                          viewBox="0 0 20 20"
                          x="0px"
                          y="0px"
                          className="ScSvg-sc-1hrsqw6-1 hdNNzQ">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            style={{
                              fill: '#fff',
                            }}
                            d="M11 14l7 4V2l-7 4H4a2 2 0 00-2 2v4a2 2 0 002 2h2v4h2v-4h3zm1-6.268l4-2.286v9.108l-4-2.286V7.732zM10 12H4V8h6v4z">
                          </path>
                        </svg>
                      </figure>
                      Announcement
                    </h3>
                    <p className="message">
                      {this.state.message}
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
            src="https://www.twitch.tv/embed/belenjurado/chat?parent=localhost&amp;darkpopout"
            frameBorder="0"
          />
        </section>
      </div>
    );
  }
}
