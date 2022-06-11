import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GameSchema } from '../Classes/GameSchema';
import { PlayerSchema } from '../Classes/PlayerSchema';
import './Home.scss'
// Mantener "XD" para que no se borre la esencia de la web :)
export default function Home(props: { game: GameSchema }) {
  const [players, setPlayers] = useState([
    {
      name: 'A',
      gender: false
    },
    {
      name: 'V',
      gender: false
    },
    {
      name: 'J',
      gender: false
    },
    {
      name: 'D',
      gender: false
    },
    {
      name: 'N 1',
      gender: true
    },
    {
      name: 'N 2',
      gender: true
    },
  ])
  console.log(props.game)
  /*
  const [game, setGame] = useState(props.game)
  */
  function addComponent() {
    if (players.length < 10 && (players.length === 0 || players[players.length - 1].name.trim() !== '')) {
      setPlayers([...players, { name: '', gender: false }])
      props.game.addPlayer(new PlayerSchema('', false))
      console.dir('Updated Game', props.game)
    }
  }
  const handleRemoveItem = (e) => {
    if (players.length === 1) return;
    const name = e.target.name;
    console.log(`Removed (${name})`)
    console.log(players.filter(player => player.name !== name));
    delete players[name];
    props.game.removePlayer(name);
    setPlayers(players.filter(player => player.name !== name));
  };
  const openSettings = (e) => {
    let modal = document.getElementById('modal');
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
  }
  return (
    <>
      <React.Fragment>
        <main className='home'>
          <div className="title">
            <h1><span>Truth</span>or<span>Dare</span></h1>
          </div>
          <ul className="players">
            {
              players.map((item, i) => (
                <li className="player" key={i}>
                  {
                    i !== 0 ?
                      <button className='removePlayer' onClick={handleRemoveItem} name={item.name !== null ? item.name : ''}></button>
                      :
                      <></>
                  }
                  <div className="name">
                    <input type="text" key={item.name !== '' ? item.name : ''} autoComplete="off" placeholder='Nombre' defaultValue={item.name !== '' ? item.name : ''} onChange={
                      (e) => {
                        players[i].name = e.target.value.trim();
                        props.game.players[i].setName(e.target.value.trim());
                        console.log(players)
                        console.log(props.game)
                        console.log(`Updated Player ${i + 1} (${e.target.value.trim()})`)
                      }
                    } />
                  </div>
                  <div className="gender">
                    <label>
                      <input key={item.gender ? 'f' : 'm'} type="checkbox" className='change'
                        onChange={
                          (e) => {
                            players[i].gender = e.target.checked;
                            props.game.players[i].setGender(e.target.checked)
                            console.log(players)
                            console.log(props.game)
                          }
                        } />
                      <i className="fa-solid fa-child"></i>
                      <i className="fa-solid fa-child-dress"></i>
                    </label>
                  </div>
                </li>
              ))
            }
          </ul>
          <div className="set">
            <button onClick={addComponent} className='addPlayer' ></button>
            <button className="settings" onClick={openSettings}>
              <div className="icon">
                <i className="fa-solid fa-gear"></i>
              </div>
            </button>
          </div>
          <button className='startGame' onClick={() => {
            props.game.startGame();
            console.log(props.game)
          }}><Link to='/game'>Start</Link></button>
          <div id="modal">
            <div className="box">
              <div className="title">
                <h1>Settings</h1>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    </>
  );
}