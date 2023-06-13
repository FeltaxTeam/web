import React, { Children } from "react";
import './Historic.scss';
import DB from "../DB";

const infoColles = {
	'Castellers de Vilafranca': {
		logo: 'https://www.castellersdevilafranca.cat/wp-content/uploads/2018/02/escut-castellers-de-vilafranca.png',
		color: '#00b09a',
	},
	'Castellers de Badalona': {
		color: '#fbbe49',
		logo: null
	},
	'Castellers de Castellar del Vallès': {
		color: '#8a0f11',
		logo: null
	},
	'Castellers de Montcada i Reixac': {
		color: '#b22222',
		logo: null
	},
	'Minyons de Santa Cristina': {
		color: '#86c440',
		logo: null
	},
	'Esperxats de l\'Estany': {
		color: '#2f9695',
		logo: null
	},
	'Guillats de la Selva': {
		color: '#f57242',
		logo: null
	},
	'Castellers de Castelldefels': {
		color: '#fee601',
		logo: null
	},
}

class SVG extends React.Component<{
}> {
	render() {
		function getPath(type: string) {
			return Array(32).fill(0).map((_, i) => {
				let castells = DB.filter((f) => f.date.slice(-4) == `${new Date().getFullYear() - i}`).reduce((a, b) => a + b.results.filter(r => r.estat == type).length, 0);
				return `S ${10 + (22 * i)} ${100 - (castells / 2)}, ${10 + (22 * i)} ${100 - (castells / 2)}`
			}).join('\n')
		}
		const beginPointD = 100 - (DB.filter((i) => i.date.slice(-4) == `${new Date().getFullYear()}`).reduce((a, b) => a + b.results.filter(r => r.estat == '(Descarregat)').length, 0) / 2);
		const beginPointC = 100 - (DB.filter((i) => i.date.slice(-4) == `${new Date().getFullYear()}`).reduce((a, b) => a + b.results.filter(r => r.estat == '(Carregat)').length, 0) / 2);
		const beginPointID = 100 - (DB.filter((i) => i.date.slice(-4) == `${new Date().getFullYear()}`).reduce((a, b) => a + b.results.filter(r => r.estat == '(Intent Desmuntat)').length, 0) / 2);
		const beginPointI = 100 - (DB.filter((i) => i.date.slice(-4) == `${new Date().getFullYear()}`).reduce((a, b) => a + b.results.filter(r => r.estat == '(Intent)').length, 0) / 2);
		return (
			<svg
				preserveAspectRatio="none"
				viewBox={`0 0 ${20 * 32 + 2 * 31} 100`}
				style={{ width: `${20 * 32 + 2 * 31}px` }}
			>
				<path d={`M ${10},${beginPointD} L ${10},${beginPointD} C ${10},${beginPointD} ${10},${beginPointD} ${10},${beginPointD} ${getPath('(Descarregat)')}`} className="line descarregat"></path>
				<path d={`M ${10},${beginPointC} L ${10},${beginPointC} C ${10},${beginPointC} ${10},${beginPointC} ${10},${beginPointC} ${getPath('(Carregat)')}`} className="line carregat"></path>
				<path d={`M ${10},${beginPointID} L ${10},${beginPointID} C ${10},${beginPointID} ${10},${beginPointID} ${10},${beginPointID} ${getPath('(Intent Desmuntat)')}`} className="line intentDesmuntat"></path>
				<path d={`M ${10},${beginPointI} L ${10},${beginPointI} C ${10},${beginPointI} ${10},${beginPointI} ${10},${beginPointI} ${getPath('(Intent)')}`} className="line intent"></path>
			</svg>
		);
	}
}

class Search extends React.Component<{
	placeholder: string;
	value: string | null;
	onInput: React.FormEventHandler<HTMLInputElement> | React.MouseEventHandler<HTMLElement>;
}, {}> {
	render() {
		return (
			<span className="searchBox any">
				<input type="search" name={this.props.placeholder} placeholder={this.props.placeholder} value={this.props.value !== null && this.props.value !== '' ? this.props.value : ''} onInput={this.props.onInput as React.FormEventHandler<HTMLInputElement>} />
				{
					this.props.children !== undefined ? <ul className="options">
						{
							Children.map(this.props.children, (child) => {
								return <li className="option" onClick={this.props.onInput as React.MouseEventHandler<HTMLElement>}>{child}</li>
							})
						}

					</ul> : null
				}
			</span>
		)
	}
}

