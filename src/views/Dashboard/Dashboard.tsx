import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigate from '../.././utility/navigation';
import { fetchApi } from '../../utility/fetching';
import './Dashboard.css';
import Discord from 'discord.js';

function Guild(props: { name: string, id: string, icon: string | null }) {
	return (
		<div className="guild">
			<div className="assets">
				<div>
					<img alt="banner" className="banner" src={props.icon === null ? `https://cdn.discordapp.com/icons/514150100575191040/f19f982f01ea5e15925cf78eb497fa18.webp?size=512` : `https://cdn.discordapp.com/icons/${props.id}/${props.icon}.webp?size=512`} />
				</div>
				<img alt="icon" className="icon" src={props.icon === null ? `https://cdn.discordapp.com/icons/514150100575191040/f19f982f01ea5e15925cf78eb497fa18.webp?size=512` : `https://cdn.discordapp.com/icons/${props.id}/${props.icon}.${props.icon.startsWith('a_') ? 'gif' : 'webp'}?size=512`} />
			</div>
			<div className="container">
				<div className="name">{props.name}</div>
				{botGuildsId.includes(props.id) ? <Link to={`/dashboard/${props.id}`} className="configuration" >Configurar</Link> :
					<a href={`https://discord.com/oauth2/authorize?scope=bot+applications.commands&response_type=code&redirect_uri=https%3A%2F%2Ffeltax.xyz%2F&permissions=8&client_id=568435616153337916&guild_id=${props.id}`} className="invite" >Invitar</a>
				}
			</div>
		</div>
	);
}
function DefaultGuild() {
	return (
		<div className="guild">
			<div className="assets">
				<div>
					<div className='banner'>
					</div>
					<div className="icon"></div>
				</div>
			</div>
			<div className="container">
				<div className="name"></div>
				<div className="button"></div>
			</div>
		</div>
	);
}

let botGuildsId: any = [];
export default function DashboardComponent() {
	let [guilds, setGuilds] = useState(null);
	let [botGuilds, setBotGuilds] = useState(null);
	useEffect(() => {
		async function getGuilds() {
			//setGuilds(await fetchURL(tokenType, accessToken, 'https://discord.com/api/users/@me/guilds'));
			setGuilds(JSON.parse(await fetchApi(`https://europe-west1-feltax-87fb9.cloudfunctions.net/app/discord/users/@me/guilds?accessToken=${accessToken}&tokenType=${tokenType}`)));
			setBotGuilds(JSON.parse(await fetchApi('https://europe-west1-feltax-87fb9.cloudfunctions.net/app/discord/users/@me/guilds')));
		}
		getGuilds();
	}, []);
	let tokenType = localStorage.getItem('tokenType');
	let accessToken = localStorage.getItem('accessToken');
	if (!accessToken || !tokenType) return (<Navigate to="/" />);

	//sorting guilds
	if (guilds && botGuilds) {
		botGuildsId = botGuilds.map((el: any) => { return el.id });
		guilds = guilds.filter(guild => (guild.permissions >> 3) & 1).sort((a: any, b: any) => { //.filter(guild => guild.owner == true)
			return botGuildsId.includes(b.id) - botGuildsId.includes(a.id);
		});
	}
	function LoadingDashboard() {
		return (
			<div className="loading">
				<DefaultGuild />
				<DefaultGuild />
				<DefaultGuild />
				<DefaultGuild />
			</div>
		)
	}
	return (
		<>
			{
				(!guilds || !botGuilds) ? <LoadingDashboard /> :
					<div className="serverHolder">
						{
							(guilds[0] !== undefined) ? guilds.map((guild: Discord.Guild, i: any) => { return <Guild key={i} name={guild.name} id={guild.id} icon={guild.icon} /> })
								: <h2>You don't have any guild you can manage :c</h2>
						}
					</div>
			}
		</>
	);
}