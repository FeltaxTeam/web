import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigate from '../../.././utility/navigation';
import { fetchApi } from '../../../utility/fetching';
import './Guild.css'
import Leaderboard from './Leaderboard/Leaderboard';
import Settings from './Settings/Settings';
const Sidebar = React.lazy(() => import('./Sidebar/Sidebar'));
const Widget = React.lazy(() => import('./Widget/Widget'));
import Loading from '../../Home/Loading/Loading';
import NotFoundGuild from './Guild404/Guild404';
import Twitch from './Twitch/Twitch';
import Embeds from './Embeds/Embeds';
import Automoderation from './Automoderation/Automoderation';

export default function Guild() {
	const guildId = /[0-9]\w+/.exec(window.location.pathname);
	const [guild, setGuild] = useState('');
	const [guildInDb, setGuildInDb] = useState('');
	const [owner, setOwner] = useState(null);
	useEffect(() => {
		async function getGuild() {
			let data = JSON.parse(await fetchApi(`https://api.feltax.xyz/discord/guilds/${guildId}`));
			if (data.message && data.code) {
				data = null;
			} else {
				async function getOwner() {
					const guildData = JSON.parse(guild);
					setOwner(JSON.parse(await fetchApi(`https://api.feltax.xyz/discord/users/${guildData !== null ? guildData.owner_id : null}`)));
				}
				getOwner();
			}
			setGuild(data);
		}
		getGuild();
		async function getGuildInDb() {
			let data = JSON.parse(await fetchApi(`https://api.feltax.xyz/mongo/getDbGuild/${guildId}`));
			if (data.error) {
				console.log(`Error fetching the guild in the db: ${data.error} / ${data.message}`);
				data = null;
			}
			setGuildInDb(data);
		}
		getGuildInDb();
	}, []);

	if (guild === '' || guildInDb === '')
		return <>
			<Suspense
				fallback={
					<Loading />
				}
			>
				<aside className="sidebar">
					<Sidebar guild={guild} />
				</aside>
			</Suspense>
			<div className="body"></div>
		</>;

	if (guild === null || guildId == null) return <NotFoundGuild />;

	return (
		<>
			<div className="guildPage">
				<Suspense
					fallback={
						<Loading />
					}
				>
					<aside className="sidebar">
						<Sidebar guild={guild} />
					</aside>
				</Suspense>
				<Suspense
					fallback={
						<Loading />
					}
				>
					<div className="body">
						{/* Este placeholder estaba aquí no se para qué. Si no es nada importante elimínalo */}
						<Routes>
							<Route path="/" element={<Widget guild={guild} owner={owner} />} />
							<Route path="/premium" element={<Widget guild={guild} owner={owner} />} />
							<Route path="/panel" element={<Widget guild={guild} owner={owner} />} />
							<Route path="/settings" element={<Settings guild={guild} dbGuild={guildInDb} />} />
							<Route path="/leaderboard" element={<Leaderboard guild={guild} dbGuild={guildInDb} />} />
							<Route path="/twitch/chat" element={<Twitch />} />
							<Route path="/embeds" element={<Embeds />} />
							<Route path="/automod" element={<Automoderation guild={guild} />} />
							<Route path="/*" element={<Navigate to={guildId ? `/dashboard/${guildId}` : `/dashboard`} />} />
						</Routes>
					</div>
				</Suspense>
			</div>
		</>
	);
}