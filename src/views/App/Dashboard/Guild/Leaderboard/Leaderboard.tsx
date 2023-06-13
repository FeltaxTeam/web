import './Leaderboard.scss';
import { postApi } from '../../../../../utility/fetching';
const defaultXpEqtn = 'x**0.5';

async function setGuildXpEqtn() {
	console.log('updating prefix!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
	if (!validateXpEqtn()) return;
	postApi(`https://api.feltax.xyz/mongo/setGuildXpEqtn`, {
		tokenType: localStorage.getItem('tokenType'), accessToken: localStorage.getItem('accessToken'),
		newXpEqtn: inps.xpEqtn,
		guildId: (document.getElementById('guildId') as HTMLInputElement).value
	});
}

let eqtn = 'x**0.5';
function validateXpEqtn() {
	const edisplay = document.getElementById('errDisp');
	eqtn = inps.xpEqtn.replaceAll(' ', '');
	if (/[a-w]|[y-z]|[A-Z]/.test(eqtn)) {
		edisplay.innerText = 'The lowercase x is the only accepted variable!'
		return false;
	}
	drawGraphic();
	edisplay.innerText = '';
	return true;
}

const inps = {
	get xpEqtn() {
		return (document.getElementById('xpEqtnInp') as HTMLInputElement).value.toLocaleLowerCase();
	},
	set xpEqtn(value) {
		(document.getElementById('xpEqtnInp') as HTMLInputElement).value = value;
	}
};
export default function Leaderboard(props: { dbGuild, guild }) {
	const guild = props.guild;
	const dbGuild = (props.dbGuild != null) ? props.dbGuild : null;
	console.log(dbGuild);
	setTimeout(drawGraphic, 1000);
	return (
		<>
			<div>
				<input type="text" className="xpEqtn" defaultValue={dbGuild ? dbGuild.xpEqtn ?? defaultXpEqtn : defaultXpEqtn} id="xpEqtnInp" onInput={validateXpEqtn} />
				<span className="error-display" id="errDisp"></span>
				<input type="hidden" value={guild.id} id="guildId" />
				<input type="button" value='Update guild XP equatioin!' id="submitBtn" onClick={setGuildXpEqtn} />
				<h4>Example xp needed for some levels:</h4>
				<div>
					Max value of view:<br />
					X: <input type="number" id="maxX" defaultValue="100" min="20" max="100000" onChange={drawGraphic}></input><br />
					Y: <input type="number" id="maxY" defaultValue="100" min="100" max="100000000" onChange={drawGraphic}></input><br />
					Parse input: <input type="checkbox" id="parse" onChange={drawGraphic} defaultChecked={true}></input>
				</div>
				<canvas id="canvas" />
				{/* <Examples xpEqtn={eqtn} /> */}
			</div>
			<h2>Leaderboard</h2>
			<ol className="leaderboardList">
				{
					console.dir(dbGuild.users)
				}
				{
					Object.entries(dbGuild.users).sort((a: any, b: any) => b[1].xp - a[1].xp).map((user: any, i) => {
						return (
							<div className="user" key={user[0]}>
								<span className="top">#{i + 1}</span>
								<div className="userData">{user[0]}</div>
								<div className="xp">{user[1].xp}/---</div>
							</div>
						);
					})
				}
			</ol >
		</>
	);
}
function drawGraphic() {
	let fn;
	try {
		if ((document.getElementById('parse') as HTMLInputElement).checked) fn = Function('x', `return parseInt(${inps.xpEqtn})`);
		else fn = Function('x', 'return ' + inps.xpEqtn);
	} catch (e) {
		console.log('no valid equation!!');
		return;
	}
	//let fn = function(x) { return inps.xpEqtn };
	//let levelOutputs = [];
	const canvas = document.getElementById('canvas');
	const maxX = parseFloat((document.getElementById('maxX') as HTMLInputElement).value);
	const maxY = parseFloat((document.getElementById('max') as HTMLInputElement).value);
	const canv = document.getElementById('canvas'); //@ts-ignore
	const c = canv.getContext('2d'); //@ts-ignore
	const width = canvas.width = canvas.clientWidth, height = canvas.height = canvas.clientHeight;
	const offset = { x: width / maxX, y: height / maxY, x0: 15, y0: 20 };
	const correctFactor = { x: Math.ceil(10 / (offset.x)), y: Math.ceil(10 / (offset.y)) }
	c.clearRect(0, 0, width, height);
	c.strokeStyle = 'black';
	c.beginPath();
	c.moveTo(0, height);
	c.lineTo(0, 0);
	c.stroke();
	c.beginPath();
	c.moveTo(0, height);
	c.lineTo(width, height);
	c.strokeStyle = 'black';
	c.stroke();
	// y axis
	for (let i = 0; i < height / offset.y; i += 5 * correctFactor.y) {
		c.beginPath();
		c.moveTo(0, height - offset.y * i - offset.y0);
		c.lineTo(width, height - offset.y * i - offset.y0);
		c.strokeStyle = 'grey';
		c.lineWidth = '0.1';
		c.stroke();

		c.strokeStyle = 'black';
		c.lineWidth = '1';
		c.strokeText(i, 4, height - (offset.y * i + 25));
	}
	// x axis
	for (let i = 0; i < width / offset.x; i += 5 * correctFactor.x) {
		c.beginPath();
		c.moveTo(i * offset.x + offset.x0, 0);
		c.lineTo(i * offset.x + offset.x0, height);
		c.strokeStyle = 'grey';
		c.lineWidth = '0.1';
		c.stroke();
		if (i === 0) continue;
		c.strokeStyle = 'black';
		c.lineWidth = '1';
		c.strokeText(i, i * offset.x || offset.x, height - 10);
	}
	//linea
	c.beginPath();
	c.moveTo(offset.x0, height - offset.y * fn(0) - offset.y0);
	for (let i = 0; i < width / offset.x; i += (i < 10) ? 0.2 : 1) {
		c.lineTo(i * offset.x + offset.x0, height - offset.y * fn(i) - offset.y0);
	}
	c.strokeStyle = '#2978e6'; // Stroke Color
	c.lineWidth = '2'; // Stroke Width
	c.stroke();
}
// function Examples(xpEqtn){
//   let fn = Function('x', `return ${xpEqtn}`);
//   let testedLevels = [0, 1, 2, 3, 4, 5, 10, 50, 100, 150, 200, 300, 400, 500, 1000];
//   let levelOutputs = [];
//   for (var i of testedLevels){
//     levelOutputs.push({
//       number: i,
//       value: fn(i)
//     });
//   }
//   console.log(levelOutputs);
//   //CREATE A CHART AND THAT STUFF
//   return <>

//   </>;
// }
