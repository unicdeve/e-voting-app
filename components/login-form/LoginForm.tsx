import { FC, FormEvent, useState } from 'react';
import Button, { ButtonType } from '../button/Button';
import FormInput from '../form-input/FormInput';
import { StyledLoginForm } from './LoginForm.styled';

const LoginForm: FC<{}> = () => {
	const [nin, setNin] = useState<string>('');
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
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
				Login
			</Button>
		</StyledLoginForm>
	);
};

export default LoginForm;
