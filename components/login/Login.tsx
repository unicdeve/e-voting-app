import Image from 'next/image';
import { FC } from 'react';
import onboardingImage1 from '../../public/images/onboarding-1.png';
import LoginForm from '../login-form/LoginForm';
import { StyledLogin } from './Login.styled';

const LoginPage: FC<{}> = () => {
	return (
		<StyledLogin>
			<div className='mf-login-row'>
				<div className='col-1'>
					<Image
						className='bg-image'
						alt=''
						src={onboardingImage1}
						layout='fill'
						objectFit='cover'
						placeholder='blur'
					/>
				</div>

				<div className='col-2'>
					<LoginForm />
				</div>
			</div>
		</StyledLogin>
	);
};

export default LoginPage;
