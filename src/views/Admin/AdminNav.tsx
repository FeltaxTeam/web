import React from 'react';
import './AdminNav.scss';
import './../App/Home/Nav/Nav.scss'
import { Link, Routes, Route } from 'react-router-dom';
import LogoSVG from '../prefabs/LogoSVG';
import { NavElement } from '../App/Home/Nav/Nav';

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
		},
		{
			type: ElementType.Link,
			name: 'Support',
			path: '/support',
			locales: {
				en: 'Support',
				de: 'Unterstützung',
				es: 'Soporte',
				fr: 'Soutien',
				it: 'Supporto',
				pl: 'Wsparcie',
				pt: 'Suporte',
				ru: 'Поддержка',
				zh: '支持',
				ca: 'Suport',
				ja: 'サポート'
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

class AdminNavComponent extends React.Component<{ user: any }, { user: any }> {
	constructor(props: any) {
		super(props);
		this.state = {
			user: props.user
		}
	}
	options = (e) => {
		e.preventDefault();
		console.log('options');
		const userOptions = document.getElementById('user-options');
		const languageSelector = document.getElementById('language-selector');
		if (userOptions.style.display === 'flex') {
			userOptions.style.display = 'none';
			document.getElementsByClassName('arrow-icon')[0].classList.remove("open");
			languageSelector.style.display = 'none';
		} else {
			userOptions.style.display = 'flex';
			document.getElementsByClassName('arrow-icon')[0].classList.add("open");
		}
	};
	languageSelector = (e) => {
		e.preventDefault();
		const languageSelector = document.getElementById('language-selector');
		if (languageSelector.style.display === 'flex') {
			languageSelector.style.display = 'none';
		} else {
			languageSelector.style.display = 'flex';
		}
	};
	openMenu = (e) => {
		e.preventDefault();
		let menu = document.getElementById('menu')?.style.display;
		if (menu === 'flex') {
			menu = 'none';
		} else {
			menu = 'flex';
		}
	};
	componentDidUpdate(prevProps) {
		if (this.props.user !== prevProps.user) {
			this.setState({ user: this.props.user });
		}
	}
	render() {
		const user = this.state.user;
		const authIds = ['438390132538605589', '417407496286633995'];
		console.log(user);
		return (
			<React.Fragment>
				<header>
					{
						console.log("The language is: " + navigator.language)
					}
					<nav className="admin">
						{
							data.elements.map((element, index) => <NavElement key={index} data={element} />)
						}
						<div className="navbar-user">
							<div className="container">
								{
									user ?
										(<React.Fragment>
											<div className="user-loged" id='user' onClick={this.options}>
												<img
													src={
														`https://cdn.discordapp.com/avatars/${user['id']}/${user['avatar']}.${user['avatar'].startsWith('a_') ? 'gif' : 'webp'}?size=512`
													}
													alt="Avatar"
													height={40}
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
							</div>
						</div>
					</nav>
				</header>
			</React.Fragment>
		);
	}
}
export default function AdminNav(props: any) {
	const { paths, user } = props;
	const navProps = { user: user }
	return <Routes>
		<Route path={'*'} element={<AdminNavComponent {...navProps} />} />
		<Route path={'/'} element={<AdminNavComponent {...navProps} />} />
		{paths.map((el: string, i) => {
			return <Route key={i} path={el} element={<></>} />
		})}
	</Routes>
}