export default class Historic extends React.Component<{}, {
	historicPage: number;
	resumSort: string;
	search: {
		diada: string | null;
		year: string | null;
		castell: string | null;
	}
}> {
	constructor(props: any) {
		super(props);
		this.state = {
			historicPage: 0,
			resumSort: 'd',
			search: {
				diada: null,
				year: null,
				castell: null,
			}
		};
	}
	render() {
		let I = { total: 0, c: 0, d: 0, id: 0, i: 0, rD: 0 };
		DB.map((item) => {
			I.total += item.results.length;
			item.results.filter((r) => r.estat == '(Descarregat)').map((r) => I.d += 1);
			item.results.filter((r) => r.estat == '(Carregat)').map((r) => I.c += 1);
			item.results.filter((r) => r.estat == '(Intent Desmuntat)').map((r) => I.id += 1);
			item.results.filter((r) => r.estat == '(Intent)').map((r) => I.i += 1);
		});
		I.rD = I.d / I.total * 100;
		const castellsCount = DB.reduce((a, b) => {
			for (let i = 0; i < b.results.length; i++) {
				if (a[b.results[i].castell] === undefined) {
					a[b.results[i].castell] = { count: 1 };
				} else {
					a[b.results[i].castell].count++;
				}
			}
			return a;
		}, {});
		let count = {};

		this.shouldComponentUpdate = (nextProps, nextState) => {
			if (this.state.historicPage != nextState.historicPage) {
				return true;
			}
			if (this.state.resumSort != nextState.resumSort) {
				return true;
			}
			if (this.state.search.diada != nextState.search.diada) {
				return true;
			}
			if (this.state.search.year != nextState.search.year) {
				return true;
			}
			if (this.state.search.castell != nextState.search.castell) {
				return true;
			}
			return false;
		}

		return (
			<div className="historic">
				<div className="warning">
					<i className="fa-solid fa-triangle-exclamation"></i>
					<p className="descripcio">
						<span className="title">Avís</span>
						<span className="text">Aquesta pàgina està en fase de desenvolupament. Hi poden haver errors.</span>
					</p>
					<i className="fa-solid fa-triangle-exclamation"></i>
				</div>
				<div className="stats">
					<div className="carregats">
						<div className="title">Total</div>
						<div className="value">{I.total}</div>
					</div>
					<div className="descarregats">
						<div className="title">Descarregats</div>
						<div className="value">{I.d}</div>
					</div>
					<div className="ratio">
						<div className="title">Ratio Descarregats</div>
						<div className="value">{I.rD.toFixed(2)}%</div>
					</div>
					<div className="graphicByYears">
						<div className="data">
							<span className="legend">
								<i className="fa-solid fa-info"></i>
								<div className="content">
									<div className="title">Llegenda</div>
									<div className="item">
										<span className="color" style={{ background: '#f00' }}></span>
										<div className="text">C / ID / I</div>
									</div>
									<div className="item">
										<span className="color" style={{ background: '#0f0' }}></span>
										<div className="text">Carregat</div>
									</div>
								</div>
							</span>
							<div className="graphic">
								<SVG />
								{
									Array(new Date().getFullYear() - 1991).fill(0).map((_, i) => {
										let year = new Date().getFullYear() - i;
										let data = DB.filter((i) => i.date.slice(-4) == `${year}`);
										let castellsCarregats = data.reduce((a, b) => a + b.results.filter(r => r.estat == '(Carregat)' || r.estat == '(Intent Desmuntat)' || r.estat == '(Intent)').length, 0);
										let castellsDescarregats = data.reduce((a, b) => a + b.results.filter(r => r.estat == '(Descarregat)').length, 0);
										return (
											<div className={`year ${year}`} key={year} onMouseOver={
												(e) => {
													const el = document.querySelectorAll(":hover");
													if (el.length > 0) {
														for (let i = 0; i < el.length; i++) {
															if (el[i].classList.contains('year')) {
																document.getElementsByClassName('info')[0].innerHTML =
																	`
																	<div class="year">${year}</div>
																	<div class="castellsCarregats">${castellsCarregats}</div>
																	<div class="castellsTotals">${castellsDescarregats + castellsCarregats}</div>
																		`;
																return;
															}
														}
														document.getElementsByClassName('info')[0].innerHTML = '';
													}
												}}
												onMouseOut={
													(e) => {
														document.getElementsByClassName('info')[0].innerHTML = '';
													}
												}>
												<div className="bar" style={{ height: `${data.reduce((a, b) => a + b.results.length, 0)}px`, '--carregats': `${castellsCarregats}px` } as React.CSSProperties}>
													<span className="n">{data.reduce((a, b) => a + b.results.length, 0)}</span>
													<span className="year">{year}</span>
												</div>
											</div>
										);
									})
								}
							</div>
						</div>
						<section className="info"></section>
					</div>
				</div>
				<section className="resum">
					<div className="content">
						<div className="title">
							Mostrar Resum
						</div>
						<table className="castells">
							<thead>
								<tr>
									<th>Castell</th>
									<th>
										<span className="sort" onClick={
											(e) => {
												this.setState({ resumSort: '(Descarregat)' });
												this.forceUpdate();
											}
										}>
											Descarregats
											<i className="fa-solid fa-sort"></i>
										</span>
									</th>
									<th>
										<span className="sort" onClick={
											(e) => {
												this.setState({ resumSort: '(Carregat)' });
												this.forceUpdate();
											}
										}>
											Carregats
											<i className="fa-solid fa-sort"></i>
										</span>
									</th>
									<th>
										<span className="sort" onClick={
											(e) => {
												this.setState({ resumSort: '(Intent Desmuntat)' });
												this.forceUpdate();
											}
										}>
											Intent Desmuntat
											<i className="fa-solid fa-sort"></i>
										</span>
									</th>
									<th>
										<span className="sort" onClick={
											(e) => {
												this.setState({ resumSort: '(Intent)' });
												this.forceUpdate();
											}
										}>
											Intent
											<i className="fa-solid fa-sort"></i>
										</span>
									</th>
									<th>
										<span className="sort" onClick={
											(e) => {
												this.setState({ resumSort: 'Total' });
												this.forceUpdate();
											}
										}>
											Total
											<i className="fa-solid fa-sort"></i>
										</span>
									</th>
									<th>
										<span className="sort" onClick={
											(e) => {
												this.setState({ resumSort: 'Ratio' });
												this.forceUpdate();
											}
										}>
											Ratio
											<i className="fa-solid fa-sort"></i>
										</span>
									</th>
								</tr>
							</thead>
							<tbody>
								{
									Object.keys(castellsCount).sort(
										(ac, bc) => {
											if (this.state.resumSort == '(Descarregat)' || this.state.resumSort == '(Carregat)' || this.state.resumSort == '(Intent Desmuntat)' || this.state.resumSort == '(Intent)') {
												let aD = DB.reduce((a, b) => a + (b.results ? b.results.filter(r => r.castell == ac && r.estat == this.state.resumSort).length : 0), 0);
												let bD = DB.reduce((a, b) => a + (b.results ? b.results.filter(r => r.castell == bc && r.estat == this.state.resumSort).length : 0), 0);
												return bD - aD;
											} else if (this.state.resumSort == 'Total' || this.state.resumSort == 'Ratio') {
												let aT = DB.reduce((a, b) => a + (b.results ? b.results.filter(r => r.castell == ac).length : 0), 0);
												let bT = DB.reduce((a, b) => a + (b.results ? b.results.filter(r => r.castell == bc).length : 0), 0);
												if (this.state.resumSort == 'Total') {
													return bT - aT;
												} else {
													let aD = DB.reduce((a, b) => a + (b.results ? b.results.filter(r => r.castell == ac && r.estat == '(Descarregat)').length : 0), 0);
													let bD = DB.reduce((a, b) => a + (b.results ? b.results.filter(r => r.castell == bc && r.estat == '(Descarregat)').length : 0), 0);
													let aR = aD / aT;
													let bR = bD / bT;
													return bR - aR;
												}
											}
										}
									).map((c) => {
										let descarregats = DB.reduce((a, b) => a + b.results.filter(r => r.castell == c && r.estat == '(Descarregat)').length, 0);
										let carregats = DB.reduce((a, b) => a + b.results.filter(r => r.castell == c && (r.estat == '(Carregat)')).length, 0);
										let intentDesmuntat = DB.reduce((a, b) => a + b.results.filter(r => r.castell == c && (r.estat == '(Intent Desmuntat)')).length, 0);
										let intent = DB.reduce((a, b) => a + b.results.filter(r => r.castell == c && (r.estat == '(Intent)')).length, 0);
										let total = carregats + descarregats + intentDesmuntat + intent;
										let ratio = (descarregats / total) * 100;
										return (
											<tr key={c}>
												<td>{c}</td>
												<td>{descarregats}</td>
												<td>{carregats}</td>
												<td>{intentDesmuntat}</td>
												<td>{intent}</td>
												<td>{total}</td>
												<td>{ratio.toFixed(2)}%</td>
											</tr>
										);
									})
								}
								<tr >
									<td>Total</td>
									<td>
										{
											DB.reduce((a, b) => a + b.results.filter(r => r.estat == '(Descarregat)').length, 0)
										}
									</td>
									<td>
										{
											DB.reduce((a, b) => a + b.results.filter(r => r.estat == '(Carregat)').length, 0)
										}
									</td>
									<td>
										{
											DB.reduce((a, b) => a + b.results.filter(r => r.estat == '(Intent Desmuntat)').length, 0)
										}
									</td>
									<td>
										{
											DB.reduce((a, b) => a + b.results.filter(r => r.estat == '(Intent)').length, 0)
										}
									</td>
									<td>
										{
											DB.reduce((a, b) => a + b.results.length, 0)
										}
									</td>
									<td>
										{
											(DB.reduce((a, b) => a + b.results.filter(r => r.estat == '(Descarregat)').length, 0) / DB.reduce((a, b) => a + b.results.length, 0) * 100).toFixed(2)
										}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
				<div className="cercar">
					<Search placeholder="Diada" value={this.state.search.diada !== null && this.state.search.diada !== '' ? this.state.search.diada : ''} onInput={
						(e) => {
							this.setState({
								search: {
									...this.state.search,
									diada: (e.target as HTMLInputElement).value || (e.target as HTMLInputElement).innerHTML
								}
							});
							this.forceUpdate();
						}
					}
					></Search>
					<Search placeholder="Any" value={this.state.search.year !== null && this.state.search.year !== '' ? this.state.search.year : ''} onInput={
						(e) => {
							this.setState({
								search: {
									...this.state.search,
									year: (e.target as HTMLInputElement).value || (e.target as HTMLInputElement).innerHTML
								}
							});
							this.forceUpdate();
						}
					}
					>
						{
							Array(new Date().getFullYear() - 1991).fill(0).map((_, i) => new Date().getFullYear() - i).filter(
								(_, i) => this.state.search.year !== null && this.state.search.year !== '' ? _.toString().toLowerCase().includes(this.state.search.year.toLowerCase()) : true
							)
						}
					</Search>
					<Search placeholder="Castell" value={this.state.search.castell !== null && this.state.search.castell !== '' ? this.state.search.castell : ''} onInput={
						(e) => {
							this.setState({
								search: {
									...this.state.search,
									castell: (e.target as HTMLInputElement).value || (e.target as HTMLInputElement).innerHTML
								}
							});
							this.forceUpdate();
						}
					}
					>
						{
							Object.keys(castellsCount).filter(
								(i) => this.state.search.castell !== null && this.state.search.castell !== '' ? i.toLowerCase().includes(this.state.search.castell.toLowerCase()) : true
							).map((_, i) => _)
						}
					</Search>
					<div className="pageControl">
						<button className="page previus" aria-label="Anterior" onClick={
							() => {
								this.setState({ historicPage: this.state.historicPage - 1 });
								this.forceUpdate();
								(document.querySelector('input[name="page"]') as HTMLInputElement).value = (this.state.historicPage).toString();
							}
						} disabled={isNaN(this.state.historicPage) || this.state.historicPage <= 0}>
							<i className="fa-solid fa-chevron-left" />
						</button>
						<div className="pageSelector">
							<input type="text" name="page" id="" defaultValue={this.state.historicPage + 1} contentEditable onInput={
								(e) => {
									this.setState({ historicPage: Number((e.target as HTMLInputElement).value) - 1 });
								}
							} />
							<span>
								de {
									Math.trunc(DB.slice(0, DB.length)
										.filter(
											(i) => this.state.search.castell !== null && this.state.search.castell !== '' ? i.results.filter((i) => i.castell === this.state.search.castell).length > 0 : true
										)
										.filter(
											(i) => this.state.search.diada !== null && this.state.search.diada !== '' ? i.title.toLowerCase().includes(this.state.search.diada.toLowerCase()) : true
										)
										.filter(
											(i) => {
												return this.state.search.year !== null && this.state.search.year !== '' ? i.date.split('/')[2].includes(this.state.search.year.toString()) : true
											}
										).length / 25) + 1
								}
							</span>
						</div>
						<button className="page later" aria-label="Següent" onClick={
							() => {
								this.setState({ historicPage: this.state.historicPage + 1 });
								this.forceUpdate();
								(document.querySelector('input[name="page"]') as HTMLInputElement).value = (this.state.historicPage + 2).toString();
							}
						} disabled={this.state.historicPage === Math.trunc(DB.slice(0, DB.length)
							.filter(
								(i) => this.state.search.castell !== null && this.state.search.castell !== '' ? i.results.filter((i) => i.castell === this.state.search.castell).length > 0 : true
							)
							.filter(
								(i) => this.state.search.diada !== null && this.state.search.diada !== '' ? i.title.toLowerCase().includes(this.state.search.diada.toLowerCase()) : true
							)
							.filter(
								(i) => {
									return this.state.search.year !== null && this.state.search.year !== '' ? i.date.split('/')[2].includes(this.state.search.year.toString()) : true
								}
							).length / 25)}>
							<i className="fa-solid fa-chevron-right" />
						</button>
						<button className="resetSearchParameters" aria-label="Restableixer" onClick={
							() => {
								this.setState({
									search: {
										year: null,
										castell: null,
										diada: null
									}
								});
								this.forceUpdate();
							}
						}>
							<i className="fa-solid fa-arrow-rotate-right"></i>
						</button>
					</div>
				</div>
				<div className="actuacions">
					{
						DB
							.slice(0, DB.length)
							.filter(
								(i) => this.state.search.castell !== null && this.state.search.castell !== '' ? i.results.filter((i) => i.castell === this.state.search.castell).length > 0 : true
							)
							.filter(
								(i) => this.state.search.diada !== null && this.state.search.diada !== '' ? i.title.toLowerCase().includes(this.state.search.diada.toLowerCase()) : true
							)
							.filter(
								(i) => {
									return this.state.search.year !== null && this.state.search.year !== '' ? i.date.split('/')[2].includes(this.state.search.year.toString()) : true
								}
							).length !== 0
							?
							DB.reverse()
								.slice(0, DB.length)
								.filter(
									(i) => this.state.search.castell !== null && this.state.search.castell !== '' ? i.results.filter((i) => i.castell === this.state.search.castell).length > 0 : true
								)
								.filter(
									(i) => this.state.search.diada !== null && this.state.search.diada !== '' ? i.title.toLowerCase().includes(this.state.search.diada.toLowerCase()) : true
								)
								.filter(
									(i) => {
										return this.state.search.year !== null && this.state.search.year.toString() !== '' ? i.date.split('/')[2].includes(this.state.search.year.toString()) : true
									}
								)
								.map((_, i) =>
									<section className="performance" key={i}>
										<div className="head">
											<h1>{_.title.replace('<br>', '\n')}</h1>
										</div>
										<div className="body">
											<div className="time">
												<span className="date"><i className="fa-regular fa-calendar-days" /> {_.date}</span>
												<span className="hour"><i className="fa-regular fa-clock" /> {_.hour !== null ? _.hour : '--:--'}</span>
											</div>
											<div className="location">
												<span className="city">{_.location.city}</span>
												<span className="name">{_.location.name}</span>
											</div>
											<div className="castells">
												{
													_.results.map((_, i) =>
														<div key={`${_.castell}-${i}`} className="castell">
															<span className="estat" data-estat={_.estat.slice(1, -1).split(' ').map(s => s[0].toUpperCase()).join('')}>{_.estat.slice(1, -1).split(' ').map(s => s[0].toUpperCase()).join('')}</span> {_.castell}
														</div>
													)
												}
											</div>
										</div>
										<div className="colles">
											{
												_.colles !== undefined ? _.colles.map((_, i) =>
													<div key={i} className="colla">
														<span
															className="color"
															style={{
																background: infoColles[_] !== undefined && infoColles[_].color.startsWith('#') ? infoColles[_].color : `#fff`
															}}
														></span>
														<span className="name">{_}</span>
													</div>
												) : null
											}
										</div>
										<div className="images" style={{ display: 'none' }}>
											{
												new Array((Math.random() * 4 | 0) + 1).fill(0).map((_, i) =>
													<img key={i} style={{ background: `rgb(${Math.random() * 255 | 0},${Math.random() * 255 | 0},${Math.random() * 255 | 0})` }} />
												)
											}
										</div>
										<div className="tags">
											{
												(function () {
													// check if a castell is done bye first time in history
													let tags = [];
													if (_.results) {
														_.results.forEach((item) => {
															if (count[item.castell] === undefined) {
																tags.push(item.castell);
																count[item.castell] = 1;
															}
														});
													}
													return tags.map((tag, i) =>
														<span key={i} className="tag"><i className="fa-solid fa-star"></i>{tag}</span>
													);
												})()
											}
										</div>
									</section>
								).reverse().slice(25 * ((this.state.historicPage - 1) + 1), 25 * (this.state.historicPage + 1)) : <div className="no-results"> No s'han trobat resultats </div>
					}
				</div>
				<div className="pageControl">
					<button className="page previus" aria-label="Anterior" onClick={
						() => {
							this.setState({ historicPage: this.state.historicPage - 1 });
							this.forceUpdate();
							(document.querySelector('input[name="page"]') as HTMLInputElement).value = (this.state.historicPage).toString();
						}
					} disabled={isNaN(this.state.historicPage) || this.state.historicPage <= 0}>
						<i className="fa-solid fa-chevron-left" />
					</button>
					<div className="pageSelector">
						<input type="text" name="page" id="" defaultValue={this.state.historicPage + 1} contentEditable onInput={
							(e) => {
								this.setState({ historicPage: Number((e.target as HTMLInputElement).value) - 1 });
							}
						} />
						<span>
							de {
								Math.trunc(DB.slice(0, DB.length)
									.filter(
										(i) => this.state.search.castell !== null && this.state.search.castell !== '' ? i.results.filter((i) => i.castell === this.state.search.castell).length > 0 : true
									)
									.filter(
										(i) => this.state.search.diada !== null && this.state.search.diada !== '' ? i.title.toLowerCase().includes(this.state.search.diada.toLowerCase()) : true
									)
									.filter(
										(i) => {
											return this.state.search.year !== null && this.state.search.year !== '' ? i.date.split('/')[2].includes(this.state.search.year.toString()) : true
										}
									).length / 25) + 1
							}
						</span>
					</div>
					<button className="page later" aria-label="Següent" onClick={
						() => {
							this.setState({ historicPage: this.state.historicPage + 1 });
							this.forceUpdate();
							(document.querySelector('input[name="page"]') as HTMLInputElement).value = (this.state.historicPage + 2).toString();
						}
					} disabled={this.state.historicPage === Math.trunc(DB.slice(0, DB.length)
						.filter(
							(i) => this.state.search.castell !== null && this.state.search.castell !== '' ? i.results.filter((i) => i.castell === this.state.search.castell).length > 0 : true
						)
						.filter(
							(i) => this.state.search.diada !== null && this.state.search.diada !== '' ? i.title.toLowerCase().includes(this.state.search.diada.toLowerCase()) : true
						)
						.filter(
							(i) => {
								return this.state.search.year !== null && this.state.search.year !== '' ? i.date.split('/')[2].includes(this.state.search.year.toString()) : true
							}
						).length / 25)}>
						<i className="fa-solid fa-chevron-right" />
					</button>
				</div>
			</div>
		);
	}
}
