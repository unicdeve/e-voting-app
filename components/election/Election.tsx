import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { electionCandidates, IElectionCandidates } from '../../mocks/election';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import { StyledElection } from './Election.styled';

interface IQuery {
	id?: string;
}

const ElectionPage: FC<{}> = () => {
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
	}, [id, router]);

	if (loading || !data) {
		return <LoadingSpinner />;
	}

	return (
		<StyledElection>
			<h2 className='h2'>{data?.title}</h2>
			<p>Choose your preferred candidate below</p>
		</StyledElection>
	);
};

export default ElectionPage;
