import React from "react";
import './Home.scss';

export default class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div className="home">
        <section className="stats" style={{
          backgroundImage: "url(https://castellersdemollet.cat/wp-content/uploads/2014/08/molletdefons-1500x1063.jpg)",
        }}>
          <span className="castell">
            <img src="http://www.castellersdemollet.cat/wp-content/uploads/2014/09/castellerstrans-495x400.png" alt="" />
          </span>
          <div className="statsContainer">
            <div className="stat">
              <div className="statTitle">
                Persones
              </div>
              <span className="statValue">
                160
              </span>
            </div>
            <div className="stat">
              <div className="statTitle">
                Castells Carregats
              </div>
              <span className="statValue">
                1800
              </span>
            </div>
            <div className="stat">
              <div className="statTitle">
                Castells Descarregats
              </div>
              <span className="statValue">
                1600
              </span>
            </div>
            <div className="stat">
              <div className="statTitle">
                Millor Castell
              </div>
              <span className="statValue">
                5de7
              </span>
            </div>
          </div>
        </section>
        <section className="rrss">
          <iframe
            className="facebook"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcastellersdemollet&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            width="340"
            height="500"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
          <a
            className="twitter"
            data-lang="es"
            data-width="340"
            data-height="500"
            href="https://twitter.com/CastellerMollet?ref_src=twsrc%5Etfw">
            Tweets by CastellerMollet
          </a>
          <iframe
            className="instagram"
            width="340"
            height="500"
            src="http://instagram.com/castellersdemollet/embed"
            frameBorder="0" />
        </section>
      </div >
    );
  }
}