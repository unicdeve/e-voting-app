import { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
import Button, { ButtonType } from '../button/Button';
import FormInput from '../form-input/FormInput';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import { StyledLoginForm } from './LoginForm.styled';

interface IProps {
	setCurrentForm: Dispatch<SetStateAction<string>>;
}

const LoginForm: FC<IProps> = ({ setCurrentForm }) => {
	const [nin, setNin] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);

		// TODO: API calls to the backend
		setTimeout(() => {
			setLoading(false);
			setCurrentForm('otp-form');
		}, 2000);
	};

	return (
		<StyledLoginForm onSubmit={handleSubmit}>
			<h2 className='h2'>Voting Portal</h2>

			<p>You can login using your NIN as seen on you ID cards.</p>

			<FormInput
				name='nin'
				label='Enter your NIN'
				value={nin}
				onChange={(e: any) => setNin(e.target.value)}
			/>

			<Button type={ButtonType.SUBMIT} block>
				{loading ? <LoadingSpinner /> : 'Login'}
			</Button>
		</StyledLoginForm>
	);
};

export default LoginForm;
