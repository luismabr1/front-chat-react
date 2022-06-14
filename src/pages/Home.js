import React, { useEffect } from 'react';
//Components
import { Hero, Card, CardGrid, GoBackButton } from '../components';

// State
import { state } from '../state';
import { useSnapshot } from 'valtio';

const Home = () => {
	const snap = useSnapshot(state);

	const getUsers = async () => {
		const users = await (await fetch('/api/room')).json();
		state.users = users.data;
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (

		<>
			<Hero title="Bienvenidos a la sala situacional" subtitle="Salas:">
				<GoBackButton />
				<CardGrid>
					{snap.users.length &&
						snap.users.map((user) => {
							return (
								<Card
									key={user._id}
									id={user._id}
									title={user.name}
									email={user.email}
									button="Elegir Sala"
									route="user"
								/>
							);
						})}
				</CardGrid>
				
			</Hero>	
		</>

		
	);
};

export default Home;
