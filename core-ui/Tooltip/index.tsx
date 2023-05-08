import React from "react";
import { theme } from "./theme";

interface Props {
	title: string;
	position: "top" | "bottom" | "left" | "right";
	children: JSX.Element;
	className?: string;
}

export const Tooltip: React.FC<Props> = ({ title, position, children, className }) => {
	return (
		<div id="tooltip" className={`${theme.base.wrapper} ${className}`}>
			<div>{children}</div>
			<span className={`${theme.base.rectangle} ${theme[position].rectangle}`}>{title}</span>
			<span className={`${theme.base.arrow} ${theme[position].arrow}`}></span>
		</div>
	);
};
