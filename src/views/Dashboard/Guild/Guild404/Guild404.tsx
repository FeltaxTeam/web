import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundGuild() {
	return (
		<>
			<React.Fragment>
				<div className="serverHolder">
					<Link style={{display: 'contents'}} to="/dashboard/">
						<div className="guild">
							<div className="assets">
								<div>
									<img className="banner" src="https://cdn.discordapp.com/icons/514150100575191040/f19f982f01ea5e15925cf78eb497fa18.webp?size=256" />
								</div>
								<img className="icon" src="https://cdn.discordapp.com/icons/514150100575191040/f19f982f01ea5e15925cf78eb497fa18.webp?size=512" />
							</div>
							<div className="container">
								<div className="name">PlaceHolder</div>
								<Link to="/guild">
									Invitar
								</Link>
							</div>
						</div>
					</Link>
				</div>
			</React.Fragment>
		</>
	);
}