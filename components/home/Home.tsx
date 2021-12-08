import { useRouter } from 'next/router';
import { FC } from 'react';
import { ongoingElections, upcomingElections } from '../../mocks/election';
import ElectionCard, { ElectionType } from '../election-card/ElectionCard';
import { StyledHome } from './Home.styled';

const HomePage: FC<{}> = () => {
	const router = useRouter();

	const onButtonClicked = (id: number) => {
		router.push(`/election/${id}`);
	};

	return (
		<StyledHome>
			<h2>Ongoing Elections</h2>
			<p>Check below for the list of ongoing elections</p>

			{ongoingElections.map(({ id, image, title }) => (
				<ElectionCard
					key={id}
					type={ElectionType.ONGOING}
					title={title}
					image={image}
					onButtonClicked={() => onButtonClicked(id)}
				/>
			))}

			<h2>Upcoming Elections</h2>
			<p>Check below for the list of upcoming elections</p>

			{upcomingElections.map(({ id, image, title }) => (
				<ElectionCard
					key={id}
					type={ElectionType.UPCOMING}
					title={title}
					image={image}
					onButtonClicked={() => onButtonClicked(id)}
				/>
			))}
		</StyledHome>
	);
};

export default HomePage;
