import Navigate from '../.././utility/navigation';
function AuthLogic() {
	console.log('xddd')
	const searchParams = new URLSearchParams(window.location.hash.replace('#', '?'));
	const tokenType = searchParams.get('token_type');
	const accessToken = searchParams.get('access_token');
	const scope = searchParams.get('scope');
	console.log(tokenType, accessToken, scope);
	if (tokenType && accessToken && scope) {
		localStorage.setItem('twitchTokenType', tokenType);
		localStorage.setItem('twitchaccessToken', accessToken);
		localStorage.setItem('scope', scope);
	}
	window.close();
	return <Navigate to="/" />;
}

export default function Auth() {
	const searchParams = new URLSearchParams(window.location.hash.replace('#', '?'));
	console.log(window.location.host)
	if (!searchParams.has('access_token')) window.location.assign(`https://id.twitch.tv/oauth2/authorize
										?response_type=token
										&client_id=n65qa8f76cotiqgr7dbj3qb7qnefbr
										&redirect_uri=http://localhost:3000/twitch/auth
										&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls
										&force_verify=true`);
	return (
		<>
			<AuthLogic />
		</>
	);
}