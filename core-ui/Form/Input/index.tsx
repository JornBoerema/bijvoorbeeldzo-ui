import React from "react";
import { theme } from "./theme";

interface Props {
	type: "text" | "email" | "password";
	id: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	defaultValue?: string;
	value?: string;
	onChange?: (e: any) => void;
	className?: string;
	error?: boolean;
}

export const Input: React.FC<Props> = ({ type, id, placeholder, required, disabled, defaultValue, value, onChange, className, error }) => {
	return (
		<input
			type={type}
			id={id}
			placeholder={placeholder}
			onChange={(e) => onChange && onChange(e)}
			required={required}
			disabled={disabled}
			defaultValue={defaultValue}
			value={value}
			className={`${theme.base} ${className} ${error ? theme.error : theme.noerror}`}
		/>
	);
};
