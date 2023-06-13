import React from "react";
import './Ensayos.scss'

let examples: Castle[] = [
	'3de7',
	'3de7a',
	'4de9f',
	'4de10fm',
	'Pde5',
	'Pde9fmp'
]

type Size = 'P' | 2 | 3 | 4 | 5 | 7 | 'Vano' | 'T';
type Castle = `${Size}de${number}${'' | 'a' | 'sf' | `f${'' | `m${'' | 'p'}`}`}`;
const castle: Castle = '3de8fm';
const regex = /(\d+)de(\d+)((\ba\b)|(\bfm?\b))/;
const CastleRegExp = /^(\d)de(\d+)(a|fm?)$/;

class Trial extends React.Component<{
	i?: number
	data?: {
		name?: string,
		date?: string,
		place?: string,
		castles?: {
			type: Castle,
			image: URL,
		},
		transport?: any
	},
	title?: boolean
}, {}> {
	render() {
		document.title = 'Assatjos i Actuacions | 100% 💚';
		return (
			<div className="ensayo" onClick={
				(e) => {
					const el = document.querySelectorAll(":hover");
					for (let i = 0; i < el.length; i++) {
						if (el[i].classList.contains('ensayo') && this.props.i !== 0) {
							el[i].classList.toggle('open');
							return;
						}
					}
				}
			}>
				{
					this.props.title ?
						<header>
							<div className="name">
								Tipo
							</div>
							<div className="place">
								Lugar
							</div>
							<div className="date">
								Fecha
							</div>
							<div className="schedule">
								Horario
							</div>
						</header> :
						<header>
							<div className="name">
								Ensayo Normal
							</div>
							<div className="place">
								Sant Feliu del Llobregat
							</div>
							<div className="date">
								12/12/2020
							</div>
							<div className="schedule">
								12:00 - 14:00
							</div>
						</header>
				}
				{
					this.props.data !== undefined ?
						<div className="content">
							<div className="details">
								{
									this.props.data && this.props.data.place ?
										<div className="location">
											<div className="address">{this.props.data.place}</div>
											<a className="map" href={`https://maps.google.com/?ie=UTF8&t=h&q=${this.props.data.place}&spn=0.003381,0.017231&z=12`} target='_blank'>
												<iframe
													className="map"
													width="300"
													height="300"
													frameBorder="0"
													scrolling="no"
													loading="lazy"
													marginHeight={0}
													marginWidth={0}
													src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC06jOAfSvOHXZqzzv0irRGma-jKNEFCnY&q=${this.props.data.place}&zoom=10&maptype=satellite`} />
											</a>
										</div>
										: null
								}
								{
									this.props.data && this.props.data.transport ?
										<div className="transport onlyColla">
											Info Colla
										</div>
										: null
								}
							</div>
							<div className="castells">
								<div className="castell">
									<img src="https://fempinya.cat/telegram/onvaig.php?c=1496335346&q=24534&i=74c220271c5146a422cb69933f8f3052" alt="4de7" />
									<div className="label">
										4de7
									</div>
								</div>
							</div>
						</div>
						: null
				}
			</div >
		);
	}
}

interface EnsayosProps { }
interface EnsayosState { }
export default class Ensayos extends React.Component<EnsayosProps, EnsayosState> {
	constructor(props: any) {
		super(props);
		this.state = {
			user: null,
		};
	}
	render() {
		return (
			<div className="schedule">
				<div className="ensayos">
					<Trial key={0} i={0} title />
					{Array(10).fill(0).map((_, i) => <Trial key={i + 1} i={i + 1} data={{
						name: 'Ensayo',
						place: 'Plaza de la Villa, Sant Feliu de Llobregat',
						date: '2021-06-01',
						transport: 'Bus',
					}} />)}
				</div>
				<div className="actuaciones">
					<Trial key={0} i={0} title />
					{Array(10).fill(0).map((_, i) => <Trial key={i + 1} i={i + 1} data={{
						name: 'Ensayo',
						place: 'Plaza de la Villa, Sant Feliu de Llobregat',
						date: '2021-06-01',
					}} />)}
				</div>
			</div>

		);
	}
}