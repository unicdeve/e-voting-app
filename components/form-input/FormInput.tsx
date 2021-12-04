import { FC } from 'react';
import { StyledFormInput } from './FormInput.styled';

interface IProps {
	className?: string;
	type?: string;
	label?: string;
	name: string;
	maxLength?: number;
	placeholder?: string;
}

const FormInput: FC<IProps> = ({
	type = 'text',
	className,
	label,
	name,
	maxLength,
	placeholder,
}) => {
	return (
		<StyledFormInput>
			{label ? <label>{label}</label> : null}
			<input
				type={type}
				maxLength={maxLength}
				placeholder={placeholder}
				name={name}
				className={className}
			/>
		</StyledFormInput>
	);
};

export default FormInput;
