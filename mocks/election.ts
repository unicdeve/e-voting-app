import ongoing1 from '../public/images/elections/1.png';

interface IElection {
	id: number;
	title: string;
	image: any;
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
