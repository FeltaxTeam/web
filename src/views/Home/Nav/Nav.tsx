import React from 'react';
import './Nav.scss'
import { Link, Routes, Route } from 'react-router-dom';
import LogoSVG from '../../prefabs/LogoSVG';

enum ElementType {
	// Cambiar los strings por numeros para evitar errores de tipos
	Link = 'link',
	Button = 'button'
}
enum TargetType {
	// Cambiar los strings por numeros para evitar errores de tipos
	Self = '_self',
	Blank = '_blank',
	Parent = '_parent',
	Top = '_top'
}
// List of all the data of the nav buttons
const data: NavList = {
	theme: 'light',
	elements: [
		{
			type: ElementType.Link,
			name: 'Commands',
			path: '/commands',
			locales: {
				en: 'Commands',
				de: 'Befehle',
				es: 'Comandos',
				fr: 'Commandes',
				it: 'Comandi',
				pl: 'Polecenia',
				pt: 'Comandos',
				ru: 'Команды',
				zh: '命令',
				ca: 'Ordres',
				ja: 'コマンド',
			},
		},
		{
			type: ElementType.Link,
			name: 'Add Bot',
			path: '/invite',
			locales: {
				en: 'Add Bot',
				de: 'Bot hinzufügen',
				es: 'Añadir Bot',
				fr: 'Ajouter un bot',
				it: 'Aggiungi un bot',
				pl: 'Dodaj bot',
				pt: 'Adicionar bot',
				ru: 'Добавить бота',
				zh: '添加机器人',
				ca: 'Afegir bot',
				ja: 'ボットを追加する',
			}
		},
		{
			type: ElementType.Link,
			name: 'Team',
			path: '/team',
			locales: {
				en: 'Team',
				de: 'Team',
				es: 'Equipo',
				fr: 'Équipe',
				it: 'Team',
				pl: 'Zespół',
				pt: 'Equipe',
				ru: 'Команда',
				zh: '团队',
				ca: 'Equip',
				ja: 'チーム'
			}
		}
	]
}

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

// Button element for the nav
interface Element {
	type: ElementType,
	name: string,
	path?: string, //to redirect
	admin?: boolean, 
	target?: TargetType,
	link?: {
		protocol: string,
		host: string,
		path: string,
	}
	locales?: {
		[key: string]: string
	}
}
interface NavList {
	theme: string;
	elements: Element[];
}
class NavElement extends React.Component<
	{
		data?: Element
	},
	{}> {
	render() {
		return (
			<div className="navbar-item">
				<Link className="navbar-item" data-tooltip={this.props.data.name} to={this.props.data.link ? `${this.props.data.link.protocol}://${this.props.data.link.host}/${this.props.data.link.path}` : (this.props.data.path ? this.props.data.path : '#')} target={this.props.data.target ? this.props.data.target : '_self'}>
					<p>{this.props.data.locales[navigator.language.slice(0, 2)]}</p>
					<span className="underline"></span>
				</Link>
			</div>
		);
	}
}

class NavComponent extends React.Component {
	constructor(props: any) {
		super(props);
		this.state = { user: props.user };
	}
	options = (e) => {
		let userOptions = document.getElementById('user-options')?.style.display;
		let languageSelector = document.getElementById('language-selector')?.style.display;
		if (userOptions === 'flex') {
			userOptions = 'none';
			document.getElementsByClassName('arrow-icon')[0].classList.remove("open");
			languageSelector = 'none';
		} else {
			userOptions = 'flex';
			document.getElementsByClassName('arrow-icon')[0].classList.add("open");
		}
	};
	languageSelector = (e) => {
		let languageSelector = document.getElementById('language-selector')?.style.display;
		if (languageSelector === 'flex') {
			languageSelector = 'none';
		} else {
			languageSelector = 'flex';
		}
	};
	openMenu = (e) => {
		let menu = document.getElementById('menu')?.style.display;
		if (menu === 'flex') {
			menu = 'none';
		} else {
			menu = 'flex';
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
					{
						console.log("The language is: " + navigator.language)
					}
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
								{
									data.elements.map((element, index) => <NavElement key={index} data={element} />)
								}
								<div className="navbar-item">
									<Link className="navbar-item" data-tooltip="Support" to="/support">
										<p>Support</p>
										<span className="underline"></span>
									</Link>
								</div>
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
								<div className="nav-premium-button">
									<Link className="button" to="/premium">
										<p>Premium</p>
										<span className="underline"></span>
									</Link>
								</div>
								<div className="navbar-item">
									<Link className="navbar-item" data-tooltip="Dashboard" to="/dashboard">
										<p>Dashboard</p>
										<span className="underline"></span>
									</Link>
								</div>
								{
									user ?
										(<React.Fragment>
											<div className="user-loged" id='user' onClick={this.options}>
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
											</div>
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
											<div className="navbar-login">
												<Link className="navbar-login" to="/auth">
													<b>Login</b>
												</Link>
											</div>
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