import React from "react";
import './Select.scss';
import { GameSchema } from '../../Classes/GameSchema';

type MyProps = { game: GameSchema };
type MyState = { game: GameSchema };
export default class Select extends React.Component<MyProps, MyState> {
  render() {
    const player = this.props.game?.players[0];
    return (
      <div key={player?.name} className="select">
        <h1 className="player">
          <i className="fa-regular fa-circle-user"></i>
          <span className="name">{player?.name}</span>
          <button onClick={() => {player?.setName('Test');this.setState({})}}></button>
        </h1>
        <ul className="options">
          <li className="option dare">
            <i className="fa-solid fa-question"></i>
          </li>
          <li className="option truth">
            <i className="fa-solid fa-exclamation"></i>
          </li>
          <li className="option dare">
            <i className="fa-solid fa-question"></i>
          </li>
          <li className="option truth">
            <i className="fa-solid fa-exclamation"></i>
          </li>
        </ul>
      </div>
    )
  }
}