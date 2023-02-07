import React from "react";
import { Navigate } from "react-router";
import { fetchApi, postApi } from "../../utility/fetching";
import './Admin.scss';
import AdminNav from "./AdminNav";
import Sidebar from './Sidebar';

const authIds = ['438390132538605589', '417407496286633995'];
export default class Admin extends React.Component<{ user: any | null }, { user: any | null }> {
  constructor(props: { user: any }) {
    super(props);
    this.state = {
      user: props.user
    }
  }
  render() {
    console.log(this.props);
    if (this.props.user !== null) {
      if (!authIds.includes(this.props.user.id)) {
        const props = { user: this.props.user };
        console.log('User not authorized');
        return (
          <>
            <div className="admin">
              <Sidebar {...props} />
              <AdminNav paths={['/404']} user={this.props.user} />
              <div className="body">
                <Description user={this.props.user} />
              </div>
            </div>
          </>
        );
      } else {
        const props = { user: this.props.user };
        return (
          <>
            <div className="admin">
              <Sidebar {...props} />
              <AdminNav paths={['/404']} user={this.props.user} />
              <div className="body">
                <Description user={this.props.user} />
              </div>
            </div>
          </>
        );
      }
    } else {
      return <Navigate to="/auth" />
    }
  }
}

class Description extends React.Component<{ user: any }, { description: string }> {
  constructor(props: { user: any }) {
    super(props);
    this.state = {
      description: ''
    }
  }

  postDescription() {
    this.setState({ description: (document.getElementById('descriptionTxtA') as HTMLInputElement).value });
    //@ts-ignore
    postApi(`https://api.feltax.xyz/admin/setDescription/${this.props.user.id}?accessToken = ${accessToken}& tokenType=${tokenType} `, { description: document.getElementById('descriptionTxtA').value });
  }
  async componentDidMount() {
    this.props.user !== null ? <> <h1>Admin</h1> </> : <Navigate to="/auth" />
    if (this.props.user === null) return <>Si</>
    const tokenType = localStorage.getItem('tokenType');
    const accessToken = localStorage.getItem('accessToken');
    const adminProfile = JSON.parse(await fetchApi(`https://api.feltax.xyz/admin/getDescription/${this.props.user.id}`));
    this.setState({ description: adminProfile.description });
  }
  render() {
    console.log(this.props.user)
    return <>
      <div className="card">
        <img src={`https://cdn.discordapp.com/banners/${this.props.user.id}/${this.props.user.banner}.png?size=300`} alt="Banner" className="banner" />
        <div className="header">
          <img src={`https://cdn.discordapp.com/avatars/${this.props.user.id}/${this.props.user.avatar}.webp?size=300`} alt="Avatar" className="avatar" />
          <div className="user">
            <h2 className="username">Iron</h2>
            <h2 className="role">Lead Developer</h2>
          </div>
        </div>
        <hr />
        <p className="bio">{this.state.description}</p>
        <input type="text" defaultValue={this.state.description} id="adminBio"></input>
      </div>
      <div className="description">
        <textarea defaultValue={this.state.description} id="descriptionTxtA" rows={3} cols={10}></textarea>
        <input type="button" onClick={this.postDescription} value="Update!" />
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
}