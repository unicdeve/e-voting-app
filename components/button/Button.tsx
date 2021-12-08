import { FC } from 'react';
import { StyledButton } from './Button.styled';

export enum ButtonType {
	BUTTON = 'button',
	SUBMIT = 'submit',
	RESET = 'reset',
}

interface IProps {
	type?: ButtonType;
	className?: string;
	btnText?: string;
	title?: string;
	disabled?: boolean;
	block?: boolean;
}

const Button: FC<IProps> = ({
	type = ButtonType.BUTTON,
	className,
	children,
	btnText,
	title,
	block,
	disabled,
}) => {
	const classNames = [className, block ? 'block' : '']
		.filter(Boolean)
		.join(' ');

	return (
		<StyledButton
			title={title}
			className={classNames}
			type={type}
			disabled={disabled}
		>
			{children ? children : btnText}
		</StyledButton>
	);
};

export default Button;
