import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import LogoSVG from '../../../prefabs/LogoSVG';
import './Footer.css'

function FooterComponent() {
	return (
		<React.Fragment>
			<footer>
				<svg className="background" viewBox="0 0 1440 320" preserveAspectRatio="none">
					<path className="main-wave" d="M0,96L40,106.7C80,117,160,139,240,165.3C320,192,400,224,480,240C560,256,640,256,720,224C800,192,880,128,960,128C1040,128,1120,192,1200,197.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
					<path d="M0,64L40,64C80,64,160,64,240,85.3C320,107,400,149,480,176C560,203,640,213,720,186.7C800,160,880,96,960,64C1040,32,1120,32,1200,42.7C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
					<path d="M0,192L40,197.3C80,203,160,213,240,192C320,171,400,117,480,101.3C560,85,640,107,720,122.7C800,139,880,149,960,128C1040,107,1120,53,1200,53.3C1280,53,1360,107,1400,133.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
				</svg>
				<div className="footer-body">
					<div className="information">
						<div className="logos">
							<h1>Feltax</h1>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/commands">Commands</Link>
								</li>
								<li>
									<a href="https://discordapp.com/users/438390132538605589" target="_blank" rel="noreferrer">Contact Us!</a>
								</li>
							</ul>
						</div>
						<div className="sources">
							<h1>Find Us</h1>
							<ul>
								<li>
									<a href="https://top.gg/bot/568435616153337916" target="_blank" rel="noreferrer">Top.gg</a>
								</li>
								<li>
									<a href="https://discordthings.com/bot/568435616153337916" target="_blank" rel="noreferrer">Dthings</a>
								</li>
								<li>
									<Link to="/help">Help</Link>
								</li>
								<li>
									<a href="https://patreon.com/feltax" target="_blank">Patreon</a>
								</li>
							</ul>
						</div>
						<div className="logos">
							<h1>About Us</h1>
							<ul>
								<li>
									<Link to="/terms">Terms & Services</Link>
								</li>
								<li>
									<Link to="/privacy">Privacy policy</Link>
								</li>
								<li>
									<Link to="/support">Support</Link>
								</li>
								<li>
									<Link to="/acknowledgements">Acknowledgements</Link>
								</li>
								<li>
									<a href="https://discordapp.com/users/438390132538605589" target="_blank" rel="noreferrer">Contact Us!</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='copyright'>
					<LogoSVG size={20} strokeWidth={12} color='#c7c6ff'></LogoSVG>
					© {new Date().getFullYear()} Feltax
				</div>
			</footer>
		</React.Fragment>
	);
}

export default function Footer(props: any) {
	const { paths } = props;
	return (useRoutes(paths.map((el: string) => {
		return { path: el, element: <FooterComponent /> }
	})));
}