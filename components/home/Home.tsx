import Image from 'next/image';
import { FC } from 'react';
import electionImage1 from '../../public/images/elections/1.png';
import Button from '../button/Button';
import { StyledElection, StyledHome } from './Home.styled';

const HomePage: FC<{}> = () => {
	return (
		<StyledHome>
			<h2>Ongoing Elections</h2>
			<p>Check below for the list of ongoing elections</p>

			<StyledElection>
				<div className='image'>
					<Image
						className='bg-image'
						alt=''
						src={electionImage1}
						objectFit='cover'
						placeholder='blur'
						width='450'
						height='200'
					/>
				</div>

				<div className='description'>
					<h5>Ekiti State Governship Elections 2021</h5>

					<Button className='vote-btn' block={false}>
						Cast Vote
					</Button>
				</div>
			</StyledElection>
		</StyledHome>
	);
};

export default HomePage;
