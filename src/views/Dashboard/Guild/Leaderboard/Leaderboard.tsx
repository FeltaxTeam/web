import './Leaderboard.css';
import { postApi } from '../../../../utility/fetching';
const defaultXpEqtn = 'x**0.5';

async function setGuildXpEqtn() {
  if (!validateXpEqtn()) return;
  postApi(`https://us-central1-feltax-87fb9.cloudfunctions.net/app/mongo/setGuildXpEqtn`, {
    tokenType: localStorage.getItem('tokenType'), accessToken: localStorage.getItem('accessToken'),
    //@ts-ignore
    newXpEqtn: inps.xpEqtn,
    //@ts-ignore
    guildId: document.getElementById('guildId').value
  });
}

let eqtn = 'x**0.5';
function validateXpEqtn() {
  let edisplay = document.getElementById('errDisp');
  eqtn = inps.xpEqtn.replaceAll(' ', '');
  if (/[a-w]|[y-z]|[A-Z]/.test(eqtn)) {
    edisplay.innerText = 'The lowercase x is the only accepted variable!'
    return false;
  }

  drawGraphic();
  edisplay.innerText = '';
  return true;
}


let inps = {
  get xpEqtn() { //@ts-ignore
    return document.getElementById('xpEqtnInp').value.toLocaleLowerCase();
  },
  set xpEqtn(value) { //@ts-ignore
    document.getElementById('xpEqtnInp').value = value;
  }
};
export default function Guild(props: { dbGuild, guild }) {
  let guild = props.guild;
  let dbGuild = (props.dbGuild != null) ? props.dbGuild : null;

  setTimeout(drawGraphic, 1000);
  return (
    <>
      <div
      // id="disabled"
      >
        <span>Define a custom function to assign the levels of your guild members. The rules are: <br />
          - use x as the xp amount of the user (each message adds 1-10 of xp to the user)<br />
          - the clamped output of the function is the level wich will be assigned to the user.</span><br />
        Operation rules (ay change in the future):
        <ul className='operations'>
          <li className="operation">
            <h3 className="type"><i className="fa-solid fa-plus" />Addition</h3>
            <div className="formula"><span className="x" /><span className="sign">+</span><span className="y" /></div>
            <h4 className="example">2+3</h4>
          </li>
          <li className="operation">
            <h3 className="type"><i className="fa-solid fa-minus" />Addition</h3>
            <div className="formula"><span className="x" /><span className="sign">+</span><span className="y" /></div>
            <h4 className="example">2-3</h4>
          </li>
          <li className="operation">
            <h3 className="type"><i className="fa-solid fa-divide" />Addition and Difference</h3>
            <div className="formula"><span className="x" /><span className="sign">+</span><span className="y" /></div>
            <h4 className="example">2/3</h4>
          </li>
          <li className="operation">
            <h3 className="type"><i className="fa-solid fa-xmark" />Addition and Difference</h3>
            <div className="formula"><span className="x" /><span className="sign">+</span><span className="y" /></div>
            <h4 className="example">2*3</h4>
          </li>
          <li className="operation">
            <h3 className="type"><i className="fa-solid fa-superscript" />Addition and Difference</h3>
            <div className="formula"><span className="x" /><span className="sign">+</span><span className="y" /></div>
            <h4 className="example">2**3</h4>
          </li>
          <li className="operation">
            <h3 className="type"><i className="fa-solid fa-square-root-variable" />Addition and Difference</h3>
            <div className="formula"><span className="x" /><span className="sign">+</span><span className="y" /></div>
            <h4 className="example">2**(1/3)</h4>
          </li>
        </ul>
        <input type="text" className="xpEqtn" defaultValue={dbGuild ? dbGuild.xpEqtn ?? defaultXpEqtn : defaultXpEqtn} id="xpEqtnInp" onInput={validateXpEqtn} />
        <span className="error-display" id="errDisp"></span>
        <input type="hidden" value={guild.id} id="guildId" />
        <input type="button" value='Update guild prefix!' id="submitBtn" onClick={setGuildXpEqtn} disabled />
        <h4>Example xp needed for some levels:</h4>
        <div>
          Max value of view:<br />
          X: <input type="number" id="maxX" defaultValue="100" min="20" max="100000" onChange={drawGraphic}></input><br />
          Y: <input type="number" id="maxY" defaultValue="100" min="100" max="100000000" onChange={drawGraphic}></input>
        </div>
        <canvas id="canvas"></canvas>
        {/* <Examples xpEqtn={eqtn} /> */}
      </div>
      <img id="card" 
      width='700px'
      src={
        'data:image/svg+xml,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
          <foreignObject width="100%" height="100%" style="transform:translate(0,0);">
            <div xmlns="http://www.w3.org/1999/xhtml" style="background-image:url("https://feltax.xyz/assets/favicon.ico");border-radius: 10px;padding:0px;width:300px;height:100px;box-sizing:border-box;">
              <div style='border:3px solid rgba(0 0 0 / 40%);border-radius:10px;width:100%;height:100%;box-sizing:border-box;'>

              </div>
            </div>
          </foreignObject>
        </svg>
      `)
      } />
    </>
  );
}
function drawGraphic() {
  // eslint-disable-next-line
  let fn = Function('x', 'return ' + inps.xpEqtn);
  //let fn = function(x) { return inps.xpEqtn };
  //let levelOutputs = [];
  //@ts-ignore
  let maxX = document.getElementById('maxX').value;//@ts-ignore
  let maxY = document.getElementById('maxY').value;
  let canv = document.getElementById('canvas'); //@ts-ignore
  let c = canv.getContext('2d'); //@ts-ignore
  let width = canvas.width = canvas.clientWidth, height = canvas.height = canvas.clientHeight;
  let offset = { x: width / maxX, y: height / maxY, x0: 15, y0: 20 };
  let correctFactor = { x: Math.ceil(10 / (offset.x)), y: Math.ceil(10 / (offset.y)) }
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
  for (var i = 0; i < height / offset.y; i += 5 * correctFactor.y) {
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
