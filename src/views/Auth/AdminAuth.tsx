import { useEffect, useState } from 'react';
import Navigate from '../.././utility/navigation';
function AuthLogic() {
	const searchParams = new URLSearchParams(window.location.hash.replace('#', '?'));
	const tokenType = searchParams.get('token_type');
	const accessToken = searchParams.get('access_token');
	const expires = searchParams.get('expires_in');
	console.log(tokenType, accessToken, expires);
	if (tokenType !== null && accessToken !== null && expires !== null) {
		localStorage.setItem('tokenType', tokenType);
		localStorage.setItem('accessToken', accessToken);
		localStorage.setItem('expires', new Date(Date.now() + parseInt(expires) * 1000).toUTCString());
	}
	return <></>;// fix this, repeated update
}

export default function AdminAuth(props: { user: any }) {
	const [redirect, update] = useState(false);
	useEffect(() => {
		if (props.user != null) {
			update(true);
		}
	}, [props.user]);

	const searchParams = new URLSearchParams(window.location.hash.replace('#', '?'));
	console.log(window.location.host);
	if (searchParams.has('access_token') === false) window.location.assign(`https://discord.com/api/oauth2/authorize?client_id=568435616153337916&redirect_uri=http${window.location.host == 'admin.localhost:3000' ? '' : 's'}%3A%2F%2F${window.location.host.replace(':', '%3A').replace('.', '%2E')}%2Fauth%2F&response_type=token&scope=guilds%20guilds.members.read%20email%20identify&prompt=none`);
	return (
		<>
			{redirect ? <Navigate to='/' /> : <AuthLogic />}
		</>
	);
}