import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home/Home';
import Iron from './Iron/Iron';
import NotFoundTeamMember from './NotFoundTeamMember/NotFoundTeamMember';
import TheBlueBanana from './TheBlueBanana/TheBlueBanana';
import './Team.css'

export default function Team() {
  return (
    <>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iron" element={<Iron />} />
          <Route path="/thebluebanana" element={<TheBlueBanana />} />
          <Route path='*' element={<NotFoundTeamMember />} />
        </Routes>
      </React.Fragment>
    </>
  );
}