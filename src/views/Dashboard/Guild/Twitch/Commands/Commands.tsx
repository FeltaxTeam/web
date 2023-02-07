import React from "react";

export default class Commands extends React.Component {
  render() {
    return (
      <>
        <div className="commands">
          <div className="container">
            <div className="title">Commands</div>
            <div className="description">
              <p>
                You can use the following commands to interact with the bot. You
                can also use the commands in the chat of your Twitch channel.
              </p>
            </div>
            <div className="commands-list">
              <div className="command">
                <div className="name">!add</div>
                <div className="description">
                  <p>
                    Add a song to the queue. You can add songs by using the search
                    bar or by using the YouTube link.
                  </p>
                </div>
              </div>
              <div className="command">
                <div className="name">!clear</div>
                <div className="description">
                  <p>Clear the queue.</p>
                </div>
              </div>
              <div className="command">
                <div className="name">!loop</div>
                <div className="description">
                  <p>Loop the current song.</p>
                </div>
              </div>
              <div className="command">
                <div className="name">!loopqueue</div>
                <div className="description">
                  <p>Loop the queue.</p>
                </div>
              </div>
              <div className="command">
                <div className="name">!move</div>
                <div className="description">
                  <p>Move a song in the queue.</p>
                </div>
              </div>
              <div className="command">
                <div className="name">!nowplaying</div>
                <div className="description">
                  <p>Show the current song.</p>
                </div>
              </div>
              <div className="command">
                <div className="name">!pause</div>
                <div className="description">
                  <p>Pause the current song.</p>
                </div>
              </div>
              <div className="command">
                <div className="name">!play</div>
                <div className="description">
                  <p>Play the current song.</p>
                </div>
              </div>
              <div className="command">
                <div className="name">!queue</div>
                <div className="description">
                  <p>Show the queue.</p>
                </div>
              </div>
              <div className="command">
                <div className="name">!remove</div>
                <div className="description">
                  <p>Remove a song from the queue.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
