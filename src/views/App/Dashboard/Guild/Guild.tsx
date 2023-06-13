import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigate from '../../../.././utility/navigation';
import { fetchApi } from '../../../../utility/fetching';
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

export default class Guild extends React.Component<{}, {
	guild: any;
	guildInDb: any;
	owner: any;
}> {
	state = {
		guild: '',
		guildInDb: '',
		owner: '',
	}

	async componentDidMount() {
		const guildId = /[0-9]\w+/.exec(window.location.pathname);
		const guild = JSON.parse(await fetchApi(`https://api.feltax.xyz/discord/guilds/${guildId}`));
		const guildInDb = JSON.parse(await fetchApi(`https://api.feltax.xyz/guilds/${guildId}`));
		console.log(guild)
		const owner = JSON.parse(await fetchApi(`https://api.feltax.xyz/discord/users/${guild.owner_id}`));
		this.setState({ guild, guildInDb, owner });
	}

	render() {
		const guildId = /[0-9]\w+/.exec(window.location.pathname);
		const { guild, guildInDb, owner } = this.state;
		if (!localStorage.getItem('accessToken')) {
			return <Navigate to="/" />
		}
		if (guild === null) {
			return <NotFoundGuild />
		}
		if (guild.length === 0 || guildInDb === '') {
			return <Loading />
		}
		return (
			<div className="guildPage">
				<aside className="sidebar">
					<Suspense
						fallback={
							<Loading />
						}
					>
						<Sidebar guild={guild} />
					</Suspense>
				</aside>
				<div className="body">
					<Suspense
						fallback={
							<Loading />
						}
					>
						<Routes>
							<Route path="/leaderboard" element={<Widget guild={guild} />} /> {/* <Leaderboard dbGuild={guildInDb} guild={guild} /> */}
							<Route path="/widget" element={<Widget guild={guild} />} />
							<Route path="/settings" element={<Settings guild={guild} />} />
							<Route path="/twitch/chat" element={<Twitch />} />
							<Route path="/embeds" element={<Embeds />} />
							<Route path="/automod" element={<Automoderation guild={guild} />} />
							<Route path="/*" element={<Navigate to={`/dashboard/${guildId}/widget`} />} />
						</Routes>
					</Suspense>
				</div>
			</div>
		)
	}
}


(<>
	<Suspense
		fallback={
			<Loading />
		}
	>
		<aside className="sidebar">

		</aside>
	</Suspense>
	<div className="body"></div>
</>)