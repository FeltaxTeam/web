import React from 'react';
import './Nav.scss'
import { Link, Routes, Route } from 'react-router-dom';
import LogoSVG from '../../../prefabs/LogoSVG';
import Menu from '../Menu/Menu';

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
const UserOptionsList = {
	elements: {
		language: {
			locales: {
				en: 'Languages',
				es: 'Idiomas',
				ca: 'Llenguatges',
				de: 'Sprachen',
				fr: 'Langues',
				it: 'Lingue',
				pt: 'Línguas',
				ru: 'Языки',
				zh: '语言',
				ko: '언어',
				pl: 'Języki',
				ja: '言語'
			}
		},
		settings: {
			locales: {
				en: 'Settings',
				es: 'Configuración',
				ca: 'Configuració',
				de: 'Einstellungen',
				fr: 'Paramètres',
				it: 'Impostazioni',
				pt: 'Configurações',
				ru: 'Настройки',
				zh: '设置',
				ko: '설정',
				pl: 'Ustawienia',
				ja: '設定'
			}
		},
		logout: {
			locales: {
				en: 'Logout',
				es: 'Cerrar sesión',
				ca: 'Tancar sessió',
				de: 'Abmelden',
				fr: 'Déconnexion',
				it: 'Esci',
				pt: 'Sair',
				ru: 'Выйти',
				zh: '登出',
				ko: '로그아웃',
				pl: 'Wyloguj',
				ja: 'ログアウト'
			}
		}
	}
}
export const data: NavList = {
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
				ko: '명령어',
				ca: 'Ordres',
				ja: 'コマンド',
			},
		},
		{
			type: ElementType.Link,
			name: 'Add Bot',
			path: '/invite',
			target: TargetType.Blank,
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
				ko: '봇 추가',
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
				ko: '팀',
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
				ko: '지원',
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
		flag: 'en'
	},
	{
		name: 'Français',
		code: 'fr',
		flag: 'fr'
	},
	{
		name: 'Catalá',
		code: 'ca',
		flag: 'ca'
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
		flag: 'ja'
	},
	{
		name: '한국어',
		code: 'ko',
		flag: 'ko'
	},
	{
		name: 'Português',
		code: 'pt',
		flag: 'pt'
	}
];
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
export class NavElement extends React.Component<
	{
		data?: Element,
		locale?: string,
	},
	{}> {
	render() {
		return (
			<div className="navbar-item">
				<Link className="navbar-item" data-tooltip={this.props.data.name} to={this.props.data.link ? `${this.props.data.link.protocol}://${this.props.data.link.host}/${this.props.data.link.path}` : (this.props.data.path ? this.props.data.path : '#')} target={this.props.data.target ? this.props.data.target : '_self'}>
					<p>{this.props.data.locales[this.props.locale]}</p>
					<span className="underline"></span>
				</Link>
			</div>
		);
	}
}

