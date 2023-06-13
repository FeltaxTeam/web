import React from "react";
import './Asistencias.scss';

export default class Asistencias extends React.Component<{}, {}> {
  render() {
    return (
      <div className="asistencias">
        <header>
          <h1>Assistències</h1>
        </header>
        <div className="list confirmed">
          <h2>Confirmats <i className="fa-regular fa-circle-check"></i></h2>
          <div className="counter">23/145</div>
          <ol>
            <li>
              <div className="name">
                <div className="first">
                  Joan
                </div>
                <div className="last">
                  Pujol
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="list absent">
          <h2>Absents <i className="fa-regular fa-circle-xmark"></i></h2>
          <ol>

          </ol>
        </div>
        <div className="list pending">
          <h2>Per Confirmar <i className="fa-regular fa-clock"></i></h2>
          <ol>
            <i className="fa-solid fa-clock-rotate-left"></i>
          </ol>
        </div>
      </div>
    );
  }
}