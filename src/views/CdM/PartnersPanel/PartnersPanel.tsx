import React from "react";
import './PartnersPanel.scss';

interface Member {
  name: string;
  surname: string;
  email: string;
  position: string;
  role: string;
  height: string;
  weight: string;
}

const members: Member[] = [
  {
    name: "Aarón",
    surname: "Sánchez Jiménez",
    email: "aaronsjimenez@gmail.com",
    position: "Vent",
    role: "Casteller",
    height: "180",
    weight: "62"
  },
  {
    name: "Rafael",
    surname: "Fernández Rodríguez",
    email: "rafa.08@gmail.com",
    position: "Agulla",
    role: "Casteller",
    height: "187",
    weight: "73"
  },
  {
    name: "Jordi",
    surname: "García Sánchez",
    email: "wfjna",
    position: "Vent",
    role: "Casteller",
    height: "180",
    weight: "62"
  },
  {
    name: "Joan",
    surname: "Alonso Fernández",
    email: "jalonso@gmail.com",
    position: "Tap",
    role: "Casteller",
    height: "157",
    weight: "58"
  },
  {
    name: "Rafael",
    surname: "Fernández Rodríguez",
    email: "rafa.08@gmail.com",
    position: "Agulla",
    role: "Casteller",
    height: "187",
    weight: "73"
  },
  {
    name: "Jordi",
    surname: "García Sánchez",
    email: "wfjna",
    position: "Vent",
    role: "Casteller",
    height: "180",
    weight: "62"
  },
  {
    name: "Joan",
    surname: "Alonso Fernández",
    email: "jalonso@gmail.com",
    position: "Tap",
    role: "Casteller",
    height: "157",
    weight: "58"
  },
  {
    name: "Rafael",
    surname: "Fernández Rodríguez",
    email: "rafa.08@gmail.com",
    position: "Agulla",
    role: "Casteller",
    height: "187",
    weight: "73"
  },
  {
    name: "Jordi",
    surname: "García Sánchez",
    email: "wfjna",
    position: "Vent",
    role: "Casteller",
    height: "180",
    weight: "62"
  },
  {
    name: "Joan",
    surname: "Alonso Fernández",
    email: "jalonso@gmail.com",
    position: "Tap",
    role: "Casteller",
    height: "157",
    weight: "58"
  },
  {
    name: "Rafael",
    surname: "Fernández Rodríguez",
    email: "rafa.08@gmail.com",
    position: "Agulla",
    role: "Casteller",
    height: "187",
    weight: "73"
  },
  {
    name: "Jordi",
    surname: "García Sánchez",
    email: "wfjna",
    position: "Vent",
    role: "Casteller",
    height: "180",
    weight: "62"
  },
  {
    name: "Joan",
    surname: "Alonso Fernández",
    email: "jalonso@gmail.com",
    position: "Tap",
    role: "Casteller",
    height: "157",
    weight: "58"
  },
  {
    name: "Rafael",
    surname: "Fernández Rodríguez",
    email: "rafa.08@gmail.com",
    position: "Agulla",
    role: "Casteller",
    height: "187",
    weight: "73"
  },
  {
    name: "Jordi",
    surname: "García Sánchez",
    email: "wfjna",
    position: "Vent",
    role: "Casteller",
    height: "180",
    weight: "62"
  },
  {
    name: "Joan",
    surname: "Alonso Fernández",
    email: "jalonso@gmail.com",
    position: "Tap",
    role: "Casteller",
    height: "157",
    weight: "58"
  },
  {
    name: "Rafael",
    surname: "Fernández Rodríguez",
    email: "rafa.08@gmail.com",
    position: "Agulla",
    role: "Casteller",
    height: "187",
    weight: "73"
  },
  {
    name: "Jordi",
    surname: "García Sánchez",
    email: "wfjna",
    position: "Vent",
    role: "Casteller",
    height: "180",
    weight: "62"
  },
  {
    name: "Joan",
    surname: "Alonso Fernández",
    email: "jalonso@gmail.com",
    position: "Tap",
    role: "Casteller",
    height: "157",
    weight: "58"
  },
  {
    name: "Rafael",
    surname: "Fernández Rodríguez",
    email: "rafa.08@gmail.com",
    position: "Agulla",
    role: "Casteller",
    height: "187",
    weight: "73"
  },
  {
    name: "Jordi",
    surname: "García Sánchez",
    email: "wfjna",
    position: "Vent",
    role: "Casteller",
    height: "180",
    weight: "62"
  },
  {
    name: "Joan",
    surname: "Alonso Fernández",
    email: "jalonso@gmail.com",
    position: "Tap",
    role: "Casteller",
    height: "157",
    weight: "58"
  }
];

export default class PartnersPanel extends React.Component<{}, {}> {
  render() {
    return (
      <div className="panel">
        <h1>PartnersPanel</h1>
        <div className="columns">
          <div className="column">
            Nombre y Apellidos
          </div>
          <div className="column">
            Email
          </div>
          <div className="column">
            Posición
          </div>
          <div className="column">
            Rol
          </div>
          <div className="column">
            Altura (cm)
          </div>
          <div className="column">
            Peso (kg)
          </div>
        </div>
        <ol className="list">
          {members.map((member, i) => (
            <li key={i} className="member">
              <div className="fullName">
                <div className="name">
                  {member.name}
                </div>
                <div className="surname">
                  {member.surname}
                </div>
              </div>
              <div className="email">
                {member.email}
              </div>
              <div className="position">
                {member.position}
              </div>
              <div className="role">
                {member.role}
              </div>
              <div className="height">
                {member.height}
              </div>
              <div className="weight">
                {member.weight}
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}