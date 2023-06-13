import './Loading.scss';

export default function Loading() {
	return (
		<div className='loadingScreen'>
			<span>
			</span>
			<style>
				{
					`
						.loadingScreen {
							display: grid;
    width: 100vw;
    height: calc(100vh - 80px);
    place-items: center;
							
				}
				`
				}
			</style>
		</div>
	);
}