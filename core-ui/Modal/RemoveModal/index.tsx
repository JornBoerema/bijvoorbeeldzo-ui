import { Trash01 } from "@bijvoorbeeldzo/icons";
import React from "react";
import { Button } from "../../Button";
import { FeaturedIcon } from "../../FeaturedIcon";
import { Modal } from "../../Modal";
import { theme } from "./theme";

interface Props {
	visible: boolean;
	setVisible: (value: boolean) => void;
	ItemName: string;
	removeSelected: () => void;
}

export const RemoveModal: React.FC<Props> = ({ visible, setVisible, ItemName, removeSelected }) => {
	return (
		<Modal visible={visible} setVisible={setVisible} width="400px">
			<>
				<div className={theme.contentWrapper}>
					<FeaturedIcon variant="error" icon={<Trash01 />} />
					<div className={theme.textWrapper}>
						<p className={theme.header}>Remove {ItemName.toLowerCase()}</p>
						<p className={theme.text}>Are you sure you want to remove item</p>
					</div>
				</div>
				<div className={theme.actionsWrapper}>
					<Button variant="secondaryGray" size="lg" className="w-full" onClick={() => setVisible(false)}>
						Cancel
					</Button>
					<Button
						variant="error"
						size="lg"
						className="w-full"
						onClick={() => {
							setVisible(false);
							removeSelected();
						}}
					>
						Remove
					</Button>
				</div>
			</>
		</Modal>
	);
};
