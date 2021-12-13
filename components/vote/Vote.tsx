import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { ICandidate } from '../../mocks/election';
import Button from '../button/Button';
import { StyledVote } from './Vote.styled';

interface IProps {
	candidate: ICandidate;
}

const VotePage: FC<IProps> = ({ candidate }) => {
	const router = useRouter();

	const onButtonClicked = () => {
		console.log(candidate);
	};

	return (
		<StyledVote>
			<h2 className='h2'>
				Are you sure you want to vote for <br /> {candidate.name}
			</h2>

			<Image
				className='candidate-image'
				alt=''
				src={candidate.image}
				objectFit='cover'
				placeholder='blur'
				width='360'
				height='320'
			/>

			<div className='btn-wrapper'>
				<Button
					className={`vote-btn`}
					block={false}
					onClick={() => onButtonClicked()}
					btnText='Cast Vote'
				/>

				<Button
					btnText='Go back'
					className={`back-btn`}
					block={false}
					onClick={() => router.back()}
				/>
			</div>
		</StyledVote>
	);
};

export default VotePage;
