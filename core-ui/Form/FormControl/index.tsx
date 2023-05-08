import React from "react";
import { theme } from "./theme";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const FormControl: React.FC<Props> = ({ children, className }) => {
	return <div className={`${theme.base} ${className}`}>{children}</div>;
};
