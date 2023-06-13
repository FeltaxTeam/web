import React from "react";
import './Automoderation.scss';

class Select extends React.Component<{
	multiple?: boolean;
	defaultValue?: string;
	options: {
		name: string;
		value: string;
	}[];
}, {
	multiple?: boolean;
	defaultValue?: string;
	options: {
		name: string;
		value: string;
	}[];
}> {
	constructor(props: {
		multiple?: boolean;
		defaultValue?: string;
		options: {
			name: string;
			value: string;
		}[];
	}) {
		super(props);
		this.state = props;
	}
	render() {
		return (
			<div
				className='select'
				data-value={this.state.defaultValue}
				style={{
					cursor: 'pointer',
					display: 'flex',
					position: 'relative',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '0 10px',
					textAlign: 'center',
				}}
				onClick={(e) => {
					let optionsDropdown = e.currentTarget.querySelector('ul.options');
					(optionsDropdown as HTMLElement).style.display = (optionsDropdown as HTMLElement).style.display === 'block' ? 'none' : 'block';
				}}>
				<div className="defaultValue" style={{
					userSelect: 'none',
				}}>
					{/* {console.log(this.state.options.find((option) => option.value === this.state.defaultValue))} */}
					{this.state.options.find((option) => option.value === this.state.defaultValue).name}
				</div>
				<ul className="options" style={{
					position: 'absolute',
					top: '40px',
					left: '0',
					minWidth: '100%',
					width: 'max-content',
					maxWidth: '200%',
					height: 'fit-content',
					background: '#2f3136',
					borderRadius: '4px',
					boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 3px 0 rgba(0, 0, 0, 0.2)',
					zIndex: '100',
					padding: '0',
					margin: '0',
					listStyle: 'none',
					maxHeight: '130px',
					overflowY: 'scroll',
					overflowX: 'hidden',
					display: 'none'
				}}>
					{this.state.options.map((option) => (
						<option
							value={option.value}
							selected={option.value === this.state.defaultValue}
							style={{
								userSelect: 'none',
								height: '26px',
								color: '#fff',
								lineHeight: '26px',
								padding: '0 10px',
								cursor: 'pointer',
							}}
							key={option.value}
							onClick={
								(e) => {
									this.setState({ defaultValue: option.value });
									(e.currentTarget.parentElement as HTMLElement).style.display = 'none';
								}
							}>{option.name}</option>
					))}
				</ul>
			</div >
		);
	}
}

export default class Automoderation extends React.Component<{
	guild: any;
}, {
	actions: {
		type: string;
		infractions: number;
		duration: number;
	}[] | null;
}> {
	constructor(props: any) {
		super(props);
		this.state = {
			actions: [
				{
					type: "ban",
					infractions: 3,
					duration: 1
				}
			]
		};
	}
	render() {
		const guild = (this.props.guild !== "") ? this.props.guild : { name: "GUILD" };
		if (guild == null || guild.name === "GUILD") return <></>;

		function handleClickOutside(event: any) {
			if (event.target.className !== 'select' && event.target.className !== 'defaultValue' && event.target.className !== 'options') {
				let optionsDropdown = document.querySelectorAll('ul.options');
				optionsDropdown.forEach((option) => {
					(option as HTMLElement).style.display = 'none';
				});
			}
		}

		document.addEventListener('click', handleClickOutside);

		return (
			<>
				<main className="automod ">
					<div className="automoderation-header">
						<h1>Automoderation</h1>
						<p>Automoderation is a feature that automatically moderates your server. It can automatically delete messages, kick or ban users, and more.</p>
					</div>
					<div className="sandbox">
						{
							this.state.actions.map((action, index) => (
								<div className="actionContainer" key={index} data-index={index}>
									<div className="action" style={{
										position: 'relative',
									}}>
										<div className="type">
											<Select
												defaultValue={action.type}
												options={[
													{
														name: "Ban",
														value: "ban"
													},
													{
														name: "Kick",
														value: "kick"
													},
													{
														name: "Mute",
														value: "mute"
													},
													{
														name: "Warn",
														value: "warn"
													}
												]} />
										</div>
										<span className="text">
											when someone has
										</span>
										<div className="infractions">
											<Select
												defaultValue={action.infractions.toString()}
												options={new Array(10).fill(0).map((_, i) => ({
													name: `${i + 1} infraction${i == 0 ? '' : 's'}`,
													value: `${i + 1}`
												}))} />
										</div>
										<span className="text">
											or more in the last
										</span>
										<div className="time">
											<Select
												defaultValue={action.duration == 0 ? 'XD' : action.duration.toString()}
												options={
													new Array(10).fill(0).map((_, i) => ({
														name: `${i + 1}`,
														value: `${i + 1}`
													}))
												}
											/>
											<Select
												defaultValue={'minutes'}
												options={[
													{
														name: `Minutes`,
														value: "minutes"
													},
													{
														name: `Hours`,
														value: "hours"
													},
													{
														name: `Days`,
														value: "days"
													},
													{
														name: `Weeks`,
														value: "weeks"
													},
													{
														name: `Months`,
														value: "months"
													},
												]}
											/>
										</div>
									</div>
									<span className="delete" style={{
										height: '50px',
										width: '50px',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										borderRadius: '4px',
										cursor: 'pointer',
										color: 'red'
									}} onClick={(e) => {
										console.dir((e.target as HTMLElement).parentElement.dataset.index);
										// console.dir((e.target as HTMLElement).parentElement.dataset);
										this.setState({
											actions: [
												...this.state.actions.filter((_, i) => {
													console.log(i, parseInt((e.target as HTMLElement).parentElement.dataset.index), _.infractions)
													return i !== parseInt((e.target as HTMLElement).parentElement.dataset.index)
												})
											]
										});
									}}>
										<i className="fa-regular fa-trash-can"></i>
									</span>
								</div>
							))
						}
						<div className="addAction" onClick={
							() => {
								this.state.actions.length < 10 ?
									this.setState({
										actions: [
											...this.state.actions,
											{
												type: "ban",
												infractions: 3,
												duration: 1
											}
										]
									}) :
									alert("You can only have 10 actions!");
							}
						}>
							<span>Add Action</span>
						</div>
					</div>
				</main>
			</>
		);
	}
}
