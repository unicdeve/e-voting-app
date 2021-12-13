import type { NextPage, NextPageContext } from 'next';
import VotePage from '../../../components/vote/Vote';
import { electionCandidates, ICandidate } from '../../../mocks/election';

interface IQuery {
	electionId?: string;
	candidateId?: string;
}

interface IProps {
	candidate: ICandidate | undefined;
}

const Vote: NextPage<IProps> = ({ candidate }) => {
	if (!candidate) {
		return <h1>Candidate not found</h1>;
	}

	return <VotePage candidate={candidate} />;
};

Vote.getInitialProps = ({ query }: NextPageContext) => {
	const { electionId, candidateId } = query as IQuery;

	if (electionId && candidateId) {
		const election = electionCandidates.find(
			(el) => el.id === parseInt(electionId, 20)
		);

		const candidate = election?.candidates.find(
			(el) => el.id === parseInt(candidateId, 20)
		);

		return { candidate };
	}

	return { candidate: undefined };
};

export default Vote;
