import React from 'react';
import './Home.scss';
import DiscordEmbed from './../prefabs/DiscordEmbed/DiscordEmbed';
import Profesor from '../prefabs/Profesor/Profesor';
import CookiesPrompt from '../CookiesPrompt/CookiesPrompt';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<React.Fragment>
				<div className="main-page">
					{/*<Profesor></Profesor>*/}
					<DiscordEmbed />
					<div className="hihlighted-box box yellow dev"><i className="fa-solid fa-laptop-code" />This page is under constant development.</div>
					<div className="presentation">
						<div className="information">
							<h1 className="name">Feltax</h1>
							<p className="description">The bot YOU need.</p>
							<div className="buttons">
								<button className='addme'>Add Me</button>
								<button
									className='dashboard'
									onClick={() => {
										window.open(`${window.location.protocol}//${window.location.hostname === 'localhost' ? 'localhost:3000' : window.location.hostname}/dashboard`, '_self');
									}}
								> Dashboard</button>
							</div>
						</div>
						<img src="assets/logo648.webp" alt="feltax" />
					</div>
					<ul className="features">
						<li className="feature">
							<div className="image"><i className="fa-solid fa-laptop-code" /></div>
							<div className="description">
								<h2 className="title">Flexible</h2>
								<p className="text">
									Feltax is a bot that can be used for any purpose.
									It can be used for moderation, fun, or anything else.
								</p>
							</div>
						</li>
						<li className="feature">
							<div className="image"><i className="fa-solid fa-code" /></div>
							<div className="description">
								<h2 className="title">Open Source</h2>
								<p className="text">
									Feltax is open source and can be used by anyone.
									It is written in TypeScript and uses the Discord.js library.
								</p>
							</div>
						</li>
						<li className="feature">
							<div className="image"><i className="fa-solid fa-user-friends" /></div>
							<div className="description">
								<h2 className="title">Community</h2>
								<p className="text">
									Feltax is a community driven project.
									You can contribute to the project by creating an issue or a pull request.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</React.Fragment>
		</>
	);
}