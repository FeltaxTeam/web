import React from "react";
import { GameSchema } from "../Classes/GameSchema";
import './Game.scss';

export default function Game(props: { game: GameSchema }) {
	let colors = ['#ff0000', '#ff0077', '#f86600', '#00b4ff', '#a687ff', '#fff600', '#bbc700', '#a0db00', '#7ced00', '#3cff00'];
	return (
		<>
			<React.Fragment>
				<div>
					PlaceHolder
				</div>
				<div className="players">
					<div className="circle">
						{
							props?.game?.players.map((player, i) => (
								<span key={i} className='player' style={{ transform: `rotate(calc(${360 / props.game.players.length}deg * ${i}))` } as React.CSSProperties}>
									<b style={{ background: colors[i] } as React.CSSProperties}> {/* transform: `rotate(calc(-${360 / props.game.players.length}deg * ${i}))`, */}
										<i className="fa-solid fa-user"></i>
									</b>
								</span>
							))
						}
					</div>
					<div className="selector">
						<div className="marker"></div>
						<div className="line"></div>
					</div>
				</div>
			</React.Fragment>
		</>
	);
}