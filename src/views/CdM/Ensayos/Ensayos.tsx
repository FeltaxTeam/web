import React from "react";
import './Ensayos.scss'

export default class Ensayos extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: null,
    };
  }
  render() {
    return (
      <div className="ensayos">
        <div className="ensayo">
          <header>
            <div className="name">
              Ensayo Normal
            </div>
            <div className="date">
              12/12/2020
            </div>
            <div className="schedule">
              12:00 - 14:00
            </div>
            <button onClick={
              (e) => {
                let element = e.target as HTMLElement;
                let header = element.parentElement as HTMLElement;
                let content = element.parentElement.parentElement.querySelector('.content');
                if (content) {
                  content.classList.toggle('open');
                }
                if (!content.classList.contains('open')) {
                  header.style.borderBottomWidth = '0';
                } else {
                  header.style.borderBottomWidth = '1px';
                }
              }
            }>+</button>
          </header>
          <div className="content">
            <div className="element">
              <img src="https://fempinya.cat/telegram/onvaig.php?c=1496335346&q=24534&i=74c220271c5146a422cb69933f8f3052" alt="4de7" />
              <div className="label">
                4de7
              </div>
            </div>
          </div>
        </div>
        <div className="ensayo">
          <header>
            <div className="name">
              Ensayo Normal
            </div>
            <div className="date">
              12/12/2020
            </div>
            <div className="schedule">
              12:00 - 14:00
            </div>
            <button onClick={
              (e) => {
                let element = e.target as HTMLElement;
                let header = element.parentElement as HTMLElement;
                let content = element.parentElement.parentElement.querySelector('.content');
                if (content) {
                  content.classList.toggle('open');
                }
                if (!content.classList.contains('open')) {
                  header.style.borderBottomWidth = '0';
                } else {
                  header.style.borderBottomWidth = '1px';
                }
              }
            }>+</button>
          </header>
          <div className="content">
            <div className="element">
              <img src="https://fempinya.cat/telegram/onvaig.php?c=1496335346&q=24534&i=74c220271c5146a422cb69933f8f3052" alt="4de7" />
              <div className="label">
                4de7
              </div>
            </div>
          </div>
        </div>
        <div className="ensayo">
          <header>
            <div className="name">
              Ensayo Normal
            </div>
            <div className="date">
              12/12/2020
            </div>
            <div className="schedule">
              12:00 - 14:00
            </div>
            <button onClick={
              (e) => {
                let element = e.target as HTMLElement;
                let header = element.parentElement as HTMLElement;
                let content = element.parentElement.parentElement.querySelector('.content');
                if (content) {
                  content.classList.toggle('open');
                }
                if (!content.classList.contains('open')) {
                  header.style.borderBottomWidth = '0';
                } else {
                  header.style.borderBottomWidth = '1px';
                }
              }
            }>+</button>
          </header>
          <div className="content">
            <div className="element">
              <img src="https://fempinya.cat/telegram/onvaig.php?c=1496335346&q=24534&i=74c220271c5146a422cb69933f8f3052" alt="4de7" />
              <div className="label">
                4de7
              </div>
            </div>
          </div>
        </div>
        <div className="ensayo">
          <header>
            <div className="name">
              Ensayo Normal
            </div>
            <div className="date">
              12/12/2020
            </div>
            <div className="schedule">
              12:00 - 14:00
            </div>
            <button onClick={
              (e) => {
                let element = e.target as HTMLElement;
                let header = element.parentElement as HTMLElement;
                let content = element.parentElement.parentElement.querySelector('.content');
                if (content) {
                  content.classList.toggle('open');
                }
                if (!content.classList.contains('open')) {
                  header.style.borderBottomWidth = '0';
                } else {
                  header.style.borderBottomWidth = '1px';
                }
              }
            }>+</button>
          </header>
          <div className="content">
            <div className="element">
              <img src="https://fempinya.cat/telegram/onvaig.php?c=1496335346&q=24534&i=74c220271c5146a422cb69933f8f3052" alt="4de7" />
              <div className="label">
                4de7
              </div>
            </div>
          </div>
        </div>
        <div className="ensayo">
          <header>
            <div className="name">
              Ensayo Normal
            </div>
            <div className="date">
              12/12/2020
            </div>
            <div className="schedule">
              12:00 - 14:00
            </div>
            <button onClick={
              (e) => {
                let element = e.target as HTMLElement;
                let header = element.parentElement as HTMLElement;
                let content = element.parentElement.parentElement.querySelector('.content');
                if (content) {
                  content.classList.toggle('open');
                }
                if (!content.classList.contains('open')) {
                  header.style.borderBottomWidth = '0';
                } else {
                  header.style.borderBottomWidth = '1px';
                }
              }
            }>+</button>
          </header>
          <div className="content">
            <div className="element">
              <img src="https://fempinya.cat/telegram/onvaig.php?c=1496335346&q=24534&i=74c220271c5146a422cb69933f8f3052" alt="4de7" />
              <div className="label">
                4de7
              </div>
            </div>
          </div>
        </div>
        <div className="ensayo">
          <header>
            <div className="name">
              Ensayo Normal
            </div>
            <div className="date">
              12/12/2020
            </div>
            <div className="schedule">
              12:00 - 14:00
            </div>
            <button onClick={
              (e) => {
                let element = e.target as HTMLElement;
                let header = element.parentElement as HTMLElement;
                let content = element.parentElement.parentElement.querySelector('.content');
                if (content) {
                  content.classList.toggle('open');
                }
                if (!content.classList.contains('open')) {
                  header.style.borderBottomWidth = '0';
                } else {
                  header.style.borderBottomWidth = '1px';
                }
              }
            }>+</button>
          </header>
          <div className="content">
            <div className="element">
              <img src="https://fempinya.cat/telegram/onvaig.php?c=1496335346&q=24534&i=74c220271c5146a422cb69933f8f3052" alt="4de7" />
              <div className="label">
                4de7
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}