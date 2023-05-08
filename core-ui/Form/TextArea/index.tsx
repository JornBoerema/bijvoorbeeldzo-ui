import React from "react";
import { theme } from "./theme";

interface Props {
	id: string;
	placeholder: string;
	required: boolean;
	disabled: boolean;
	defaultValue: string;
	value: string;
	onChange: (e: any) => void;
	className: string;
	error?: boolean;
}

export const TextArea: React.FC<Props> = ({ id, placeholder, required, disabled, defaultValue, value, onChange, className, error }) => {
	return (
		<textarea
			id={id}
			placeholder={placeholder}
			onChange={(e) => onChange(e)}
			required={required}
			disabled={disabled}
			defaultValue={defaultValue}
			value={value}
			className={`${theme.base} ${className} ${error ? theme.error : theme.noerror}`}
		/>
	);
};
