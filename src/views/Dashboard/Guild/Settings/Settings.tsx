import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './Settings.css'

export default function Guild() {

    return (
      <>
        <React.Fragment>
          <div className="interface">
            <div className="avatar">
              <img className="avatar" src="https://cdn.discordapp.com/avatars/568435616153337916/5fa72d236cd219c905b089403619935e.png?size=1024" />
            </div>
            <div className="custom">
              <input type="text" className="nickname" value="FΞLTΛX" />
              <input type="text" className="prefix" value="f-" />

            </div>
          </div>
        </React.Fragment>
      </>
    );
  }