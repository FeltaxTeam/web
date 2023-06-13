import React from "react";
import { Link } from "react-router-dom";
import { COMMANDS } from "../CommandComponents";
import '../Commands.scss'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const tagIcon = { 'dev': 'dev', 'premium': 'PREMIUM', 'slash': 'SLASH', 'beta': 'BETA' }; //β //<i className="fa-solid fa-crown"></i>
    const list = [];
    for (const i in COMMANDS) {
      list.push(
        <div className='section' key={i}>
          <div className='name in' onClick={
            (e) => {
              const el = document.querySelectorAll(":hover");
              for (let l = 0; l < el.length; l++) {
                if (el[l].classList.contains('name')) {
                  el[l].classList.toggle('in');
                  el[l].classList.toggle('out');
                  return;
                }
              }
            }}>{i}</div>
          <hr />
          <ul>
            {
              COMMANDS[i].map((cmd, j) => {
                return (
                  <Link to={`/commands/${i}#${cmd.name.toLocaleLowerCase()}`} key={`${i}/${cmd.name}`}>
                    <div className="command-car" style={{
                      animationDelay: `${j * 0.2}s`
                    }}>
                      <b className="command">
                        <div className="name">{cmd.name}</div>
                        {
                          !cmd.tags ? '' :
                            <div className="features">
                              {
                                cmd.tags.map((tag: string, i) => {
                                  return <div key={i} className={tag}>{tagIcon[tag]}</div>
                                })
                              }
                            </div>
                        }
                      </b>
                    </div>
                  </Link>
                )
              })
            }
          </ul>
        </div >
      );
    }
    return <>
      <div className="sidebar">
        <ul className='list'>
          {list}
        </ul>
      </div>
    </>;
  }
}