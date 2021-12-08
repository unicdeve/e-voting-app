import { useRouter } from 'next/router';
import { FC, FormEvent, useState } from 'react';
import ReactOtpInput from 'react-otp-input';
import Button, { ButtonType } from '../button/Button';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import { StyledOtpForm } from './OtpForm.styled';
import './OtpForm.styled.ts';

interface IProps {
	disabled?: boolean;
}

const OtpForm: FC<IProps> = ({ disabled }) => {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);
	const [otp, setOtp] = useState<string>();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);

		// TODO: API calls to the backend
		setTimeout(() => {
			setLoading(false);
			router.push('/home');
		}, 2000);
	};

	return (
		<StyledOtpForm onSubmit={handleSubmit}>
			<label htmlFor='otp-input'>Enter otp sent to your phone number:</label>

			<ReactOtpInput
				value={otp}
				onChange={(value: string) => setOtp(value)}
				numInputs={4}
				inputStyle='otp-input'
				isInputNum
				isDisabled={disabled}
				shouldAutoFocus
				isInputSecure
			/>

			<Button type={ButtonType.SUBMIT} block>
				{loading ? <LoadingSpinner /> : 'Verify'}
			</Button>
		</StyledOtpForm>
	);
};

export default OtpForm;
