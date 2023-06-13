import React from 'react';
import './Home.scss';
import DiscordEmbed from './../../prefabs/DiscordEmbed/DiscordEmbed';

const data = {
	'underConstantDevelopment': {
		locales: {
			'es': 'En desarrollo constante',
			'en': 'Under constant development',
			'fr': 'En développement constant',
			'pt': 'Em desenvolvimento constante',
			'it': 'In sviluppo costante',
			'ru': 'В постоянной разработке',
			'ja': '常に開発中',
			'zh': '持续开发中',
			'ko': '지속적인 개발',
			'de': 'Unter ständiger Entwicklung',
			'ar': 'تحت التطوير المستمر',
			'nl': 'Onder constante ontwikkeling',
			'pl': 'W ciągłym rozwoju',
			'cs': 'Pod stálým vývojem',
			'hu': 'Folyamatos fejlesztés alatt',
		}
	}
}

export default class Home extends React.Component<{}, {
	language: string;
}> {

	constructor(props: any) {
		super(props);
		this.state = {
			language: navigator.language.slice(0, 2)
		}
	}

	componentDidMount() {
		this.setState({
			language: navigator.language.slice(0, 2)
		})
	}

	render() {
		return (
			<>
				<React.Fragment>
					<a href="//www.dmca.com/Protection/Status.aspx?ID=31ac56ac-7e91-4c9f-a9e2-437eca6b0c94" title="DMCA.com Protection Status" className="dmca-badge"> <img src="https://images.dmca.com/Badges/dmca_protected_sml_120w.png?ID=31ac56ac-7e91-4c9f-a9e2-437eca6b0c94" alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
					<div className="main-page">
						{/*<Profesor></Profesor>*/}
						<DiscordEmbed />
						<div
							style={{
								position: 'relative',
								height: '100px',
								width: '100px',
								display: 'none', // flex
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<div
								className="body"
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									position: 'absolute',
									width: '80px',
									height: '80px',
									transform: 'rotate(-135deg)',
								}}
							>
								<span
									style={{
										display: 'block',
										width: '40px',
										height: '80px',
										backgroundColor: '#29c5e6',
										position: 'absolute',
										borderRadius: '20px 20px 0 20px',
										bottom: '0',
										left: '0',
									}}
								></span>
								<span
									style={{
										display: 'block',
										width: '80px',
										height: '40px',
										backgroundColor: '#29c5e6',
										position: 'absolute',
										borderRadius: '20px 20px 20px 20px',
										bottom: '0',
										left: '0',
									}}
								></span>
								<span
									style={{
										display: 'block',
										width: '40px',
										height: '40px',
										backgroundColor: 'rgba(0,0,0,0.3)',
										position: 'absolute',
										borderRadius: '0 20px 20px 20px',
										bottom: '0',
										right: '0',
									}}
								></span>
							</div>
						</div>
						<div className="hihlighted-box box yellow dev"><i className="fa-solid fa-laptop-code" />{data['underConstantDevelopment'].locales[document.documentElement.lang]}</div>
						<div className="presentation">
							<div className="information">
								<h1 className="name">Feltax</h1>
								<p className="description">Make your server unique with Feltax.</p>
								<div className="buttons">
									<button
										className='addme'
										onClick={() => {
											window.open('https://feltax.xyz/invite', '_blank');
										}}
									>Add Me</button>
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
									<h2 className="title">Custom Embeds</h2>
									<p className="text">
										Yeah man, you can customize you own embeds with up to FOUR photos
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
									<h2 className="title">Tenemos table flips</h2>
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
}