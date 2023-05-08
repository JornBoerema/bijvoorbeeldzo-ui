import React from "react";
import { theme } from "./theme";

interface Props {
	variant: "primary" | "secondaryGray" | "secondaryColor" | "tertiaryGray" | "tertiaryColor" | "error";
	size: "sm" | "md" | "lg" | "xl" | "xxl" | "breadcrumb" | "square";
	disabled?: boolean;
	leadingicon?: JSX.Element;
	trailingicon?: JSX.Element;
	onClick?: () => void;
	className?: string;
	children?: React.ReactNode;
	type?: "button" | "submit" | "reset";
}

export const Button: React.FC<Props> = ({ variant, size, disabled, leadingicon, trailingicon, onClick, className, children, type }) => {
	return (
		<button type={type || "button"} disabled={disabled} onClick={onClick} className={`${theme.base} ${theme.variant[variant]} ${theme.size[size]} ${className}`}>
			{leadingicon && React.cloneElement(leadingicon, { width: 20, height: 20 })}
			{children ? children : null}
			{trailingicon && React.cloneElement(trailingicon, { width: 20, height: 20 })}
		</button>
	);
};
