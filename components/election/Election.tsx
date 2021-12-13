import { useRouter } from 'next/router';
import { FC } from 'react';
import { IElectionCandidates } from '../../mocks/election';
import CandidateCard from '../cardidate-card/CandidateCard';
import { StyledElection } from './Election.styled';

interface IProps {
	electionCandidate: IElectionCandidates | undefined;
}

const ElectionPage: FC<IProps> = ({ electionCandidate }) => {
	const router = useRouter();

	const onButtonClicked = (id: number) => {
		router.push({ pathname: `/vote/${electionCandidate?.id}/${id}` });
	};

	if (!electionCandidate) {
		return <h1>No election found</h1>;
	}

	return (
		<StyledElection>
			<h2 className='h2'>{electionCandidate.title}</h2>
			<p>Choose your preferred candidate below</p>
			<div className='candidates'>
				{electionCandidate.candidates.map(({ id, name, image, partyImage }) => (
					<CandidateCard
						key={id}
						name={name}
						image={image}
						partyImage={partyImage}
						onButtonClicked={() => onButtonClicked(id)}
					/>
				))}
			</div>
		</StyledElection>
	);
};

export default ElectionPage;
