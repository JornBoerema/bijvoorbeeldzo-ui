"use client";
import { Check } from "@bijvoorbeeldzo/icons";
import React, { useRef, useState } from "react";
import { theme } from "./theme";

interface Props {
	id: string;
	required?: boolean;
	disabled?: boolean;
	defaultValue?: boolean;
	value?: boolean;
	onChange?: (e: any) => void;
	className?: string;
}

export const Checkbox: React.FC<Props> = ({ id, required, disabled, defaultValue, value, onChange, className }) => {
	const [currentValue, setCurrentValue] = useState(value || defaultValue);

	return (
		<div className="relative w-4 h-4">
			<input
				type="checkbox"
				id={id}
				defaultChecked={defaultValue}
				checked={value}
				disabled={disabled}
				required={required}
				onChange={(e) => {
					setCurrentValue(e.target.checked);
					onChange && onChange(e);
				}}
				className={`${theme.base} ${className}`}
			/>
			{currentValue && (
				<span className={theme.check}>
					<Check width={12} height={12} />
				</span>
			)}
		</div>
	);
};
