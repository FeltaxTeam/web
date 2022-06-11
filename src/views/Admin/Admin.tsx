import { useEffect, useState } from "react";
import Navigate from "../.././utility/navigation";
import { fetchURL, fetchApi, postApi } from "../../utility/fetching";
import './Admin.scss';
import Sidebar from './Sidebar';

let authIds = ['438390132538605589', '417407496286633995'];
export default function Admin(props:any) {
  let [user, setUser] = useState(props.user);
  useEffect(()=>{ setUser(props.user)}, [props.user]);
  
  if (user == null || !authIds.includes(user.id)) {
    return <Navigate to="/" />
  }

  return <>
    <div className="admin">
      <Sidebar />
      <div className="body">
        <Description user={user} />
      </div>
    </div>
  </>
}

function Description(props:any) {
  let [user, setUser] = useState(props.user);
  useEffect(()=>{ setUser(props.user)}, [props.user]);
  let [description, setDescription] = useState(null);
  let tokenType = localStorage.getItem('tokenType'), accessToken = localStorage.getItem('accessToken');
  useEffect(() => {
    if (user == null) return;
    async function getDesc() {
      if (tokenType && accessToken) {
        let adminProfile = JSON.parse(await fetchApi(`https://us-central1-feltax-87fb9.cloudfunctions.net/app/admin/getDescription/${user.id}`));
        setDescription(adminProfile.description);
      }
    }
    getDesc();
  }, []);

  function postDescription() {
    //@ts-ignore
    setDescription(document.getElementById('descriptionTxtA').value);
    //@ts-ignore
    postApi(`https://us-central1-feltax-87fb9.cloudfunctions.net/app/admin/setDescription/${user.id}?accessToken=${accessToken}&tokenType=${tokenType}`, { description: document.getElementById('descriptionTxtA').value });
  }

  if (user == null) return <></>

  return <>
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
      <p className="bio">{description}</p>
      <input type="text" defaultValue={description} id="adminBio"></input>
    </div>
    <div className="description">
      <textarea defaultValue={description} id="descriptionTxtA" rows={3} cols={10}></textarea>
      <input type="button" onClick={postDescription} value="Update!" />
    </div>
    <div className="rrss">
      <div className="rs discord">
        <p className="link">discord.gg/</p>
        <input type="text" name="" id="adminProfileSettingsRRSSDiscord" placeholder="cVpZPqQ" />
      </div>
      <div className="rs github">
        <p className="link">github.com/</p>
        <input type="text" name="" id="adminProfileSettingsRRSSGithub" placeholder="Feltax" />
      </div>
      <div className="rs twitter">
        <p className="link">twitter.com/</p>
        <input type="text" name="" id="adminProfileSettingsRRSSTwitter" placeholder="Feltax" />
      </div>
      <div className="rs instagram">
        <p className="link">instagram.com/</p>
        <input type="text" name="" id="adminProfileSettingsRRSSInstagram" placeholder="Feltax" />
      </div>
    </div>
  </>
}