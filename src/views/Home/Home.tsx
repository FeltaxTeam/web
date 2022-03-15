import React from 'react';
import './Home.css';
import LogoSVG from '../LogoSVG';

export default function Home() {
	return (
		<>
			<React.Fragment>
				<div className="main">
					<div className="hihlighted-box box yellow dev"><i className="fa-solid fa-code"></i>This page is under constant development.</div>
					<div className="presentation">
						<div className="information">
							<h1 className="name">FELTAX</h1>
							<p className="description">The best BOT right now.</p>
						</div>
						<div><img src="favicon.ico" alt="" /></div>
					</div>
				</div>
			</React.Fragment>
		</>
	);
}