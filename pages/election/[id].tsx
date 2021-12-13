import type { NextPage, NextPageContext } from 'next';
import ElectionPage from '../../components/election/Election';
import { electionCandidates, IElectionCandidates } from '../../mocks/election';

interface IProps {
	electionCandidates: IElectionCandidates[];
}

const Election: NextPage<IProps> = ({ electionCandidates }) => {
	return <ElectionPage electionCandidates={electionCandidates} />;
};

Election.getInitialProps = async (context: NextPageContext) => {
	return { electionCandidates };
};

export default Election;
