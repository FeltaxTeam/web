import React from 'react';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import './404.css';

export default function NotFoundElement() {
	return (
		<div className="error">
			<div className="numbers">
				<h1 className="number four">4</h1>
				<h1 className="number zero">0</h1>
				<h1 className="number four">4</h1>
			</div>
				<Link className="back" to="/">Back to Feltax</Link>
		</div>
	);
}