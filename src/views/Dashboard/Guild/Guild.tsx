import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigate from '../../.././utility/navigation';
import { fetchApi } from '../../../utility/fetching';
import './Guild.css'
import Leaderboard from './Leaderboard/Leaderboard';
import Settings from './Settings/Settings';
import Sidebar from './Sidebar/Sidebar';
import Widget from './Widget/Widget';
import Loading from '../../Home/Loading/Loading';
import NotFoundGuild from './Guild404/Guild404';
import Twitch from './Twitch/Twitch';
import Embeds from './Embeds/Embeds';

export default function Guild() {
	let guildId = /[0-9]\w+/.exec(window.location.pathname);
	let [guild, setGuild] = useState('');
	let [guildInDb, setGuildInDb] = useState('');
	let [owner, setOwner] = useState(null);
	useEffect(() => {
		async function getGuild() {
			let data = JSON.parse(await fetchApi(`https://us-central1-feltax-87fb9.cloudfunctions.net/app/discord/guilds/${guildId}`));
			if (data.message && data.code) {
				data = null;
			} else {
				async function getOwner() {
					let guildData = JSON.parse(guild);
					setOwner(JSON.parse(await fetchApi(`https://us-central1-feltax-87fb9.cloudfunctions.net/app/discord/users/${guildData !== null ? guildData.owner_id : null}`)));
				}
				getOwner();
			}
			setGuild(data);
		}
		getGuild();
		async function getGuildInDb() {
			let data = JSON.parse(await fetchApi(`https://us-central1-feltax-87fb9.cloudfunctions.net/app/mongo/getDbGuild/${guildId}`));
			if (data.error) {
				console.log(`Error fetching the guild in the db: ${data.error} / ${data.message}`);
				data = null;
			}
			setGuildInDb(data);
		}
		getGuildInDb();
		// eslint-disable-next-line
	}, []);

	if (guild === '' || guildInDb === '')
		return <>
			<Sidebar guild={guild} />
			<Loading />
		</>;

	if (guild === null || guildId == null) return <NotFoundGuild />;

	return (
		<>
			<div className="guildPage">
				<Sidebar guild={guild} />
				<div className="body">
					<div className="disableModule">
						PlaceHolder
					</div>
					<Routes>
						<Route path="/" element={<Widget guild={guild} owner={owner} />} />
						<Route path="/premium" element={<Widget guild={guild} owner={owner} />} />
						<Route path="/panel" element={<Widget guild={guild} owner={owner} />} />
						<Route path="/settings" element={<Settings guild={guild} dbGuild={guildInDb} />} />
						<Route path="/leaderboard" element={<Leaderboard guild={guild} dbGuild={guildInDb} />} />
						<Route path="/twitch/chat" element={<Twitch/>} />
						<Route path="/embeds" element={<Embeds/>} />
						<Route path="*" element={<Navigate to={guildId ? `/dashboard/${guildId}` : `/dashboard`} />} />
					</Routes>
				</div>
			</div>
		</>
	);
}