/**
 * @param type Auth type.
 * @param token Discord Auth URL
 * @param url Discord API URL
 */
export async function fetchURL(type: string | null, token: string | null, url: string) { return await fetch(url, { headers: { authorization: `${type} ${token}` } }).then(result => { /*console.dir(result.headers);*/ return result.json(); }); };

export async function fetchApi(url:string) {
	let data:string[] = [];
	await fetch(url)
		.then(async (response:any)=>{
			const reader = response.body.getReader();
			while (true){
				const {value, done} = await reader.read();
				if (done) break;
				data.push(new TextDecoder().decode(value));
			}
		});
	return data.join('');
}
export async function postApi(url:string, body:any) {
	await fetch(url, {  
		method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
	})
}
//438390132538605589
export async function fetchWorkerProfile(name:string) {
	const workerNames = {iron: '438390132538605589', thebluebanana: '417407496286633995'};
	let a = await fetchApi(`https://europe-west1-feltax-87fb9.cloudfunctions.net/app/admin/getDescription/${workerNames[name]}`);
	if (a === '') a = JSON.stringify({"description": "no description added yet."});
	return JSON.parse(a);
}