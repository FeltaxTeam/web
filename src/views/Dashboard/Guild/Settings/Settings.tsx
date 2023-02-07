import React from 'react';
import './Settings.css';
import { postApi } from '../../../../utility/fetching';
const defaultPrefix = 'f-';

async function setGuildPrefix() {
	if (!validatePrefix()) return;
	postApi(`https://api.feltax.xyz/mongo/setGuildPrefix`, {
		tokenType: localStorage.getItem('tokenType'), accessToken: localStorage.getItem('accessToken'),
		newPrefix: (document.getElementById('prefixInp') as HTMLInputElement).value,
		guildId: (document.getElementById('guildId') as HTMLInputElement).value
	});
}
function validatePrefix() {
	const edisplay = document.getElementById('prefixErrDisp')//, submitBtn = document.getElementById('submitBtn');
	if (inps.prefix.length === 0) {
		edisplay.innerText = `The prefix can't be empty`;
		edisplay.style.display = 'flex';
		return false;
	}
	if (inps.prefix.length > 6) {
		edisplay.innerText = 'The maximun length for a prefix is 6 characters!';
		edisplay.style.display = 'flex';
		return false;
	}
	if (inps.prefix.replace(/[!-"]|[$-']|[*-?]|[A-~]/g, '').length !== 0) {
		edisplay.innerText = 'You can only use alfanumeric characters and basic symbols except #, @, (, ) with no spaces';
		edisplay.style.display = 'flex';
		return false;
	}
	const malasPalabras = ['puto', 'puta', 'dick', 'pene', 'bitch'];
	if (RegExp(malasPalabras.join('|')).test(inps.prefix)) {
		edisplay.innerText = 'You can\'t include offenive words in your prefix!';
		edisplay.style.display = 'flex';
		return false;
	}
	edisplay.innerText = '';
	edisplay.style.display = 'none';
	return true;
}
const inps = {
	get prefix() {
		return (document.getElementById('prefixInp') as HTMLInputElement).value;
	},
	set prefix(value) {
		(document.getElementById('prefixInp') as HTMLInputElement).value = value;
	},
	get nickname() {
		return (document.getElementById('nicknameInp') as HTMLInputElement).value;
	},
	set nickname(value) {
		(document.getElementById('nicknameInp') as HTMLInputElement).value = value;
	}
};
// props: { dbGuild, guild }
type Props = { guild?: any, dbGuild?: any };
export default class Guild extends React.Component<Props> {
	shouldReload: boolean;
	constructor(props) {
		super(props);
		this.state = { user: null };
	}
	handleClick = (e) => {
		e.target.select();
	};
	render() {
		const guild = this.props.guild;
		const dbGuild = (this.props.dbGuild != null) ? this.props.dbGuild : null;
		console.log('guilds:');
		console.log(guild.id);
		console.log(guild);
		return (
			<>
				<React.Fragment>
					<div className="interface">
						<div className="avatar">
							<img className="avatar" src="https://cdn.discordapp.com/avatars/568435616153337916/fb7ce8b32cedb104a74aab8c184007c3.png?size=256" alt='Bot Avatar' />
						</div>
						<div className="custom">
							<input type="text" className="nickname" defaultValue="FΞLTΛX" id="nicknameInp" onClick={this.handleClick} />
							<input type="text" className="prefix" defaultValue={dbGuild ? dbGuild.prefix ?? defaultPrefix : defaultPrefix} id="prefixInp" onChange={validatePrefix} onClick={this.handleClick} />
							<span id="prefixErrDisp"></span>
							<input type="hidden" value={guild.id} id="guildId" />
							<input type="button" value='Update guild prefix!' id="submitBtn" onClick={setGuildPrefix} />
						</div>
					</div>
				</React.Fragment>
			</>
		);
	}
}