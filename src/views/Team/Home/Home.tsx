import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { fetchWorkerProfile } from '../../../utility/fetching';

export default function Home() {

  let [descState, setDescState] = useState({iron:'', thebluebanana:''});
  let descriptions={iron:'', thebluebanana:''};
  useEffect(()=>{
    async function getIt(){
      for (var i in descriptions){
        descriptions[i] = (await fetchWorkerProfile(i)).description;
      }
      console.dir(descriptions);
      setDescState(descriptions);
    }
    getIt();
  }, []);

  return (
    <>
      <React.Fragment>
        <div className="team-page">
          <div className="cards">
            <Link to="/team/iron" className='card'>
              <div className="card">
                <img src="https://cdn.discordapp.com/banners/438390132538605589/535ebf3dd92511c4ea63b56d6049fd61.png?size=300" alt="Banner" className="banner" />
                <div className="header">
                  <img src="https://cdn.discordapp.com/avatars/438390132538605589/857116f173d9036aca601fc79adbc544.webp?size=512" alt="Avatar" className="avatar" />
                  <div className="user">
                    <h2 className="username">Iron</h2>
                    <h2 className="role">Lead Developer</h2>
                  </div>
                </div>
                <hr />
                <p className="bio">{descState['iron']}</p>
              </div>
            </Link>
            <Link to="/team/thebluebanana" className='card'>
              <div className="card">
                <img src="https://cdn.discordapp.com/banners/438390132538605589/535ebf3dd92511c4ea63b56d6049fd61.png?size=300" alt="Banner" className="banner" />
                <div className="header">
                  <img src="https://cdn.discordapp.com/avatars/417407496286633995/eea944101556b77a8db861d55d3471ea.webp?size=512" alt="Avatar" className="avatar" />
                  <div className="user">
                    <h2 className="username">TheBlueBanana</h2>
                    <h2 className="role">Developer</h2>
                  </div>
                </div>
                <hr />
                <p className="bio">{descState['thebluebanana']}</p>
              </div>
            </Link>
          </div>
        </div>
      </React.Fragment>
    </>
  );
}