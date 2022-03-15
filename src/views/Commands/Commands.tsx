import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Navigate from '../../utility/navigation';
import './Commands.scss'
import { commandComponents, commandInfos } from './CommandComponents';
let path = {
	get path() { return window.location.href.toLocaleLowerCase(); },
	get moduleName() { return path.path.split('/').pop()?.split('#')[0]; }
};
export default class Commands extends React.Component {
	render() {
		let moduleName = path.moduleName;
		let cName = path.path.split('#').pop() ?? 'help';
		console.log(commandComponents);
		if (commandComponents[moduleName] == undefined) {
			console.log(`moduleName: ${moduleName}`);
			return <Navigate to="/commands/main" />;
		}
		let commandElements = [];
		for (var i in commandComponents) {
			commandElements.push(
				<Route path={`/${i}`} element={<>{commandComponents[i].map((el: any) => { return el(); })}</>} />
			);
		}
		return (
			<div className="webBody">
				<div className="sidebar">
					<ul className='list'>
						<CommandList />
					</ul>
				</div>
				<div className="command-panel">
					{/* <CommandDisplay/> */}
					<ComponentFocuser />
					<Routes>
						{commandElements}
					</Routes>
				</div>
			</div>
		);
	}
}
function ComponentFocuser() {
	const location = useLocation();
	React.useEffect(() => {
		let el = document.getElementById(location.hash.substring(1));
		if (el) el.scrollIntoView();
	}, [location]);
	return <></>;
}
class CommandList extends React.Component {
	commandInfos: any;
	constructor(props: { commandInfos: any }) {
		super(props);
		this.commandInfos = props.commandInfos;
	}
	componentWillUpdate() {
		return false;
	}
	render() {
		const tagIcon: any = { 'premium': 'P', 'slash': '/' };
		let moduleList = [];
		for (var i in commandInfos) {
			moduleList.push(
				<div className='section' key={i}>
					<div className='name'>{i}</div>
					<ul>
						{
							commandInfos[i].map((cmd: any) => {
								return (
									<Link to={`/commands/${i}#${cmd.name.toLocaleLowerCase()}`} key={`${i}/${cmd.name}`}>
										<b className="command">
											<div className="name">{cmd.name}</div>
											{
												!cmd.tags ? '' :
													<div className="features">
														{
															cmd.tags.map((tag: string) => {
																return <div className={tag}>{tagIcon[tag]}</div>
															})
														}
													</div>
											}
										</b>
									</Link>
								)
							})
						}
					</ul>
				</div>
			);
		}
		return <>{moduleList}</>;
	}
}