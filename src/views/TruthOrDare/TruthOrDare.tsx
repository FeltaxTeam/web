import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navigate from '../../utility/navigation';
import NotFoundElement from '../404/404';
import { GameSchema } from './Classes/GameSchema';
import { PlayerSchema } from './Classes/PlayerSchema';
import Game from './Game/Game';
import Select from './Game/Select/Select';
import Home from './Home/Home';
import './TruthOrDare.scss'

export default function TruthOrDare() {
  const [game, setGame] = useState(null);
  useEffect(() => {
    const x = new GameSchema([
      new PlayerSchema('A', false),
      new PlayerSchema('V', false),
      new PlayerSchema('J', false),
      new PlayerSchema('D', false),
      new PlayerSchema('N 1', true),
      new PlayerSchema('N 2', true),
    ]);
    localStorage.setItem('game', JSON.stringify(x))
    if (localStorage.getItem('game') !== null) {
      setGame(x)
    } else {
      setGame(null)
    }
  }, []);
  if (game !== null) console.log(game);
  return (
    <>
      <React.Fragment>
        <div className="page">
          <Router>
            <Routes>
              <Route path='*' element={<Navigate to="/404" />} />
              <Route path='/404' element={<NotFoundElement />} />
              <Route path="/" element={<Home game={game} />} />
              <Route path="/game" element={<Game game={game} />} />
              <Route path="/tbd" element={<Select game={game} />} />
            </Routes>
          </Router>
        </div>
      </React.Fragment>
    </>
  );
}