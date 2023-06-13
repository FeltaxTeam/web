import React from "react";
import "./Calendar.scss";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

enum EventType {
	Assaig = 0,
	Actuació = 1,
	Activitat = 2,
}

export class Calendar extends React.Component {
	render() {
		const ADimarts = {
			type: EventType.Assaig,
			events: [
				{
					name: 'Assaig de Gralles i Tabals',
					start: '19:00',
					end: '20:00',
					location: 'C.C. La Era',
				},
				{
					name: 'Assaig General',
					start: '20:00',
					end: '22:00',
					location: 'C.C. La Era',
				},
			]
		}
		const ADivendres = {
			type: EventType.Assaig,
			events: [
				{
					name: 'Assaig de Gralles i Tabals',
					start: '19:00',
					end: '20:00',
					location: 'C.C. La Era',
				},
				{
					name: 'Assaig de Canalla',
					start: '20:00',
					end: '21:00',
					location: 'C.C. La Era',
				},
				{
					name: 'Escola de Castells',
					start: '20:30',
					end: '21:00',
					location: 'C.C. La Era',
				},
				{
					name: 'Assaig General',
					start: '21:00',
					end: '23:00',
					location: 'C.C. La Era',
				},
			]
		}
		let eventsJuny = {
			'2': {
				type: EventType.Actuació,
				events: [
					{
						name: 'Assaig General',
						start: '21:00',
						end: '22:30',
						location: 'Plaça Catalunya',
					},
					{
						name: 'Centenari Abelló',
						start: '22:30',
						end: null,
						location: 'Museu Abelló, Mollet del Vallès',
					}
				]
			},
			'4': {
				type: EventType.Actuació,
				events: [
					{
						name: 'Cercavila i Diada Festa Major Montcada',
						start: '12:00',
						end: null,
						location: 'Montcada i Reixac, Plaça Església',
					}
				]
			},
			'6': ADimarts,
			'9': ADivendres,
			'10': {
				type: EventType.Actuació,
				events: [
					{
						name: 'Pilar Arlequí',
						start: '17:00',
						end: null,
						location: 'Mollet del Vallès, Plaça Prat de la Riba',
					}
				]
			},
			'11': {
				type: EventType.Actuació,
				events: [
					{
						name: 'Diada de Primavera',
						start: '11:30',
						end: null,
						location: 'Barcelona, Plaça Orfila'
					}
				]
			},
			'13': ADimarts,
			'16': ADivendres,
			'18': {
				type: EventType.Actuació,
				events: [
					{
						name: 'Trobada Colles Vallès Oriental',
						start: '11:30',
						end: null,
						location: 'Parets del Vallès, Plaça de la Vila ',
					}
				]
			},
			'20': ADimarts,
			'22': ADimarts,
			'23': {
				type: EventType.Actuació,
				events: [
					{
						name: 'Cercavila i Pilar Flama Canigó',
						start: '19:15 cerc. 20:00 pilar',
						end: null,
						location: 'Mollet del Vallès, Plaça Catalunya',
					}
				]
			},
			'25': {
				type: EventType.Actuació,
				events: [
					{
						name: 'Diada Festa Major Canet de Mar',
						start: '20:00',
						end: null,
						location: 'Canet de Mar, Carrer Ample',
					}
				]
			},
			'27': ADimarts,
			'30': ADivendres,
		}
		let eventsMaig = {
			'2': ADimarts,
			'5': ADivendres,
			'7': {
				type: EventType.Actuació,
				events: [
					{
						name: 'Diada Aniversari Bateig',
						start: '12:00',
						end: null,
						location: 'Castellar del Vallès, Plaça Fabrica Nova',
					}
				]
			},
			'9': ADimarts,
			'12': ADivendres,
			'13': {
				type: EventType.Actuació,
				events: [
					{
						name: 'Pilar Nit dels Museus',
						start: '22:30',
						end: '23:00',
						location: 'Museu Abelló, Mollet del Vallès',
					}
				]
			},
			'16': ADimarts,
			'19': ADivendres,
			'20': {
				type: EventType.Actuació,
				events: [
					{
						name: 'Cercavila',
						start: '10:00',
						end: null,
						location: 'Mollet del Vallès, Plana Lledó',
					},
					{
						name: 'Diada Festa Major Porqueres',
						start: '17:30',
						end: null,
						location: 'Porqueres, Plaça Major',
					}
				]
			},
			'23': ADimarts,
			'26': ADivendres,
			'27': {
				type: EventType.Actuació,
				events: [
					{
						name: 'Torneig Futbol Sala Intercolles',
						start: '09:30',
						end: null,
						location: 'Mollet del Vallès, Escola Montseny',
					}
				]
			},
			'30': ADimarts,
		}
		let events = eventsJuny;
		const month = 6
		const year = 2023
		const months = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'];
		const days = ['DL', 'DM', 'DC', 'DJ', 'DV', 'DS', 'DG'];
		return (
			<>
				<button
					onClick={
						() => {
							const element = document.querySelector('div.calendar') as HTMLElement;
							toSvg(element).then(function (dataUrl) {
								let img = new Image();
								img.src = dataUrl;
								img.style.width = '100%';
								img.style.height = '100%';
								document.body.appendChild(img);
								let link = document.createElement('a');
								link.download = 'my-image-name.svg';
								link.href = dataUrl;
								link.click();
							});
							toPng(element).then(function (dataUrl) {
								let img = new Image();
								img.src = dataUrl;
								img.style.width = '100%';
								img.style.height = '100%';
								document.body.appendChild(img);
								let link = document.createElement('a');
								link.download = 'my-image-name.png';
								link.href = dataUrl;
								link.click();
							});
						}
					}
				>
					Download as Image
				</button>
				<div className="calendar">
					<main className="month">
						<header>
							<h2>{months[new Date(`${month}-01-2023`).getMonth()]}</h2>
						</header>
						<section className="days">
							{
								days.map((day, i) => {
									if (day !== undefined) {
										return <div
											key={day}
											className={`day name`}
											style={{
												gridArea: `${day}`,
												textAlign: 'center',
												fontWeight: 'bold',
											}}>
											<span>{day}</span>
										</div>
									}
								})
							}
							{
								new Array(new Date(year, month, 0).getDate()).fill(0).map((_, i) => {
									const date = new Date(`${month}-${i + 1}-${year}`);
									const day = date.getDate();
									const dayOfWeek = date.getDay() === 0 ? 7 : date.getDay();
									function getWeekInMonth(y, m, d) {
										let weekNum = 1;
										let weekDay = new Date(y, m - 1, 1).getDay();
										weekDay = weekDay === 0 ? 6 : weekDay - 1;
										let monday = 1 + (7 - weekDay);
										while (monday <= d) {
											weekNum++;
											monday += 7;
										}
										return weekNum;
									}
									const week = getWeekInMonth(year, month, day);
									return (
										<div
											key={`${day}-${dayOfWeek}-${week}`}
											className={`day ${(events[`${i + 1}`] !== null && events[`${i + 1}`] !== undefined) && `event${events[`${i + 1}`].type}`}`}
											data-day={dayOfWeek}
											data-week={week}
											data-type={events[`${i + 1}`]?.type}
											style={{
												gridArea: `w${week}d${dayOfWeek}`,
											}}>
											<span>{day}</span>
										</div>
									)
								})
							}
						</section>
					</main>
					<aside className="events">
						<ol>
							{
								new Array(new Date(year, month, 0).getDate()).fill(0).map((_, i) => {
									if (events[`${i + 1}`] === undefined) return;
									const days = [];
									const date = new Date(`${month}-${i + 1}-${year}`);
									const day = date.getDate();
									const week = Math.ceil((day + new Date(year, month - 1, 1).getDay()) / 7);
									if (events[`${i + 1}`] !== null) {
										return (
											<li
												key={`${day}-${week}`}
												className={`day`}
											>
												<div className="days">
													{
														Object.keys(events).filter((key) => {
															return JSON.stringify(events[key].events) == JSON.stringify(events[`${i + 1}`].events);
														}).map((key, i) => {
															const day = new Date(`${month}-${key}-${year}`).getDate();
															days.push(day);
															return <span key={i} className="day">{day}</span>
														})
													}
												</div>
												<ul>
													{
														events[`${i + 1}`].events.map((e, i) => {
															return (
																<li key={i}>
																	<span className="name">{e.name}</span>
																	<span className="time">{e.start}{e.end !== null ? `- ${e.end}` : ''}</span>
																	<span className="place">{e.location}</span>
																</li>
															)
														})
													}
													{days.forEach((d) => delete events[`${d}`])}
												</ul>
											</li>
										)
									}
								})
							}
						</ol>
					</aside>
				</div>
			</>
		);
	}
}