import React from "react";
import assets from "./Assets";
import "./Footer.scss";

export default class Footer extends React.Component<{}, {}> {
	render() {
		return (
			<footer className="footer">
				<div className="supporters">
					<div className="title">Amb el suport de</div>
					<div className="logos">
						<a href="https://www.diba.cat/es/" aria-label="DiBa" target='_blank'>
							<img src={assets.diBaLogo} alt="Diba" />
						</a>
						<a href="https://www.molletvalles.cat/" aria-label="Ajuntament de Mollet del Vallès" target='_blank'>
							<img src={assets.ajuntamentDeMolletLogo} alt="Mollet" />
						</a>
						<a href="https://castellscat.cat/ca" aria-label="CastellsCat" target='_blank'>
							<img src={assets.castellsLogo} alt="CastellsCat" />
						</a>
						<a href="https://patrimoni.gencat.cat/ca/coleccio/castells" aria-label="Patrimoni" target='_blank'>
							<img src={assets.castellsPatrimoniDeLaHumanitatLogo} alt="Patrimoni" />
						</a>
						<a href="https://www.agbar.es/" aria-label="Agbar" target='_blank'>
							<img src={assets.agbarLogo} alt="Agbar" />
						</a>
						<a href="https://www.estrelladamm.com/" aria-label="Estrella Damm" target='_blank'>
							<img src={assets.estrellaDammLogo} alt="Estrella Damm" />
						</a>
						<a href="https://som.cat/" aria-label="Som" target='_blank'>
							<img src={assets.somLogo} alt="Som" />
						</a>
					</div>
				</div>
				<div className="footer__content">
					<div className="footer__content__logo">
						<img src='assets/CdMLogo.png' alt="Castellers de Mollet" />
					</div>
					<div className="footer__content__social">
						<a href="https://www.facebook.com/castellersdemollet/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="https://www.instagram.com/castellersdemollet/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https://www.youtube.com/channel/UCZJ6nZU6h8d6K0l6x5YFy5A" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-youtube"></i>
						</a>
					</div>
				</div>
			</footer>
		);
	}
}