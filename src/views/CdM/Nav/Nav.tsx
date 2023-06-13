import React from "react";
import { User } from "../CdM";
import './Nav.scss';
import { Link } from "react-router-dom";

interface P {
	user?: User | null;
}
interface S { }

export default class Nav extends React.Component<P, S> {
	render() {
		return (
			<header id="header">
				<Link to='/'>
					<div className="logo">
						<img src='assets/CdMLogo.png' alt="Logo" className="logo" />
						<div className="name">
							Castellers de Mollet
						</div>
					</div>
				</Link>
				<nav>
					<ul>
						<li style={{ display: 'none' }}>
							<Link to='/assajos'>Assajos</Link>
						</li>
						<li style={{ display: 'none' }}>
							<Link to='/assistencies'>Assistència</Link>
						</li>
						<li>
							<Link to='/historic'>Històric</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}