import React from "react";
import "./Embeds.scss";

class TextInput extends React.Component<{}, {}> {
	constructor(props) {
		super(props);
		this.state = {
			value: props.value || ""
		};
	}
	render() {
		return (
			<div
				role="textbox"
				className='textInput'
				placeholder="589423297956151298"
				contentEditable
				onInput={(e) => {
					this.setState({ channel: e.currentTarget.textContent });
				}} />
		);
	}
}

interface State {
	name: string;
	channel: string;
	embed: {
		title?: string;
		description?: string;
		url?: string;
		color?: string;
		timestamp?: string;
		footer?: {
			text: string;
			icon_url: string;
		};
		thumbnail?: {
			url: string;
		};
		image?: string;
		author?: {
			name?: string;
			iconURL?: string;
			url?: string;
		};
	};
}

export default class Embeds extends React.Component<{}, State> {
	state: State = {
		name: '',
		channel: '',
		embed: {
			color: '#00bcd4',
			title: '',
			description: '',
			url: null,
			footer: null,
			thumbnail: null,
			image: null,
			author: {
				name: '',
				iconURL: null
			}
		}
	}
	generateEmbed() {
		let data = {
			name: this.state.name,
			channel: this.state.channel,
			embed: {
				author: {
					iconURL: this.state.embed.author.iconURL,
					name: this.state.embed.author.name,
				},
				title: this.state.embed.title,
				description: this.state.embed.description,
				url: this.state.embed.url,
				color: this.state.embed.color,
				image: this.state.embed.image,
				footer: this.state.embed.footer,
			}
		}
		console.log(data);
	}
	render() {
		return (
			<div className="embeds">
				<section className="embedCreator">
					<div className="settings">
						<div className="channelSelector">
							<label>Embed Name</label>
							<div role="textbox" className='textInput' placeholder="Insert a name" contentEditable onInput={(e) => {
								this.setState({ name: e.currentTarget.textContent });
							}} />
						</div>
						<div className="channelSelector">
							<label>Channel ID</label>
							<div role="textbox" className='textInput' placeholder="589423297956151298" contentEditable onInput={(e) => {
								this.setState({ channel: e.currentTarget.textContent });
							}} />
							<ul className="channels"></ul>
						</div>
					</div>
					<div className="embed">
						<span className="stripeLine" style={{ background: this.state.embed.color }}></span>
						<div className="stripeColor">
							<label>Stripe color</label>
							<div className="colors">
								<input defaultChecked type="radio" name="color" style={{ background: '#00bcd4' }} onClick={(e) => {
									this.setState({
										embed: {
											...this.state.embed,
											color: '#00bcd4'
										}
									});
								}} />
								<input type="radio" name="color" style={{ background: '#3f51b5' }} onClick={(e) => {
									this.setState({
										embed: {
											...this.state.embed,
											color: '#3f51b5',
										}
									});
								}} />
								<input type="radio" name="color" style={{ background: '#ff5722' }} onClick={(e) => {
									this.setState({
										embed: {
											...this.state.embed,
											color: '#ff5722',
										}
									});
								}} />
							</div>
						</div>
						<div className="embedBody">
							<div className="author">
								<div
									className="image"
									style={this.state.embed.author.iconURL !== null ? { backgroundImage: `url(${this.state.embed.author.iconURL})` } : {}}
									onClick={(e) => {
										let input = document.getElementsByName('EmbedAuthorIconURL')[0] as HTMLInputElement;
										input.click();
									}
									}>
									<input
										type="file"
										name="EmbedAuthorIconURL"
										accept="image/x-png,image/gif,image/jpeg"
										style={{ display: 'none' }}
										onChange={(e) => {
											let file = e.target.files[0];
											this.setState({
												embed: {
													...this.state.embed,
													author: {
														...this.state.embed.author,
														iconURL: URL.createObjectURL(file)
													}
												}
											});
											console.log(this.state.embed.author.iconURL);
										}} />
									<i className="fa-regular fa-image" style={this.state.embed.author.iconURL !== null ? { display: 'none' } : {}}></i>
								</div>
								<div role="textbox" className="textInput" placeholder="Write your message here..." contentEditable />
							</div>
							<div className="title">
								<div role="textbox" className="textInput" placeholder="Write your message here..." contentEditable onInput={(e) => {
									this.setState({
										embed: {
											...this.state.embed,
											title: e.currentTarget.textContent
										}
									});
								}} />
								<div role="textbox" className="textInput" placeholder="Write your message here..." contentEditable />
							</div>
							<div className="description">
								<div role="textbox" className={`textInput${this.state.embed.description.length > 2000 ? ' error' : ''}`} placeholder="Write your message here..." contentEditable onInput={(e) => {
									this.setState({
										embed: {
											...this.state.embed,
											description: e.currentTarget.textContent
										}
									});
								}} />
								<span className="characterData">{String(this.state.embed.description).length} / 2000</span>
							</div>
							<div className="fields">
								<div className="field" draggable="true">
									<div className="data">
										<div role="textbox" className="textInput" placeholder="Write your message here..." contentEditable />
										<div role="textbox" className="textInput" placeholder="Write your message here..." contentEditable />
									</div>
									<div className="actions">
										<button className="delete"></button>
										<button className="inline"></button>
									</div>
								</div>
							</div>
							<div className="images">
								<div
									className="image"
									onClick={(e) => {
										let input = document.getElementsByName('EmbedImage')[0] as HTMLInputElement;
										input.click();
									}
									}>
									<input
										type="file"
										name="EmbedImage"
										accept="image/x-png,image/gif,image/jpeg"
										style={{ display: 'none' }}
										onChange={(e) => {
											let file = e.target.files[0];
											this.setState({
												embed: {
													...this.state.embed,
													image: URL.createObjectURL(file)
												}
											});
										}} />
									{
										this.state.embed.image !== null ? (
											<img
												src={this.state.embed.image}
												alt="Image"
												style={{
													maxHeight: '100%',
													maxWidth: '100%',
													objectFit: 'contain'
												}} />
										) : <></>
									}
									<i className="fa-regular fa-image" style={this.state.embed.image !== null ? { display: 'none' } : {}}></i>
								</div>
							</div>
							<div className="footer"></div>
						</div>
					</div>
					<div className="buttons">
						<button className="save" onClick={(e) => {
							console.log('save');
							this.generateEmbed();
						}}>Save</button>
						<button className="send">Send</button>
						<button className="preview">Preview</button>
					</div>
				</section>
			</div>
		);
	}
}