import Image from 'next/image';
import { FC } from 'react';
import Button from '../button/Button';
import { StyledElectionCard } from './ElectionCard.styled';

export enum ElectionType {
	UPCOMING = 'coming_soon',
	ONGOING = 'ongoing',
}

interface IProps {
	image: any;
	title: string;
	type: ElectionType;
	onButtonClicked: () => void;
}

const ElectionCard: FC<IProps> = ({ image, title, type, onButtonClicked }) => {
	return (
		<StyledElectionCard>
			<div className='image'>
				<Image
					className='bg-image'
					alt=''
					src={image}
					objectFit='cover'
					placeholder='blur'
					width='450'
					height='200'
				/>
			</div>

			<div className='description'>
				<h5>{title}</h5>

				<Button
					className={`vote-btn ${
						type === ElectionType.UPCOMING ? 'upcoming' : ''
					}`}
					block={false}
					disabled={type === ElectionType.UPCOMING}
					onClick={() => onButtonClicked()}
				>
					{type === ElectionType.UPCOMING ? 'Coming soon' : 'Cast Vote'}
				</Button>
			</div>
		</StyledElectionCard>
	);
};

export default ElectionCard;
