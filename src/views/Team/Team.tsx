import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Iron from './Iron/Iron';
import NotFoundTeamMember from './NotFoundTeamMember/NotFoundTeamMember';
import TheBlueBanana from './TheBlueBanana/TheBlueBanana';
import './Team.css'

export default function Team() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="iron" element={<Iron />} />
        <Route path="thebluebanana" element={<TheBlueBanana />} />
      </Routes>
    </>
  );
}