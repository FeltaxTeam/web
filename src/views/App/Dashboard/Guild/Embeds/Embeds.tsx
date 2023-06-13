import React from "react";
import "./Embeds.scss";

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
		fields?: {
			name: string;
			value: string;
			inline: boolean;
		}[];
		draggedField?: {
			name: string;
			value: string;
			inline: boolean;
		} | null;
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
			},
			fields: [
				{
					name: '',
					value: '',
					inline: false
				}
			]
		}
	}
	TextInput = (props: { state: string }) => {
		return (
			<div
				role="textbox"
				className='textInput'
				placeholder="589423297956151298"
				contentEditable
				onInput={(e) => {
					this.setState({
						embed: {
							...this.state.embed,
							[props.state]: e.currentTarget.textContent
						}
					});
				}} />
		);
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
				fields: this.state.embed.fields
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

	onDragStart = (event, index: number) => {
		console.log('dragstart', index)
		this.setState({
			embed: {
				...this.state.embed,
				draggedField: this.state.embed.fields[index]
			}
		});
		event.dataTransfer.setDragImage(event.target, 200, 20);
		event.dataTransfer.effectAllowed = "move";
		event.dataTransfer.setData("text/html", event.target.parentNode);
	}

	onDragEnd = () => {
		console.log('dragend')
		this.state.embed.draggedField = null;
	}

	onDragOver = (index) => {
		console.log('dragover', index)
		const fields = this.state.embed.fields;
		const hoveredField = fields[index];
		if (this.state.embed.draggedField === hoveredField) {
			return;
		}
		const filteredItems = fields.filter(item => item !== this.state.embed.draggedField);
		filteredItems.splice(index, 0, this.state.embed.draggedField);
		this.setState({
			embed: {
				...this.state.embed,
				fields: filteredItems
			}
		});
	}

	componentDidMount() {
		this.getChannels();
	}

	render() {
		return (
			<div className="embeds">
				<div className="warnings">
					<section className="warn high">
						<i className="fa-solid fa-circle-exclamation"></i>
						<p>
							Se pueden subir imagenes locales, pero en estos momentos el embed una vez enviado solo podrá mostrar aquellas imagenes que sean accesibles desde una URL.
						</p>
					</section>
					<section className="warn medium">
						<i className="fa-solid fa-circle-exclamation"></i>
						<p>
							Actualmente esta función se encuentra en desarrollo, por lo que puede ocasionar errores inesperados.
						</p>
					</section>
				</div>
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
								<ol className="category" key="voidChannels">
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
								</ol>
								{
									this.state.channels.filter((channel) => {
										return channel.type === 4;
									}).sort(
										(a, b) => {
											return a.position - b.position;
										})
										.map((channel) => {
											return (
												<ol className="category" key={channel.id}>
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
												</ol>
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
								<input type="radio" name="color" style={{ background: '#ffaa55' }} onClick={() => {
									this.setState({
										embed: {
											...this.state.embed,
											color: '#ffaa55',
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
													name: e.currentTarget.textContent !== '' ? e.currentTarget.textContent : ''
												}
											}
										});
									}
								} />
								<div role="textbox" className={`textInput url ${this.state.embed.url !== null && new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i').test(this.state.embed.url) !== true ? 'error' : ''
									}`} placeholder="Write your URL here..." contentEditable onInput={
										(e) => {
											this.setState({
												embed: {
													...this.state.embed,
													url: e.currentTarget.textContent.length >= 1 ? e.currentTarget.textContent : null
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
								{
									this.state.embed.fields.map((field, index) => {
										return (
											<div
												className={`field ${index}`}
												key={index}
												draggable={true}
												onDragOver={() => this.onDragOver(index)}
												onDragStart={(event) => this.onDragStart(event, index)}
												onDragEnd={this.onDragEnd}
											>
												<div className="data">
													<div className="moveArea"></div>
													<div role="textbox" className="textInput" placeholder="Write your title here..." contentEditable defaultValue={field.name} onInput={
														(e) => {
															this.setState({
																embed: {
																	...this.state.embed,
																	fields: this.state.embed.fields.map((f) => {
																		if (f.name === field.name) {
																			return {
																				...field,
																				name: e.currentTarget.textContent
																			};
																		} else {
																			return field;
																		}
																	})
																}
															});
														}
													} />
													<div role="textbox" className="textInput" placeholder="Write your text here..." contentEditable defaultValue={field.value} />
												</div>
												<div className="actions">
													<span className="inline" onClick={
														(e) => {
															this.setState({
																embed: {
																	...this.state.embed,
																	fields: this.state.embed.fields.map((f) => {
																		if (f.name === field.name) {
																			return {
																				...field,
																				inline: !field.inline
																			};
																		} else {
																			return field;
																		}
																	})
																}
															});
														}
													}>
														<i className="fa-solid fa-arrows-left-right-to-line"></i>
													</span>
													<span className="delete" onClick={
														(e) => {
															e.preventDefault();
															this.setState({
																embed: {
																	...this.state.embed,
																	fields:
																		this.state.embed.fields.filter((f) => {
																			console.log(f, field)
																			return f !== field
																		})

																}
															});
														}
													}>
														<i className="fa-regular fa-trash-can"></i>
													</span>
												</div>
											</div>
										)
									})
								}
								{this.state.embed.fields.length < 25 &&
									<div className="addField" onClick={
										(e) => {
											e.preventDefault();
											this.setState({
												embed: {
													...this.state.embed,
													fields: [
														...this.state.embed.fields,
														{
															name: '',
															value: '',
															inline: false
														}
													]
												}
											});
										}
									}>
										<i className="fa-solid fa-plus"></i>
									</div>
								}
							</div>
							<div className="images">
								{
									Array.from(Array(this.state.embed.images.length < 4 ? this.state.embed.images.length + 1 : this.state.embed.images.length).keys()).map((i) => (
										<div
											key={i}
											className="image"
											onClick={(e) => {
												e.stopPropagation();
												if ((document.getElementsByClassName('images')[0].getElementsByClassName('image')[i] as HTMLElement).classList.contains('beURLActive') !== true) {
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
											}
											}>
											<div role="textbox" className="textInput" placeholder="Write your message here..." contentEditable onInput={
												(e) => {
													e.stopPropagation();
													const images = this.state.embed.images;
													images[i] = e.currentTarget.textContent;
													this.setState({
														embed: {
															...this.state.embed,
															images
														}
													});
												}
											} />
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
												}}
												disabled={this.state.embed.images[i] ? true : false}
											/>
											{
												this.state.embed.images[i] ? (
													<img
														src={this.state.embed.images[i]}
														alt="Image"
														style={{
															maxHeight: '182px',
															maxWidth: '100%',
															height: '100%',
															objectFit: 'contain'
														}} />
												) : <></>
											}
											{
												i < 1 || this.state.embed.url !== null ? <i className="fa-regular fa-image" style={this.state.embed.images[i] ? { display: 'none' } : {}}></i>
													: <i className="fa-solid fa-lock"></i>
											}
											<i className="fa-solid fa-xmark"></i>
											<span
												className="beURL"
												onClick={
													(e) => {
														e.stopPropagation();
														const classList = (e.target as HTMLSpanElement).parentElement.classList;
														classList.contains('beURLActive') ? classList.remove('beURLActive') : classList.add('beURLActive');
													}
												}>
												<i className="fa-solid fa-link" style={{ pointerEvents: 'none' }}></i>
											</span>
											<span
												className="delete"
												onClick={
													(e) => {
														e.stopPropagation();
													}}
											>
												<i className="fa-regular fa-trash-can"></i>
											</span>
										</div>
									))
								}
							</div>
							<div className="footer">
								<div
									className="image"
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
						<button
							onClick={
								(e) => {
									window.open(`https://id.twitch.tv/oauth2/authorize
										?response_type=token
										&client_id=n65qa8f76cotiqgr7dbj3qb7qnefbr
										&redirect_uri=http://localhost:3000/twitch/auth
										&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls
										&force_verify=true`, '_blank');
								}
							}
						>Twitch</button>
					</div>
				</section>
			</div >
		);
	}
}
function applyMixins(derivedCtor: any, baseCtors: any[]) {
	baseCtors.forEach(baseCtor => {
		Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
			if (name !== 'constructor') {
				derivedCtor.prototype[name] = baseCtor.prototype[name];
			}
		});
	});
}
class TextInput extends React.Component {
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