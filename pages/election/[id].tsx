import type { NextPage, NextPageContext } from 'next';
import ElectionPage from '../../components/election/Election';
import { electionCandidates, IElectionCandidates } from '../../mocks/election';

interface IQuery {
	id?: string;
}
interface IProps {
	electionCandidate: IElectionCandidates | undefined;
}

const Election: NextPage<IProps> = ({ electionCandidate }) => {
	return <ElectionPage electionCandidate={electionCandidate} />;
};

Election.getInitialProps = async ({ query }: NextPageContext) => {
	const { id } = query as IQuery;

	if (id) {
		const electionCandidate = electionCandidates.find(
			(el) => el.id === parseInt(id, 20)
		);

		return { electionCandidate };
	}

	return { electionCandidate: undefined };
};

export default Election;
