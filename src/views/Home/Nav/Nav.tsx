import React from 'react';
import './Nav.scss'
import { Link, Routes, Route } from 'react-router-dom';
import LogoSVG from '../../prefabs/LogoSVG';

const languages = [
	{
		name: 'English',
		code: 'en',
		flag: 'gb'
	},
	{
		name: 'Français',
		code: 'fr',
		flag: 'fr'
	},
	{
		name: 'Catalá',
		code: 'ca',
		flag: 'es-ct'
	},
	{
		name: 'Español',
		code: 'es',
		flag: 'es'
	},
	{
		name: 'Deutsch',
		code: 'de',
		flag: 'de'
	},
	{
		name: '日本語',
		code: 'ja',
		flag: 'jp'
	},
	{
		name: '한국어',
		code: 'ko',
		flag: 'kr'
	},
	{
		name: 'Português',
		code: 'pt',
		flag: 'pt'
	}
];

class NavComponent extends React.Component {
	constructor(props: any) {
		super(props);
		this.state = { user: props.user };
	}
	options = (e) => {
		if (document.getElementById('user-options').style.display === 'flex') {
			document.getElementById('user-options').style.display = 'none';
			document.getElementsByClassName('arrow-icon')[0].classList.remove("open");
			document.getElementById('language-selector').style.display = 'none';
		} else {
			document.getElementById('user-options').style.display = 'flex';
			document.getElementsByClassName('arrow-icon')[0].classList.add("open");
		}
	};
	languageSelector = (e) => {
		if (document.getElementById('language-selector').style.display === 'flex') {
			document.getElementById('language-selector').style.display = 'none';
		} else {
			document.getElementById('language-selector').style.display = 'flex';
		}
	};
	openMenu = (e) => {
		if (document.getElementById('menu').style.display === 'flex') {
			document.getElementById('menu').style.display = 'none';
		} else {
			document.getElementById('menu').style.display = 'flex';
		}
	};
	componentDidUpdate(prevProps) {//@ts-ignore
		if (this.props.user !== prevProps.user) {//@ts-ignore
			this.setState({ user: this.props.user });
		}
	}
	render() {
		//@ts-ignore
		let user = this.state.user;
		let authIds = ['438390132538605589', '417407496286633995'];
		return (
			<React.Fragment>
				<header>
					<svg className="background" viewBox="0, 0, 100, 10.1" preserveAspectRatio="none">
						<path className="bg"
							d="M 0 0 L 0 10 L 33 10 C 35 10 36 9 37 8 C 38 7 39 6 41 6 L 59 6 C 61 6 62 7 63 8 C 64 9 65 10 67 10 L 100 10 L 100 0 L 0 0">
						</path>
						<path className="line"
							d="M 0 10 L 33 10 C 35 10 36 9 37 8 C 38 7 39 6 41 6 L 59 6 C 61 6 62 7 63 8 C 64 9 65 10 67 10 L 100 10"></path>
					</svg>
					<nav>
						<div className="nav-web">
							<ul className="container">
								<li className="navbar-item">
									<Link className="navbar-item" data-tooltip="Commands" to="/commands">
										<b>Commands</b>
									</Link>
								</li>
								<li className="navbar-item">
									<Link className="navbar-item" data-tooltip="Add Bot" to="/invite">
										<b>Add Bot</b>
									</Link>
								</li>
								<li className="navbar-item">
									<Link className="navbar-item" data-tooltip="Team" to="/team">
										<b>Team</b>
									</Link>
								</li>
								<li className="navbar-button">
									<Link className="navbar-button" data-tooltip="Support" to="/support">
										<b>Support</b>
									</Link>
								</li>
								<li className="navbar-hamburguer">
									<button className="navbar-hamburguer" onClick={this.openMenu}>
										<i className="fa-solid fa-bars"></i>
									</button>
								</li>
							</ul>
						</div>
						<div className="navbar-logo-container">
							<Link to="/">
								<img src="https://feltax.xyz/assets/favicon.ico" alt="awd" title="logo" className="navbar-logo" width="70px" height="70px" />
							</Link>
						</div>
						<div className="navbar-user">
							<ul className="container">
								<li className="nav-premium-button">
									<Link className="button" to="/premium">
										<b>Premium</b>
									</Link>
								</li>
								<li className="navbar-item">
									<Link className="navbar-item" data-tooltip="Dashboard" to="/dashboard">
										<b>Dashboard</b>
									</Link>
								</li>
								{
									user ?
										(<React.Fragment>
											<li className="user-loged" id='user' onClick={this.options}>
												<img
													src={
														`https://cdn.discordapp.com/avatars/${user['id']}/${user['avatar']}.${user['avatar'].startsWith('a_') ? 'gif' : 'webp'}?size=512`
													}
													alt="Avatar"
													className="avatar" />
												<div className="username">
													{user['username']}
												</div>
												<button className="arrow-icon">
													<span className="left-bar"></span>
													<span className="right-bar"></span>
												</button>
											</li>
											<ul id="user-options">
												<li className="option dashboard">Dashboard</li>
												<li className="option language" onClick={this.languageSelector}>Language<span className="selector"><img src="assets/flags/1x1/gb.svg" alt="" /></span>
												</li>
												<li className="option">Settings</li>
												{
													authIds.includes(user.id) ? (<li className="option"><Link to="/admin"><LogoSVG size={20} strokeWidth={12} color="#2978e6" />Admin</Link></li>) : ''
												}
												<li className="option premium"><Link to="/premium"><i className="fa-solid fa-crown" />Premium</Link></li>
												<li className="option logout"><Link to="/logout">Logout</Link></li>
												<ol id='language-selector'>
													{languages.map(language =>
														<li className="language" key={language.code}>
															<img src={`assets/flags/4x3/${language.flag}.svg`} alt={language.code} />
															{language.name}
														</li>
													)}
												</ol>
											</ul>
										</React.Fragment>
										) : (
											<li className="navbar-login">
												<Link className="navbar-login" to="/auth">
													<b>Login</b>
												</Link>
											</li>
										)
								}
							</ul>
						</div>
					</nav>
				</header>
			</React.Fragment>
		);
	}
}
export default function Nav(props: any) {
	let { paths, user } = props;
	const navProps = { "user": user }
	return <Routes>
		<Route path={'*'} element={<NavComponent {...navProps} />} />
		<Route path={'/'} element={<NavComponent {...navProps} />} />
		{paths.map((el: string, i) => {
			return <Route key={i} path={el} element={<></>} />
		})}
	</Routes>
};