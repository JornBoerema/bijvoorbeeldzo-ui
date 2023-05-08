import React from "react";
import { theme } from "./theme";

interface Props {
	variant: "success" | "warning" | "error" | "primary";
	icon: JSX.Element;
}

export const FeaturedIcon: React.FC<Props> = ({ variant, icon }) => {
	return <div className={`${theme.base} ${theme.variant[variant]}`}>{React.cloneElement(icon, { width: 20, height: 20 })}</div>;
};
