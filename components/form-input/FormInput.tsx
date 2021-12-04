import { FC } from 'react';
import { StyledFormInput } from './FormInput.styled';

interface IProps {
	className?: string;
	type?: string;
	label?: string;
	name: string;
	maxLength?: number;
	placeholder?: string;
	value: string;
	onChange: (e: any) => void;
}

const FormInput: FC<IProps> = ({
	type = 'text',
	className,
	label,
	name,
	maxLength,
	placeholder,
	value,
	onChange,
}) => {
	return (
		<StyledFormInput className={className}>
			{label ? <label htmlFor={name}>{label}</label> : null}
			<input
				id={name}
				type={type}
				maxLength={maxLength}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
			/>
		</StyledFormInput>
	);
};

export default FormInput;
