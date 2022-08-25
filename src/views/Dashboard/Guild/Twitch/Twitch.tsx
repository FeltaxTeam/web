import React from 'react';
import './Twitch.scss';

interface Props {}

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
            src="https://player.twitch.tv/?channel=gemita&parent=localhost&muted=false"
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
              <div className="streamStatus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  width="30px"
                  height="30px"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#eb0400"
                    stroke="none">
                    <path d="M1130 4261 c-82 -26 -149 -97 -276 -291 -216 -331 -347 -684 -406 -1095 -17 -118 -17 -512 0 -630 68 -480 252 -918 530 -1267 75 -93 122 -122 202 -122 124 1 210 89 210 214 0 60 -14 89 -90 189 -319 420 -478 939 -440 1439 32 435 177 816 440 1163 32 41 65 89 74 107 32 63 14 175 -37 230 -47 51 -149 82 -207 63z" />
                    <path d="M3877 4256 c-87 -32 -137 -97 -145 -191 -5 -66 10 -102 91 -207 223 -288 374 -653 422 -1015 20 -152 20 -414 0 -566 -48 -363 -198 -724 -423 -1016 -80 -105 -95 -140 -90 -207 6 -70 36 -123 90 -160 81 -55 179 -52 251 7 85 70 276 359 373 564 104 220 184 484 221 732 25 167 25 571 -1 733 -67 427 -232 825 -480 1157 -88 118 -132 157 -192 172 -54 14 -70 13 -117 -3z" />
                    <path d="M3379 3424 c-90 -27 -159 -136 -145 -226 3 -21 28 -82 55 -135 89 -177 122 -308 122 -493 1 -185 -29 -316 -113 -489 -56 -116 -65 -157 -49 -219 42 -155 252 -204 362 -85 67 71 162 311 198 494 63 332 20 643 -133 960 -62 129 -101 173 -171 195 -58 17 -67 17 -126 -2z" />
                    <path d="M1575 3394 c-53 -27 -86 -67 -135 -164 -195 -388 -208 -853 -35 -1257 85 -199 149 -263 259 -263 127 1 229 111 213 231 -3 20 -27 83 -55 140 -85 179 -113 296 -113 484 0 185 31 316 117 490 37 75 44 100 44 148 0 86 -38 150 -112 188 -46 24 -141 25 -183 3z" />
                    <path d="M2487 2980 c-222 -39 -383 -262 -348 -481 38 -233 257 -396 482 -360 282 46 442 341 324 598 -79 174 -271 276 -458 243z" />
                  </g>
                </svg>
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
