import React, { useEffect, useState } from "react";
import Navigate from "../.././utility/navigation";
import { fetchURL, fetchApi, postApi } from "../../utility/fetching";
import './Admin.css';

let user = null;
let authIds = ['438390132538605589', '417407496286633995'];
export default function Admin() {
  let [illegalUser, setIllegalUser] = useState(null);
  useEffect(() => {
    async function getUser() {
      let tokenType = localStorage.getItem('tokenType'), acessToken = localStorage.getItem('accessToken');
      if (tokenType && acessToken) {
        fetchURL(tokenType, acessToken, 'https://discord.com/api/users/@me').then(usr => {
          user = usr;
          if (!authIds.includes(user.id)) { setIllegalUser(true) }
          else { setIllegalUser(false) };
        });
      }
      else { setIllegalUser(true) };
    }
    getUser();
  }, []);

  if (illegalUser == null) {
    return <h1>LOADING</h1>
  }
  if (illegalUser) {
    return <Navigate to="/" />
  }

  return <>
    <div>Change your Description:</div>
    <Description />
  </>
}

function Description() {
  let [description, setDescription] = useState(null);
  let tokenType = localStorage.getItem('tokenType'), accessToken = localStorage.getItem('accessToken');
  useEffect(()=>{
    if (user == null) return;
    async function getDesc() {
      if (tokenType && accessToken) {
        let adminProfile:any = JSON.parse(await fetchApi(`/admin/getDescription/${user.id}`));
        setDescription(adminProfile.description);
      }
    }
    getDesc();
  }, []);

  function postDescription(){
    //@ts-ignore
    setDescription(document.getElementById('descriptionTxtA').value);
    //@ts-ignore
    postApi(`/admin/setDescription/${user.id}?accessToken=${accessToken}&tokenType=${tokenType}`, {description: document.getElementById('descriptionTxtA').value});
  }

  if (user == null) return <></>

  return <>

  <textarea defaultValue={description} id="descriptionTxtA"></textarea>
  <input type="button" onClick={postDescription} value="Update!" />
  </>
}