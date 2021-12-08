import { FC } from 'react';
import electionImage1 from '../../public/images/elections/1.png';
import ElectionCard, { ElectionType } from '../election-card/ElectionCard';
import { StyledHome } from './Home.styled';

const HomePage: FC<{}> = () => {
	return (
		<StyledHome>
			<h2>Ongoing Elections</h2>
			<p>Check below for the list of ongoing elections</p>

			<ElectionCard
				type={ElectionType.ONGOING}
				title='Edo State Governship Elections 2021'
				image={electionImage1}
			/>

			<ElectionCard
				type={ElectionType.ONGOING}
				title='Ekiti State Governship Elections 2021'
				image={electionImage1}
			/>

			<h2>Upcoming Elections</h2>
			<p>Check below for the list of upcoming elections</p>

			<ElectionCard
				type={ElectionType.UPCOMING}
				title='Nigerian Presidential Elections 2023'
				image={electionImage1}
			/>
		</StyledHome>
	);
};

export default HomePage;
