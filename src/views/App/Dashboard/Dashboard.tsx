import { useEffect, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Navigate from '../../.././utility/navigation';
import { fetchApi } from '../../../utility/fetching';
import './Dashboard.scss';

function Guild(props: { name: string, id: string, icon: string | null }) {
	const redirect = new URLSearchParams(window.location.search).get('redirect') || '';
	console.log(redirect)
	return (
		<div className="guild">
			<img alt="bg" className='background' src={props.icon === null ? `https://cdn.discordapp.com/icons/514150100575191040/f19f982f01ea5e15925cf78eb497fa18.webp?size=512` : `https://cdn.discordapp.com/icons/${props.id}/${props.icon}.webp?size=512`} />
			<img alt="icon" className="icon" src={props.icon === null ? `https://cdn.discordapp.com/icons/514150100575191040/f19f982f01ea5e15925cf78eb497fa18.webp?size=128` : `https://cdn.discordapp.com/icons/${props.id}/${props.icon}.${props.icon.startsWith('a_') ? 'gif' : 'webp'}?size=128`} />
			<div className="name">{props.name}</div>
			<div className="buttons">
				{
					botGuildsId.includes(props.id) ?
						<>
							<Link to={`/dashboard/${props.id}${redirect}`} className="button config" >Configurar</Link>
							<Link to={`/premium`} className="button premium" >Premium</Link>
						</>
						:
						<button
							className='button invite'
							onClick={() => {
								window.open(`https://discord.com/oauth2/authorize?scope=bot+applications.commands&response_type=code&redirect_uri=https%3A%2F%2Ffeltax.xyz%2F&permissions=8&client_id=568435616153337916&guild_id=${props.id}`, '_blank', 'width=400,height=700');
							}}
						>Invitar</button>
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
	const [botGuilds, setBotGuilds] = useState(null);
	useEffect(() => {
		async function getGuilds() {
			//setGuilds(await fetchURL(tokenType, accessToken, 'https://discord.com/api/users/@me/guilds'));
			setGuilds(JSON.parse(await fetchApi(`https://api.feltax.xyz/discord/users/@me/guilds?accessToken=${accessToken}&tokenType=${tokenType}`)));
			setBotGuilds(JSON.parse(await fetchApi('https://api.feltax.xyz/discord/users/@me/guilds')));
		}
		getGuilds();
	}, []);
	const tokenType = localStorage.getItem('tokenType');
	const accessToken = localStorage.getItem('accessToken');
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
					<div className="guilds">
						{
							(guilds[0] !== undefined) ? guilds.map((guild: any, i: any) => { return <Guild key={i} name={guild.name} id={guild.id} icon={guild.icon} /> })
								: <h2>You don't have any guild you can manage :c</h2>
						}
					</div>
			}
		</>
	);
}