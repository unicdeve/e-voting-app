import candidate1 from '../public/images/candidates/1.png';
import candidate2 from '../public/images/candidates/2.png';
import candidate3 from '../public/images/candidates/3.png';
import ongoing1 from '../public/images/elections/1.png';
import pdpImage from '../public/images/party-images/1.png';
import apcImage from '../public/images/party-images/2.png';
import otherImage from '../public/images/party-images/3.png';

export interface ICandidate {
	id: number;
	name: string;
	image: any;
	partyImage: any;
}

export interface IElection {
	id: number;
	title: string;
	image: any;
}

export interface IElectionCandidates extends IElection {
	candidates: ICandidate[];
}

export const ongoingElections: IElection[] = [
	{
		id: 1,
		title: 'Ekiti State Governship Elections 2021',
		image: ongoing1,
	},

	{
		id: 2,
		title: 'Edo State Governship Elections 2021',
		image: ongoing1,
	},
];

export const upcomingElections: IElection[] = [
	{
		id: 1,
		title: 'Ekiti State Governship Elections 2021',
		image: ongoing1,
	},
];

export const electionCandidates: IElectionCandidates[] = [
	{
		id: 1,
		title: 'Ekiti State Governship Elections 2021',
		image: ongoing1,
		candidates: [
			{
				id: 1,
				name: 'Mr Timilehin Gbenga',
				image: candidate1,
				partyImage: pdpImage,
			},

			{
				id: 2,
				name: 'Dr Ikechukwu James',
				image: candidate2,
				partyImage: apcImage,
			},

			{
				id: 3,
				name: 'Mr Something something',
				image: candidate3,
				partyImage: otherImage,
			},
		],
	},

	{
		id: 2,
		title: 'Edo State Governship Elections 2021',
		image: ongoing1,
		candidates: [
			{
				id: 1,
				name: 'Mr Taiwo Segun',
				image: candidate1,
				partyImage: pdpImage,
			},

			{
				id: 2,
				name: 'Mr Kehinde Olaposi',
				image: candidate2,
				partyImage: apcImage,
			},

			{
				id: 3,
				name: 'Dr Bola Ige',
				image: candidate3,
				partyImage: otherImage,
			},
		],
	},
];
