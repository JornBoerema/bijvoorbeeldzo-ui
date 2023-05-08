import React from "react";
import { theme } from "./theme";

interface Props {
	id: string;
	children: React.ReactNode;
}

export const FormLabel: React.FC<Props> = ({ id, children }) => {
	return (
		<label htmlFor={id} className={theme.base}>
			{children}
		</label>
	);
};
