import Navigate from '../.././utility/navigation';
function AuthLogic() {
	const searchParams = new URLSearchParams(window.location.hash.replace('#', '?'));
	let tokenType = searchParams.get('token_type');
	let accessToken = searchParams.get('access_token');
	let expires = searchParams.get('expires_in');
	if (tokenType && accessToken && expires) {
		localStorage.setItem('tokenType', tokenType);
		localStorage.setItem('accessToken', accessToken);
		localStorage.setItem('expires', new Date(Date.now() + parseInt(expires) * 1000).toUTCString());
	}
	return <Navigate to="/" />;
}

export default function Auth() {
	const searchParams = new URLSearchParams(window.location.hash.replace('#', '?'));
	console.log(window.location.host)
	//if (!searchParams.has('access_token')) window.location.assign("https://discord.com/api/oauth2/authorize?client_id=568435616153337916&redirect_uri=https%3A%2F%2Ffeltax.xyz%2Fauth%2F&response_type=token&scope=guilds%20guilds.members.read%20email%20identify&prompt=none");
	if (!searchParams.has('access_token')) window.location.assign(`https://discord.com/api/oauth2/authorize?client_id=568435616153337916&redirect_uri=http${window.location.host == 'localhost:3000' ? '' : 's'}%3A%2F%2F${window.location.host.replace(':', '%3A')}%2Fauth%2F&response_type=token&scope=guilds%20guilds.members.read%20email%20identify&prompt=none`);
	return (
		<>
			<AuthLogic />
		</>
	);
}