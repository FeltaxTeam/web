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
	channels: any[];
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
		images?: string[];
		author?: {
			name?: string;
			iconURL?: string;
			url?: string;
		};
	};
}

export default class Embeds extends React.Component<{}, State> {
	state: State = {
		channels: [],
		name: '',
		channel: '',
		embed: {
			color: '#00bcd4',
			title: '',
			description: '',
			url: null,
			footer: {
				text: '',
				icon_url: null
			},
			thumbnail: {
				url: null
			},
			images: [],
			author: {
				name: '',
				iconURL: null
			}
		}
	}
	generateEmbed() {
		let data: any = {
			name: this.state.name,
			channel: this.state.channel,
			embeds: [{
				author: {
					iconURL: this.state.embed.author.iconURL,
					name: this.state.embed.author.name,
				},
				title: this.state.embed.title,
				description: this.state.embed.description,
				url: this.state.embed.url,
				color: this.state.embed.color,
				image: this.state.embed.images[0],
				footer: this.state.embed.footer,
				thumbnail: this.state.embed.thumbnail,
			}]
		}
		if (this.state.embed.images && this.state.embed.images.length > 1) {
			for (let i = 1; i < this.state.embed.images.length; i++) {
				data.embeds.push({
					url: this.state.embed.url,
					image: this.state.embed.images[i]
				});
			}
		}
		console.log(data);
	}
	getChannels() {
		let x = fetch('https://api.feltax.xyz/discord/guilds/514150100575191040/channels')
			.then(res => {
				if (res.status !== 200 && res.status !== 201) {
					console.log(res);
					throw new Error('Failed to fetch channels');
				}
				return res.json()
			})
			.then(res => {
				this.setState({ channels: res });
			});
		return x;
	}
	componentDidMount() {
		this.getChannels();
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
							<label>Channel</label>
							<div role="textbox" className='textInput' placeholder={this.state.channels.find(
								(channel) => {
									return channel.id === this.state.channel;
								}
							) ? `#${this.state.channels.find(
								(channel) => {
									return channel.id === this.state.channel;
								}
							).name}` : 'Select a channel'
							} contentEditable onInput={(e) => {
								this.setState({ channel: e.currentTarget.textContent });
							}} />
							<ul
								className="channelList"
							>
								<li className="category" key="voidChannels">
									{
										this.state.channels.filter((channel) => {
											return channel.parent_id === null && channel.type !== 4;
										}).filter((channel) => {
											return channel.type !== 2;
										}).sort(
											(a, b) => {
												return a.position - b.position;
											}).map((channel) => {
												return (
													<li className="channel" key={channel.id} onClick={() => {
														this.setState({ channel: channel.id });
													}}>
														#{channel.name}
													</li>
												);
											})
									}
								</li>
								{
									this.state.channels.filter((channel) => {
										return channel.type === 4;
									}).sort(
										(a, b) => {
											return a.position - b.position;
										})
										.map((channel) => {
											return (
												<li className="category" key={channel.id}>
													<span className="name">{channel.name}</span>
													<ul className="channels">
														{
															this.state.channels.filter((channel2) => {
																return channel2.parent_id === channel.id;
															}).filter((channel) => {
																return channel.type !== 2;
															}).sort(
																(a, b) => {
																	return a.position - b.position;
																}).map((channel2) => {
																	return (
																		<li className='channel' key={channel2.id} onClick={() => {
																			this.setState({ channel: channel2.id });
																		}}>
																			#{channel2.name}
																		</li>
																	);
																})
														}
													</ul>
												</li>
											);
										})
								}
							</ul>
						</div>
					</div>
					<div className="embed">
						<span className="stripeLine" style={{ background: this.state.embed.color }}></span>
						<div className="stripeColor">
							<label>Stripe color</label>
							<div className="colors">
								<input defaultChecked type="radio" name="color" style={{ background: '#00bcd4' }} onClick={() => {
									this.setState({
										embed: {
											...this.state.embed,
											color: '#00bcd4'
										}
									});
								}} />
								<input type="radio" name="color" style={{ background: '#3f51b5' }} onClick={() => {
									this.setState({
										embed: {
											...this.state.embed,
											color: '#3f51b5',
										}
									});
								}} />
								<input type="radio" name="color" style={{ background: '#ff5722' }} onClick={() => {
									this.setState({
										embed: {
											...this.state.embed,
											color: '#ff5722',
										}
									});
								}} />
								<input type="radio" name="color" style={{ background: this.state.embed.color }} onClick={() => {
									const input = document.getElementsByName('EmbedStripeColor')[0] as HTMLInputElement;
									input.click();
								}} />
								<input type="color" name="EmbedStripeColor" onChange={
									(e) => {
										this.setState({
											embed: {
												...this.state.embed,
												color: e.target.value,
											}
										});
									}
								} />
							</div>
						</div>
						<div className="embedBody">
							<div className="author">
								<div
									className="image"
									style={this.state.embed.author.iconURL !== null ? { backgroundImage: `url(${this.state.embed.author.iconURL})` } : {}}
									onClick={(e) => {
										if (this.state.embed.author.iconURL !== null) {
											this.setState({
												embed: {
													...this.state.embed,
													author: {
														...this.state.embed.author,
														iconURL: null
													}
												}
											});
										} else {
											const input = document.getElementsByName('EmbedAuthorIconURL')[0] as HTMLInputElement;
											input.click();
										}
									}
									}>
									<input
										type="file"
										name="EmbedAuthorIconURL"
										accept="image/x-png,image/gif,image/jpeg"
										style={{ display: 'none' }}
										onChange={(e) => {
											const file = e.target.files[0];
											this.setState({
												embed: {
													...this.state.embed,
													author: {
														...this.state.embed.author,
														iconURL: URL.createObjectURL(file)
													}
												}
											});
										}} />
									{
										this.state.embed.author.iconURL !== null ? (
											<img
												src={this.state.embed.author.iconURL}
												alt="Image"
												style={{
													maxHeight: '100%',
													maxWidth: '100%',
													objectFit: 'contain'
												}} />
										) : <></>
									}
									<i className="fa-regular fa-image" style={this.state.embed.author.iconURL !== null ? { display: 'none' } : {}}></i>
									<i className="fa-solid fa-xmark"></i>
								</div>
								<div role="textbox" className="textInput message" placeholder="Write your message here..." contentEditable onInput={
									(e) => {
										this.setState({
											embed: {
												...this.state.embed,
												author: {
													...this.state.embed.author,
													name: e.currentTarget.textContent !== '' ? e.currentTarget.textContent : null
												}
											}
										});
									}
								} />
								<div role="textbox" className="textInput url" placeholder="Write your URL here..." contentEditable onInput={
									(e) => {
										this.setState({
											embed: {
												...this.state.embed,
												url: e.currentTarget.textContent !== '' ? e.currentTarget.textContent : null
											}
										});
									}
								} />
							</div>
							<div className="title">
								<div role="textbox" className="textInput" placeholder="Write your title here..." contentEditable onInput={(e) => {
									this.setState({
										embed: {
											...this.state.embed,
											title: e.currentTarget.textContent
										}
									});
								}} />
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
								{
									Array.from(Array(this.state.embed.images.length < 4 ? this.state.embed.images.length + 1 : this.state.embed.images.length).keys()).map((i) => (
										<div
											key={i}
											className="image"
											onClick={(e) => {
												if (this.state.embed.images[i]) {
													this.setState({
														embed: {
															...this.state.embed,
															images: this.state.embed.images.filter((image, index) => index !== i)
														}
													});
												} else {
													if (i > 0 && this.state.embed.url === null) {
														alert('You must set an URL before adding an image.');
													} else {
														const input = document.getElementsByName('EmbedImage')[i] as HTMLInputElement;
														input.click();
													}
												}
											}
											}>
											<input
												type="file"
												name="EmbedImage"
												accept="image/x-png,image/gif,image/jpeg"
												style={{ display: 'none' }}
												onChange={(e) => {
													const file = e.target.files[0];
													this.setState({
														embed: {
															...this.state.embed,
															images: [...this.state.embed.images, URL.createObjectURL(file)]
														}
													});
												}} disabled={this.state.embed.images[i] ? true : false} />
											{
												this.state.embed.images[i] ? (
													<img
														src={this.state.embed.images[i]}
														alt="Image"
														style={{
															maxHeight: '100%',
															maxWidth: '100%',
															objectFit: 'contain'
														}} />
												) : <></>
											}
											{
												i < 1 || this.state.embed.url !== null ? <i className="fa-regular fa-image" style={this.state.embed.images[i] ? { display: 'none' } : {}}></i>
													: <i className="fa-solid fa-lock"></i>
											}
											<i className="fa-solid fa-xmark"></i>
										</div>
									))
								}
							</div>
							<div className="footer">
								<div
									className="image"
									style={this.state.embed.footer.icon_url !== null ? { backgroundImage: `url(${this.state.embed.footer.icon_url})` } : {}}
									onClick={(e) => {
										if (this.state.embed.footer.icon_url !== null) {
											this.setState({
												embed: {
													...this.state.embed,
													footer: {
														...this.state.embed.footer,
														icon_url: null
													}
												}
											});
										} else {
											const input = document.getElementsByName('EmbedFooterIconURL')[0] as HTMLInputElement;
											input.click();
										}
									}
									}>
									<input
										type="file"
										name="EmbedFooterIconURL"
										accept="image/x-png,image/gif,image/jpeg"
										style={{ display: 'none' }}
										onChange={(e) => {
											const file = e.target.files[0];
											this.setState({
												embed: {
													...this.state.embed,
													footer: {
														...this.state.embed.footer,
														icon_url: URL.createObjectURL(file)
													}
												}
											});
										}} />
									{
										this.state.embed.footer.icon_url !== null ? (
											<img
												src={this.state.embed.footer.icon_url}
												alt="Image"
												style={{
													maxHeight: '100%',
													maxWidth: '100%',
													objectFit: 'contain'
												}} />
										) : <></>
									}
									<i className="fa-regular fa-image" style={this.state.embed.footer.icon_url !== null ? { display: 'none' } : {}}></i>
									<i className="fa-solid fa-xmark"></i>
								</div>
								<div role="textbox" className="textInput message" placeholder="Write your message here..." contentEditable onInput={
									(e) => {
										this.setState({
											embed: {
												...this.state.embed,
												footer: {
													...this.state.embed.footer,
													text: (e.target as HTMLDivElement).innerText
												}
											}
										});
									}
								} />
							</div>
							<div className="thumbnail">
								<div
									className="image"
									onClick={(e) => {
										if (this.state.embed.thumbnail.url !== null) {
											this.setState({
												embed: {
													...this.state.embed,
													thumbnail: {
														...this.state.embed.thumbnail,
														url: null
													}
												}
											});
										} else {
											const input = document.getElementsByName('EmbedThumbnailURL')[0] as HTMLInputElement;
											input.click();
										}
									}
									}>
									<input
										type="file"
										name="EmbedThumbnailURL"
										accept="image/x-png,image/gif,image/jpeg"
										style={{ display: 'none' }}
										onChange={(e) => {
											const file = e.target.files[0];
											this.setState({
												embed: {
													...this.state.embed,
													thumbnail: {
														...this.state.embed.thumbnail,
														url: URL.createObjectURL(file)
													}
												}
											});
										}} />
									{
										this.state.embed.thumbnail.url !== null ? (
											<img
												src={this.state.embed.thumbnail.url}
												alt="Image"
												style={{
													maxHeight: '100%',
													maxWidth: '100%',
													objectFit: 'contain'
												}} />
										) : <></>
									}
									<i className="fa-regular fa-image" style={this.state.embed.thumbnail.url !== null ? { display: 'none' } : {}}></i>
									<i className="fa-solid fa-xmark"></i>
								</div>
							</div>
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
				</section >
			</div >
		);
	}
}