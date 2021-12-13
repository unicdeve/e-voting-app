import Image from 'next/image';
import { FC } from 'react';
import Button from '../button/Button';
import { StyledCandidateCard } from './CandidateCard.styled';

interface IProps {
	image: any;
	partyImage: any;
	name: string;
	onButtonClicked?: () => void;
}

const CandidateCard: FC<IProps> = ({
	image,
	name,
	partyImage,
	onButtonClicked,
}) => {
	return (
		<StyledCandidateCard>
			<div className='image'>
				<Image
					className='bg-image'
					alt=''
					src={image}
					objectFit='cover'
					placeholder='blur'
					width='233'
					height='200'
				/>
			</div>

			<div className='description'>
				<Image
					className='party-image'
					alt={`${name}'s party`}
					src={partyImage}
					objectFit='cover'
					width='44'
					height='33'
				/>

				<h5>{name}</h5>

				<Button
					className={`vote-btn`}
					block={false}
					onClick={() => onButtonClicked && onButtonClicked()}
				>
					Cast Vote
				</Button>
			</div>
		</StyledCandidateCard>
	);
};

export default CandidateCard;
