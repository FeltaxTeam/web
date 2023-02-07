import React from 'react';
import { Link } from 'react-router-dom';
import './Guild404.css'

export default function NotFoundGuild() {
	return (
		<div className="error">
			<div className="numbers">
				<h1 className="number four">4</h1>
				<h1 className="number zero">0</h1>
				<h1 className="number four">4</h1>
			</div>
			<Link className="back" to="/dashboard">Back to Dashboard</Link>
		</div>
	);
}