import { InfoCircle, XClose } from "@bijvoorbeeldzo/icons";
import React from "react";
import { Tooltip } from "../Tooltip";
import { theme } from "./theme";

interface Props {
	variant: "primary" | "info" | "error" | "success" | "warning";
	title: string;
	content: string;
}

export const Alert: React.FC<Props> = ({ variant, title, content }) => {
	return (
		<div className={`${theme.base} ${theme.variant[variant].base}`}>
			<div className={theme.closeButtonWrapper}>
				<Tooltip title="Close" position="top">
					<XClose width={20} height={20} className={`${theme.closeButton} ${theme.variant[variant].closeButton}`} />
				</Tooltip>
			</div>
			<InfoCircle width={20} height={20} className={theme.variant[variant].infoCircle} />
			<div>
				<p className={theme.variant[variant].title}>{title}</p>
				<p className={theme.variant[variant].content}>{content}</p>
			</div>
		</div>
	);
};
