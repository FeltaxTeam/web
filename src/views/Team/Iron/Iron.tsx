import React from 'react';
import './Iron.scss';
import languages from './stats.json';
const langs = languages['languages'];
const guilds = languages['guilds'];
const contacts = languages['contacts'];
function Language(props: { displayName: string, hexColor: string, knowing: number, awesomeIcon: string }) {
	return (
		<li className='language'>
			<div className="header">
				<h2 className="name"><i className={props.awesomeIcon} style={{ color: props.hexColor }}></i><span></span>{props.displayName}</h2>
				<h2 className="percentage">{props.knowing}%</h2>
			</div>
			<div className="bar">
				<div className="progress" style={{ background: props.hexColor, width: `${props.knowing}%` }} />
			</div>
		</li>
	)
}
function Verified() {
	return (
		<div className="badge">
			<svg className="verified" viewBox="0 0 16 16" preserveAspectRatio="none">
				<path
					className="star"
					d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z">
				</path>
				<path className="shard" d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"></path>
			</svg>
		</div>
	)
}
function Partnered() {
	return (
		<div className="badge">
			<svg className="partnered" viewBox="0 0 16 16" preserveAspectRatio="none">
				<path
					className="star"
					d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z">
				</path>
				<path className="shard" d="M10.5906 6.39993L9.19223 7.29993C8.99246 7.39993 8.89258 7.39993 8.69281 7.29993C8.59293 7.19993 8.39317 7.09993 8.29328 6.99993C7.89375 6.89993 7.5941 6.99993 7.29445 7.19993L6.79504 7.49993L4.29797 9.19993C3.69867 9.49993 2.99949 9.39993 2.69984 8.79993C2.30031 8.29993 2.50008 7.59993 2.99949 7.19993L5.99598 5.19993C6.79504 4.69993 7.79387 4.49993 8.69281 4.69993C9.49188 4.89993 10.0912 5.29993 10.5906 5.89993C10.7904 6.09993 10.6905 6.29993 10.5906 6.39993Z"></path>
				<path className="shard" d="M13.4871 7.79985C13.4871 8.19985 13.2874 8.59985 12.9877 8.79985L9.89135 10.7999C9.29206 11.1999 8.69276 11.3999 7.99358 11.3999C7.69393 11.3999 7.49417 11.3999 7.19452 11.2999C6.39545 11.0999 5.79616 10.6999 5.29674 10.0999C5.19686 9.89985 5.29674 9.69985 5.39663 9.59985L6.79499 8.69985C6.89487 8.59985 7.09463 8.59985 7.19452 8.69985C7.39428 8.79985 7.59405 8.89985 7.69393 8.99985C8.09346 8.99985 8.39311 8.99985 8.69276 8.79985L9.39194 8.39985L11.3896 6.99985L11.6892 6.79985C12.1887 6.49985 12.9877 6.59985 13.2874 7.09985C13.4871 7.39985 13.4871 7.59985 13.4871 7.79985Z"></path>
			</svg>
		</div>
	)
}
function Guild(props: { name: string, icon: string, moderatingSince: string | null, aproxMembers: number, verified: boolean, partnered: boolean }) {
	return (
		<li className='guild'>
			<div className="icon">
				<img src={props.icon} className="icon" />
				{props.verified === true ? <Verified /> : (props.partnered === true ? <Partnered /> : <></>)}
			</div>
			<div className="stats">
				<h4 className="name">{props.name}</h4>
				<h5 className="members"><i className="fa-solid fa-user-group"></i>{props.aproxMembers.toLocaleString('es-ES')}</h5>
				<h6 className={`moderating ${props.moderatingSince === null ? 'no' : 'yes'}`}>
					{
						props.moderatingSince === null ?
							<>
								<i className="fa-solid fa-circle-exclamation"></i>{'Not moderating anymore.'}
							</>
							:
							<>
								<i className="fa-solid fa-calendar"></i>{props.moderatingSince}
							</>
					}
				</h6>
			</div>
		</li>
	)
}
function Contact(props: { name: string, url: string, icon: string }) {
	return (
		<li className='contact'>
			<a href={props.url}>
				<i className={`fa-brands ${props.icon}`} />
			</a>
		</li>
	)
}
export default function Iron() {
	return (
		<>
			<React.Fragment>
				<div className="gotofeltax">
					<a href="/">
					<i className="fa-solid fa-arrow-left"></i>Go to Feltax
					</a>
				</div>
				<div className='portfolio'>
					<div className="knowledge">
						<h1 className="title">Knowledge</h1>
						<ul className='languages'>
							{
								//@ts-ignore
								langs.map((language, i) => { return <Language key={i} displayName={language.displayName} hexColor={language.hexColor} knowing={language.knowing} awesomeIcon={language.awesomeIcon} /> })
							}
						</ul>
					</div>
					<div className="moderation">
						<h1 className="title">Discord Moderating / Moderated</h1>
						<ul className='guilds'>
							{
								//@ts-ignore
								guilds.map((guild, i) => { return <Guild key={i} name={guild.name} icon={guild.icon} moderatingSince={guild.moderatingSince} aproxMembers={guild.aproxMembers} verified={guild.verified} partnered={guild.partnered} /> })
							}
						</ul>
					</div>
					<div className="contact">
						<h1 className="title">Contact Me</h1>
						<ul className='contacts'>
							{
								//@ts-ignore
								contacts.map((contact, i) => { return <Contact key={i} name={contact.name} url={contact.url} icon={contact.icon} /> })
							}
						</ul>
					</div>
				</div>
			</React.Fragment>
		</>
	);
}