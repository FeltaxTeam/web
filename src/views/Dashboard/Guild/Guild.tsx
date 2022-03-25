import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigate from '../../.././utility/navigation';
import { fetchApi } from '../../../utility/fetching';
import './Guild.css'
import Settings from './Settings/Settings';
import Sidebar from './Sidebar/Sidebar';
import Widget from './Widget/Widget';
import Loading from '../../Home/Loading/Loading';

export default function Guild() {
	let guildId = /[0-9]\w+/.exec(window.location.pathname);
	let [guild, setGuild] = useState('');
	let [guildInDb, setGuildInDb] = useState('');
	useEffect(() => {
		async function getGuild() {
			let data: any = await fetchApi(`https://feltax-api.herokuapp.com/discord/guilds/${guildId}`);
			setGuild(data);
		}
		getGuild();
		async function getGuildInDb() {
			let data: any = JSON.parse(await fetchApi(`https://feltax-api.herokuapp.com/mongo/getDbGuild/${guildId}`));
			if (data.error){
				console.log(`Error fetching the guild in the db: ${data.error} / ${data.message}`);
				data = null;
			}
			setGuildInDb(data);
		}
		getGuildInDb();
	}, []);

	if(guild=='' || guildInDb == '') 
		return <>
			<Sidebar guild={guild} />	
			<Loading />
		</>;

	return (
		<>
			<Sidebar guild={guild} />
			<div className="page">
				<div className="body">
					<Routes>
						<Route path="/" element={<Widget guild={guild} />} />
						<Route path="/premium" element={<Widget guild={guild} />} />
						<Route path="/panel" element={<Widget guild={guild} />} />
						<Route path="/settings" element={<Settings guild={guild} dbGuild={guildInDb}/>} />
						<Route path="*" element={<Navigate to={guildId ? `/dashboard/${guildId}` : `/dashboard`} />} />
					</Routes>
				</div>
			</div>
		</>
	);
}