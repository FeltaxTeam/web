import React from 'react';
import { fetchURL } from '../../../utility/fetching';
import './Nav.css'
import { Link, Routes, Route } from 'react-router-dom';
import LogoSVG from '../../LogoSVG'
class NavComponent extends React.Component {
	shouldReload: boolean;
	constructor(props) {
		super(props);
		this.state = { user: null };
	}
	getToken = async () => {
		let tokenType = localStorage.getItem('tokenType'), acessToken = localStorage.getItem('accessToken');
		console.log('user:');
		//@ts-ignore
		console.dir(this.state.user);
		if ((tokenType == null || acessToken == null) && /*@ts-ignore*/
			this.state.user != null) {
			console.log('noUser');
			this.setState({ user: null });
			this.shouldReload = true;
		} if ((tokenType != null && acessToken != null) &&/*@ts-ignore*/
			this.state.user == null) {
			console.log('SiUser');
			this.setState({ user: await fetchURL(tokenType, acessToken, 'https://discord.com/api/users/@me') });
			this.shouldReload = true;
		}
		this.shouldReload = false;
	}
	shoudlComponentUpdate() {
		let b = this.shouldReload;
		this.shouldReload = false;
		return b;
	}
	render() {
		this.getToken();
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
									<i className="fa-solid fa-bars"></i>
								</li>
							</ul>
						</div>
						<div className="navbar-logo-container">
							<Link to="/">
								<img src="https://feltax-app.herokuapp.com/logo.png" alt="awd" title="logo" className="navbar-logo" />
							</Link>
						</div>
						<div className="navbar-user">
							<ul className="container">
								<li className="nav-premium-button">
									<Link className="button" to="/premium">
										<span>❖</span>
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
											{
												authIds.includes(user.id) ? (
													<li className='navbar-item'>
														<Link to="/admin" className='navbar-item'>
															<b><LogoSVG size={20} strokeWidth={12} />Admin</b>
														</Link>
													</li>
												) : ''
											}
											<li className="user-loged">
												<img
													src={
														`https://cdn.discordapp.com/avatars/${user['id']}/${user['avatar']}.${user['avatar'].startsWith('a_') ? 'gif' : 'webp'}?size=512`
													}
													alt="Avatar"
													className="avatar" />
												<div className="username">
													{user['username']}
												</div>
												<Link className="logout-button" to="/logout">
													<i className="fas fa-sign-out-alt"></i>
												</Link>
											</li>
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
	let { paths } = props;
	// return (useRoutes(paths.map((el: string, i) => {
	// 	return { path: el, element: <></> }
	// })));

	return <Routes>
		<Route path={'*'} element={<NavComponent />} />
		<Route path={'/'} element={<NavComponent />} />
		{paths.map((el: string) => {
			return <Route path={el} element={<></>} />
		})}
	</Routes>
};