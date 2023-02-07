import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navigate from '../../utility/navigation';
import './Commands.scss'
import { COMMANDS } from './CommandComponents';
import Sidebar from './Sidebar/Sidebar';
const path = {
	get path() { return window.location.href.toLocaleLowerCase(); },
	get moduleName() { return path.path.split('/').pop()?.split('#')[0]; },
	get targetCommand() { return path.path.includes('#') ? path.path.split('#')[1] : ''; }
};

export default class Commands extends React.Component {
	render() {
		const moduleName = path.moduleName;
		//  let cName = path.path.split('#').pop() ?? 'help';
		console.log(COMMANDS);
		if (COMMANDS[moduleName] === undefined) {
			console.log(`moduleName: ${moduleName}`);
			return <Navigate to="/commands/main" />;
		}
		const commandElements = [];
		for (let i in COMMANDS) {
			commandElements.push(
				<Route key={i} path={`/${i}`} element={
					<>
						{
							COMMANDS[i].map((el, index) => {
								return <div key={index} className={`command ${i}`}>{
									<>
										<div className={'command-focuser'} id={el.name}></div>
										<header><div className='name command-title'>{el.name}</div></header>
										<div className='content'>
											{el.description ?
												<p className='description'>{el.description}</p> : <></>
											}
											<div className="usage">
												<div className="commandStructure">
													<div className="command">
														<div className="prefix">/</div>
														<div className="name">{el.name}</div>
													</div>
													{el.options.length > 0 && <div className="options"> {
														<div className="options">
															{
																el.options.map((option, index) => {
																	return <div key={index} className={`option ${option.optional ? 'optional' : ''}`}>{option.name}</div>
																})
															}
														</div>}
													</div>}
												</div>
											</div>
											<ol className="options">
												{
													el.options.map((option, index) => {
														return <li key={index} className={`option ${option.optional ? 'optional' : ''}`}>
															<div className="name">{option.name}</div>
															<div className="description">{option.description}</div>
														</li>
													})
												}
											</ol>
										</div>
									</>
								}</div>
							})
						}
					</>
				} />
			);
		}
		return (
			<div className="webBody">
				<Sidebar />
				<CommandTargeter />
				<div className="command-panel">
					<Routes>
						{commandElements}
					</Routes>
				</div>
			</div>
		);
	}
}

function CommandTargeter() {
	const location = useLocation()
	useEffect(() => {
		console.log(path)
		if (path.targetCommand !== '') {
			const target = document.getElementById(path.targetCommand);
			if (target !== null) {
				target.scrollIntoView({ behavior: 'smooth', });
				window.scrollBy(0, -20);
			}
		}
		document.getElementById(path.targetCommand)?.scrollIntoView();
	}, [location])
	return <></>
}