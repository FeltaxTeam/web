import React, { useEffect, useState } from 'react';
import './Iron.scss';
import languages from './stats.json';
const langs = languages['languages'];
const guilds = languages['contributions'];
const contacts = languages['contacts'];
const skills = languages['skills'];
function Language(props: { displayName: string, hexColor: string, knowing: number, years: number, awesomeIcon: string }) {
	return (
		<li className='language'>
			<div className="header">
				<i className={props.awesomeIcon} style={{ color: props.hexColor }}></i>
				<span></span>
				<div className="data">
					<h2 className="name">{props.displayName}</h2>
				</div>
			</div>
			<div className="bar">
				<div className="type"><i className="fa-solid fa-brain"></i></div>
				<div className="progress-container">
					<span className="progress" style={{
						background: props.hexColor,
						width: `${props.knowing}%`,
						boxShadow: `${props.hexColor} 0px 0px 8px 0px`
					}} />
				</div>
				<div className="percentage">{props.knowing}%</div>
			</div>
			<div className="bar">
				<div className="type"><i className="fa-regular fa-clock"></i></div>
				<div className="progress-container">
					<span className="progress" style={{
						background: '#57F287',
						width: `${(props.years * 100) / 5}%`,
						boxShadow: `#57F287 0px 0px 8px 0px`
					}} />
				</div>
				<div className="percentage">{props.years} y</div>
			</div>
		</li>
	)
}
function Skill(props: { hexColor: string, displayName: string }) {
	return (
		<li className="skill">
			<svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
				<defs>
					<filter id="round">
						<feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
						<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
						<feComposite in="SourceGraphic" in2="goo" operator="atop" />
					</filter>
				</defs>
			</svg>

			<div className="hexagone" style={{ color: props.hexColor }}></div>
			<div className="name">{props.displayName}</div>
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
function Guild(props: { name: string, icon: string, since: string | null, aproxMembers: number, verified: boolean, partnered: boolean, role: string }) {
	return (
		<li className='guild'>
			<div className="icon">
				<img src={props.icon} alt='Icon' className="icon" />
				{props.verified === true ? <Verified /> : (props.partnered === true ? <Partnered /> : <></>)}
			</div>
			<div className="stats">
				<h4 className="name">{props.name}</h4>
				{
					props.aproxMembers !== undefined ?
						<h5 className="members"><i className="fa-solid fa-user-group"></i>{props.aproxMembers.toLocaleString('es-ES')}</h5>
						: <></>
				}
				<h5 className="members"><i className="fa-solid fa-user-group"></i>{props.role}</h5>
				<h6 className={`moderating ${props.since === null ? 'no' : 'yes'}`}>
					{
						props.since === null ?
							<>
								<i className="fa-solid fa-circle-exclamation"></i>{'Not moderating anymore.'}
							</>
							:
							<>
								<i className="fa-solid fa-calendar"></i>{props.since}
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
			<a target="_blank" rel="noreferrer" href={props.url}>
				<i className={`fa-brands ${props.icon}`} />
			</a>
		</li>
	)
}
export default function Iron() {
	let [githubProfile, setGithubProfile] = useState(null);
	let [githubOrganization, setGithubOrganization] = useState(null);
	useEffect(() => {
		async function getGithubProfile() {
			let data = await fetch('https://api.github.com/users/Iron7III');
			let json = await data.json();
			setGithubProfile(json);
		}
		getGithubProfile();
		async function getGithubOrganization() {
			let data = await fetch('https://api.github.com/orgs/Feltax-Team');
			let json = await data.json();
			setGithubOrganization(json);
		}
		getGithubOrganization();
	}, []);
	return (
		<>
			<React.Fragment>
				<div className="gotofeltax">
					<a href="/">
						<i className="fa-solid fa-arrow-left"></i><span className="text">Go to Feltax</span>
					</a>
				</div>
				<div className="iron">
					<div className="intro">
						<h1 className='name'>Iron</h1>
						<p className="bio">I'm a 16 years old full-stack developer.</p>
					</div>
					<img src="https://avatars.githubusercontent.com/u/73746664?v=4" alt="Iron" />
				</div>
				<div className='portfolio'>
					<div className="knowledge">
						<h1 className="title">Knowledge</h1>
						<ul className='languages'>
							{
								langs.map((language, i) => { return <Language key={i} displayName={language.displayName} hexColor={language.hexColor} knowing={language.knowing} years={language.years} awesomeIcon={language.awesomeIcon} /> })
							}
						</ul>
						<ul className="skills">
							{
								skills.map((skill, i) => { return <Skill key={i} hexColor={skill.hexColor} displayName={skill.displayName} /> })
							}
						</ul>
					</div>
					<div className="moderation">
						<h1 className="title">Discord Moderating / Moderated</h1>
						<ul className='guilds'>
							{
								guilds.map((guild, i) => { return <Guild key={i} name={guild.name} role={guild.role} icon={guild.icon} since={guild.since} aproxMembers={guild.aproxMembers} verified={guild.verified} partnered={guild.partnered} /> })
							}
						</ul>
					</div>
					{
						githubProfile !== null && githubOrganization !== null ?
							<div className="github">
								<h1 className="title">Github</h1>
								<ul className='profiles'>
									<li className="profile">
										<img className="icon" alt='Icon' src={githubProfile.avatar_url} />
										<div className="data">
											<h2 className="name">{githubProfile.name}<span className="login">{githubProfile.login}</span></h2>
											<p className="bio">
												{githubProfile.bio}
											</p>
											<div className="followage">
												<a className="followers" href={`${githubProfile.html_url}?tab=followers`} target="_blank" rel="noreferrer" ><i className="fa-solid fa-user-group"></i><span className='bold'>{githubProfile.followers.toLocaleString('es-ES')}</span> followers</a>
												<a className="following" href={`${githubProfile.html_url}?tab=following`} target="_blank" rel="noreferrer" ><span className='bold'>{githubProfile.following.toLocaleString('es-ES')}</span> following</a>
											</div>
										</div>
										<ul className="details">
											{
												githubProfile.company !== null ?
													<li className="org">
														<i className="fa-regular fa-building"></i>
														{
															githubProfile.company.startsWith('@') ?
																<a href={`https://github/${githubProfile.company}`} target="_blank" rel="noreferrer">{githubProfile.company}</a>
																: <div>{githubProfile.company}</div>
														}
													</li>
													: <></>
											}
											{
												githubProfile.location !== null ?
													<li className="location">
														<i className="fa-solid fa-location-dot"></i>
														<span>{githubProfile.location}</span>
													</li>
													: <></>
											}
											<li className="website">
												<i className="fa-solid fa-link"></i>
												<a href={githubProfile.blog} target="_blank" rel="noreferrer">{githubProfile.blog}</a>
											</li>
											<li className="twitter">
												<i className="fa-brands fa-twitter"></i>
												<a href={`https://twitter.com/${githubProfile.twitter_username}`} target="_blank" rel="noreferrer">@{githubProfile.twitter_username}</a>
											</li>
										</ul>
									</li>
									<li className="organization">
										<div className="header">
											<img className="icon" alt='Icon' src={githubOrganization.avatar_url} />
											<div className="data">
												<h2 className="name"><span>{githubOrganization.name}</span><span className="login">{githubOrganization.login}</span></h2>
												<div className="general">
													<h3 className="location">
														<i className="fa-solid fa-map-marker-alt"></i>{githubOrganization.location}
													</h3>
													<h3 className="blog">
														<i className="fa-solid fa-link"></i><a target="_blank" rel="noreferrer" href={githubOrganization.blog}>{githubOrganization.blog}</a>
													</h3>
													<h3 className="twitter">
														<i className="fa-brands fa-twitter"></i><a target="_blank" rel="noreferrer" href={`https://twitter.com/${githubOrganization.twitter_username}`}>@{githubOrganization.twitter_username}</a>
													</h3>
													<span className="verified">Verified</span>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							: null
					}
					<div className="contact">
						<h1 className="title">Contact Me</h1>
						<ul className='contacts'>
							{
								contacts.map((contact, i) => { return <Contact key={i} name={contact.name} url={contact.url} icon={contact.icon} /> })
							}
						</ul>
					</div>
				</div>
			</React.Fragment>
		</>
	);
}