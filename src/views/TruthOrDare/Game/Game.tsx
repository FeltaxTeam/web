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
					<div className="selectPlayer" onClick={
						async () => {
							var n = Math.floor(Math.random() * props.game.players.length);
							console.log(n);

							let circle = document.querySelector('.circle') as HTMLElement;
							//circle.style.animation = null;
							//circle.style.animationPlayState = 'running';
							await new Promise(resolve => setTimeout(resolve, 1));
							/*circle.style.setProperty('--playerDeg', `rotateZ(calc(720deg + (${360 / props.game.players.length}deg * ${n}) + 2.8deg))`);
							console.log(circle.style)
							circle.style.animation = `rotate 2s linear 1`;
							setTimeout(() => {
								circle.style.animationPlayState = 'paused';
							}, 1991);*/
							circle.style.transform = `rotateZ(deg)`;
							setTimeout(() => {}, 100);
							circle.style.transform = `rotateZ(calc(720deg + (${360 / props.game.players.length}deg * ${n})))`;
							
						}
					}>
						<svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
							<defs>
								<filter id="round">
									<feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
									<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
									<feComposite in="SourceGraphic" in2="goo" operator="atop" />
								</filter>
							</defs>
						</svg>
						<div className="triangle"></div>
						<div className="hexagone">
						</div>
					</div>
				</div>
			</React.Fragment>
		</>
	);
}