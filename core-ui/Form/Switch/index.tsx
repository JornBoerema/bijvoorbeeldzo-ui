"use client";
import React, { useState } from "react";
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

export const Switch: React.FC<Props> = ({ id, required, disabled, defaultValue, value, onChange, className }) => {
	return (
		<label className={theme.base}>
			<input
				type="checkbox"
				id={id}
				defaultChecked={defaultValue}
				checked={value}
				onChange={(e) => onChange && onChange(e)}
				disabled={disabled}
				required={required}
				className={`${theme.input} ${className}`}
			/>
			<div className={theme.div} />
		</label>
	);
};
