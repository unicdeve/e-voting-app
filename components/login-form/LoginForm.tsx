import { FC } from 'react';
import Button, { ButtonType } from '../button/Button';
import FormInput from '../form-input/FormInput';
import { StyledLoginForm } from './LoginForm.styled';

const LoginForm: FC<{}> = () => {
	const handleSubmit = (e: any) => {
		e.preventDefault();
	};
	return (
		<StyledLoginForm onSubmit={handleSubmit}>
			<h2 className='h2'>Voting Portal</h2>

			<p>You can login using your NIN as seen on you ID cards.</p>

			<FormInput name='nin' label='Enter your NIN' />

			<Button btnText='Log in' type={ButtonType.SUBMIT} block />
		</StyledLoginForm>
	);
};

export default LoginForm;
