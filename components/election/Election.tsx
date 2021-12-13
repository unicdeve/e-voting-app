import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { IElectionCandidates } from '../../mocks/election';
import CandidateCard from '../cardidate-card/CandidateCard';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import { StyledElection } from './Election.styled';

interface IQuery {
	id?: string;
}

interface IProps {
	electionCandidates: IElectionCandidates[];
}

const ElectionPage: FC<IProps> = ({ electionCandidates }) => {
	const router = useRouter();
	const { id } = router.query as IQuery;
	const [data, setData] = useState<IElectionCandidates | undefined>(undefined);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);

		if (id) {
			const election = electionCandidates.find(
				(el) => el.id === parseInt(id, 20)
			);

			if (!election) router.push('/home');
			setData(election);
		}

		setLoading(false);
	}, [id, router, electionCandidates]);

	if (loading || !data) {
		return <LoadingSpinner />;
	}

	return (
		<StyledElection>
			<h2 className='h2'>{data?.title}</h2>
			<p>Choose your preferred candidate below</p>
			<div className='candidates'>
				{data.candidates.map(({ id, name, image, partyImage }) => (
					<CandidateCard
						key={id}
						name={name}
						image={image}
						partyImage={partyImage}
					/>
				))}
			</div>
		</StyledElection>
	);
};

export default ElectionPage;
