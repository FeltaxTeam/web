import React from "react";
import './Acknowledgements.scss';

export function Acknowledgements() {
  return (
    <React.Fragment>
      <ol className="brands">
        <li className="links">
          https://ko-fi.com/
          https://more.ko-fi.com/brand-assets
        </li>
        <li className="links">
          https://patreon.com/
        </li>
        <li className="links">
          https://discord.com/
          https://discord.com/branding
        </li>
        <li className="links">
          https://heroku.com/
          https://brand.heroku.com/
        </li>
        <li className="links">
          https://mongodb.com/
          https://mongodb.com/brand-resources
        </li>
      </ol>
      <ol className="dependices">
        <li className="dependency">
          <label>React.JS</label>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="website">Website</a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="npm">NPM</a>
        </li>
      </ol>
    </React.Fragment>
  )
}