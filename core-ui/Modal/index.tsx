import { XClose } from "@bijvoorbeeldzo/icons";
import React from "react";
import { Button } from "../Button";
import { theme } from "./theme";

interface Props {
	visible: boolean;
	setVisible: (value: boolean) => void;
	title?: string;
	children: JSX.Element;
	width?: string;
}

export const Modal: React.FC<Props> = ({ visible, setVisible, title, children, width }) => {
	return (
		<div className={`${theme.backgroundBase} ${visible && theme.backgroundVisible} ${!visible && theme.backgroundHidden}`}>
			<div className={theme.modalBackground} style={{ width: width }}>
				<Button variant="tertiaryGray" size="square" leadingicon={<XClose />} onClick={() => setVisible(!visible)} className="absolute right-6 top-6" />
				<div className={theme.contentWrapper}>
					{title && <p className={theme.title}>{title}</p>}
					{children}
				</div>
			</div>
		</div>
	);
};
