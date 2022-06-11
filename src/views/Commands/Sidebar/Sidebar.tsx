import React from "react";
import { Link } from "react-router-dom";
import { COMMANDS } from "../CommandComponents";
import '../Commands.scss'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const tagIcon = { 'dev': 'dev', 'premium': <i className="fa-solid fa-crown"></i>, 'slash': '/', 'beta': 'β' };
    let list = [];
    for (let i in COMMANDS) {
      list.push(
        <div className='section' key={i}>
          <div className='name'>{i}</div>
          <ul>
            {
              COMMANDS[i].map((cmd) => {
                return (
                  <Link to={`/commands/${i}#${cmd.name.toLocaleLowerCase()}`} key={`${i}/${cmd.name}`}>
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
                  </Link>
                )
              })
            }
          </ul>
        </div>
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