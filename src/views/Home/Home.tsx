import React from 'react';
import './Home.scss';
import DiscordEmbed from './../prefabs/DiscordEmbed/DiscordEmbed';

export default function Home() {
	return (
		<>
			<React.Fragment>
				<div className="main-page">
					<DiscordEmbed>

					</DiscordEmbed>
					<div className="hihlighted-box box yellow dev"><i className="fa-solid fa-laptop-code" />This page is under constant development.</div>
					<div className="presentation">
						<div className="information">
							<h1 className="name">FELTAX</h1>
							<p className="description">The best BOT right now.</p>
							<div className="buttons">
								<button className='addme'>Add Me</button>
								<button className='dashboard'>Dashboard</button>
							</div>
						</div>
						<img src="assets/favicon.ico" alt="feltax" />
					</div>
					<ul className="features">
						<li className="feature">
							<div className="image"><i className="fa-solid fa-laptop-code" /></div>
							<div className="description">
								<h3 className="title">Flexible</h3>
								<p className="text">
									Feltax is a bot that can be used for any purpose.
									It can be used for moderation, fun, or anything else.
								</p>
							</div>
						</li>
						<li className="feature">
							<div className="image"><i className="fa-solid fa-code" /></div>
							<div className="description">
								<h3 className="title">Open Source</h3>
								<p className="text">
									Feltax is open source and can be used by anyone.
									It is written in TypeScript and uses the Discord.js library.
								</p>
							</div>
						</li>
						<li className="feature">
							<div className="image"><i className="fa-solid fa-user-friends" /></div>
							<div className="description">
								<h3 className="title">Community</h3>
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