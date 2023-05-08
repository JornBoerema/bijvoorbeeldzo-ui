import { Menu01, XClose } from "@bijvoorbeeldzo/icons";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../Button";
import BijvoorbeeldzoLogo from "./images/Bijvoorbeeldzo_logo.svg";
import { theme } from "./theme";

interface SidebarItemProps {
	index: number;
	title: string;
	icon?: any;
	route?: string;
	module?: string;
}

interface Options {
	modules?: Array<string>;
	items: Array<SidebarItemProps>;
}

interface Props {
	options: Options;
}

export const Sidebar: React.FC<Props> = ({ options }) => {
	const { modules, items } = options;

	const router = useRouter();
	const pathname = usePathname();
	const [open, setOpen] = useState(true);

	return (
		<div className={`flex flex-col h-screen border-r border-r-gray-200 ${open ? "w-72" : "w-20"}`}>
			<header className="flex flex-col gap-6 pt-8 h-full">
				<div className={`flex ${open ? "pl-6 pr-4 justify-between" : "justify-center"}`}>
					{open && <Image src={BijvoorbeeldzoLogo} alt="logo" priority={true} width={180} />}
					<Button variant="secondaryColor" size="square" leadingicon={open ? <XClose /> : <Menu01 />} onClick={() => setOpen(!open)} className="focus:shadow-none" />
				</div>
				<div className="flex flex-col items-center gap-1 px-4">
					{items.map((item, i) =>
						open ? (
							<Button
								key={i}
								variant={pathname === item.route ? "secondaryColor" : "tertiaryGray"}
								size="sm"
								leadingicon={React.createElement(item.icon)}
								onClick={() => item.route && router.push(item.route)}
								className="!justify-start w-full focus:shadow-none"
							>
								{open && item.title}
							</Button>
						) : (
							<Button
								key={i}
								variant={pathname === item.route ? "secondaryColor" : "tertiaryGray"}
								size="square"
								leadingicon={React.createElement(item.icon)}
								onClick={() => item.route && router.push(item.route)}
								className="focus:shadow-none"
							/>
						)
					)}
				</div>
			</header>
			<footer></footer>
		</div>
	);
};
