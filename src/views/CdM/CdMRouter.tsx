import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navigate from "../../utility/navigation";
import NotFoundElement from "../404/404";
import Auth from "../Auth/Auth";
import CdM from "./CdM";
import Ensayos from "./Ensayos/Ensayos";
import Historic from "./Historic/Historic";
import Home from "./Home/Home";
import Asistencias from "./PartnersPanel/Asistencias/Asistencias";
import PartnersPanel from "./PartnersPanel/PartnersPanel";
import { Calendar } from "./Calendar/Calendar";

export default class CdMRouter extends React.Component<{}, {}> {
  render() {
    return (
      <Routes>
        <Route path='*' element={<Navigate to="/404" />} />
        <Route path='/404' element={<NotFoundElement />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/logout" element={<CdM />} />
        <Route path="/" element={<Home />} />
        <Route path="/panel" element={<PartnersPanel />} />
        <Route path="/assajos" element={<Ensayos />} />
        <Route path="/assistencies" element={<Asistencias />} />
        <Route path="/historic" element={<Historic />} />
        <Route path="/calendari" element={<Calendar />} />
      </Routes>
    );
  }
}