class NavComponent extends React.Component<{ user: any }, { user: any, language: string }> {
	constructor(props: any) {
		super(props);
		this.state = { user: props.user, language: navigator.language.slice(0, 2) };
	}
	options(e) {
		e.preventDefault();
		const userOptions = document.getElementById('user-options');
		const languageSelector = document.getElementById('language-selector');
		if (userOptions.style.visibility === 'visible') {
			userOptions.style.visibility = 'hidden';
			userOptions.style.opacity = '0';
			userOptions.style.top = '90px';
			languageSelector.style.visibility = 'hidden';
			languageSelector.style.opacity = '0';
			languageSelector.style.top = '90px';
			document.getElementsByClassName('arrow-icon')[0].classList.remove("open");
		} else {
			userOptions.style.visibility = 'visible';
			userOptions.style.opacity = '1';
			userOptions.style.top = '70px';
			languageSelector.style.visibility = 'hidden';
			languageSelector.style.opacity = '0';
			languageSelector.style.top = '20px';
			document.getElementsByClassName('arrow-icon')[0].classList.add("open");
		}
	}
	languageSelector(e) {
		e.preventDefault();
		const languageSelector = document.getElementById('language-selector');
		if (languageSelector.style.visibility === 'visible') {
			languageSelector.style.visibility = 'hidden';
			languageSelector.style.opacity = '0';
			languageSelector.style.top = '20px';
		} else {
			languageSelector.style.visibility = 'visible';
			languageSelector.style.opacity = '1';
			languageSelector.style.top = '0px';
		}
	}
	openMenu(e) {
		e.preventDefault();
		let menu = document.getElementById('menu');
		if (document.getElementById('menu')?.style.visibility === 'visible') {
			document.getElementById('menu').style.visibility = 'hidden';
			document.getElementById('menu').style.left = '100vw';
		} else {
			document.getElementById('menu').style.visibility = 'visible';
			document.getElementById('menu').style.left = '0';
		}
	}
	componentDidMount() {
		window.addEventListener('click', function (e: any) {
			const userOptions = document.getElementById('user-options');
			const languageSelector = document.getElementById('language-selector');
			if (userOptions && !userOptions.contains(e.target)) {
				if (!(document.getElementById('user').contains(e.target) || userOptions.contains(e.target) || languageSelector.contains(e.target)) && document.getElementById('user-options').style.visibility !== 'hidden') {
					userOptions.style.visibility = 'hidden';
					userOptions.style.opacity = '0';
					userOptions.style.top = '90px';
					document.getElementsByClassName('arrow-icon')[0].classList.remove("open");
					languageSelector.style.visibility = 'hidden';
					languageSelector.style.opacity = '0';
					languageSelector.style.top = '20px';
				}
			}
		});
	}
	componentDidUpdate(prevProps) {
		if (this.props.user !== prevProps.user && this.state.language !== prevProps.language) {
			this.setState({ user: this.props.user, language: navigator.language.slice(0, 2) });
		}
		if (document.getElementById('language-selector')) {
			const w = document.getElementById('user-options')?.offsetWidth;
			document.getElementById('language-selector').style.right = `${w + 10}px`;
		}
	}
	render() {
		const user = this.state.user;
		const authIds = ['438390132538605589', '417407496286633995'];
		return (
			<React.Fragment>
				<header id='mainHeader'>
					<svg className="background" viewBox="0, 0, 100, 10.1" preserveAspectRatio="none">
						<path className="bg"
							d="M 0 0 L 0 10 L 33 10 C 35 10 36 9 37 8 C 38 7 39 6 41 6 L 59 6 C 61 6 62 7 63 8 C 64 9 65 10 67 10 L 100 10 L 100 0 L 0 0">
						</path>
						<path className="line"
							d="M 0 10 L 33 10 C 35 10 36 9 37 8 C 38 7 39 6 41 6 L 59 6 C 61 6 62 7 63 8 C 64 9 65 10 67 10 L 100 10"></path>
					</svg>
					<Menu language={this.state.language} user={this.state.user} />
					<nav className='main'>
						<div className="nav-web">
							<div className="container">
								<div className="navbar-hamburguer">
									<button className="navbar-hamburguer" onClick={this.openMenu} title="Title">
										<i className="fa-solid fa-bars"></i>
									</button>
								</div>
								{
									data.elements.map((element, index) => <NavElement key={index} data={element} locale={this.state.language} />)
								}
							</div>
						</div>
						<div className="navbar-logo-container">
							<Link to="/">
								<img src="/assets/logo116.webp" alt="awd" title="logo" className="navbar-logo" width="70px" height="70px" />
							</Link>
						</div>
						<div className="navbar-user">
							<div className="container">
								<div className="navbar-item">
									<Link className="navbar-item" data-tooltip="Premium" to="/premium" style={{
										cursor: 'not-allowed'
									}}>
										<p>Premium</p>
										<span
											className="underline"
											style={{
												backgroundColor: 'gold'
											}}></span>
									</Link>
								</div>
								<div className="navbar-item">
									<Link className="navbar-item" data-tooltip="Dashboard" to={`/${user !== null ? 'dashboard' : 'auth'}`}>
										<p>Dashboard</p>
										<span className="underline"></span>
									</Link>
								</div>
								{
									this.state.user !== null ?
										(<React.Fragment>
											<div className="user-loged" id='user' onClick={this.options}>
												<img
													loading="lazy"
													src={
														`https://cdn.discordapp.com/avatars/${user['id']}/${user['avatar']}.${user['avatar'].startsWith('a_') ? 'gif' : 'webp'}?size=128`
													}
													alt="Avatar"
													className="avatar" />
												<div className="username">
													{user['username']}
												</div>
												<div className="arrow-icon">
													<span className="left-bar"></span>
													<span className="right-bar"></span>
												</div>
											</div>
											<ul id="user-options">
												<li className="option dashboard">Dashboard</li>
												<li className="option language" onClick={this.languageSelector}>{UserOptionsList.elements['language'].locales[this.state.language]}<span className="selector"><img src={`assets/flags/1x1/${this.state.language}.svg`} alt="Language" loading='lazy' /></span>
												</li>
												<li className="option">{UserOptionsList.elements['settings'].locales[this.state.language]}</li>
												{
													authIds.includes(user.id) ? (<li className="option"><Link to="/admin"><LogoSVG size={20} strokeWidth={12} color="#2978e6" />Admin</Link></li>) : ''
												}
												<li className="option premium"><Link to="/premium"><i className="fa-solid fa-crown" />Premium</Link></li>
												<li className="option logout"><Link to="/logout">{UserOptionsList.elements['logout'].locales[this.state.language]}</Link></li>
												<ol id='language-selector'>
													{languages.map(language =>
														<li className="language" key={language.code} onClick={
															() => {
																if (language.code !== this.state.language) {
																	this.setState({ language: language.code });
																	(async () => {
																		await new Promise(resolve => setTimeout(resolve, 10));
																	})
																	document.documentElement.lang = language.code;
																}
															}
														}>
															<img
																src={`assets/flags/4x3/${language.flag}.svg`}
																loading="lazy"
																alt={language.code} />
															{language.name}
														</li>
													)}
												</ol>
											</ul>
										</React.Fragment>
										) : (
											<div className="navbar-item">
												<Link className="navbar-item" data-tooltip="Login" to="/auth">
													<p>Login</p>
													<span className="underline"></span>
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
export default function Nav(props: any) {
	const { paths, user } = props;
	const navProps = { "user": user }
	return <Routes>
		<Route path={'*'} element={<NavComponent {...navProps} />} />
		<Route path={'/'} element={<NavComponent {...navProps} />} />
		{paths.map((el: string, i: number) => {
			return <Route key={i} path={el} element={<></>} />
		})}
	</Routes>
}