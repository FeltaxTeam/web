import Navigate from '../.././utility/navigation';
export default function Logout() {
	localStorage.clear();
  return <Navigate to="/"/>;
}