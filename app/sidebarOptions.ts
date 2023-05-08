import { Grid01, Home01, Tool01 } from "@bijvoorbeeldzo/icons";

export const sidebarOptions = {
	modules: ["Module 1", "Module 2"],
	items: [
		{
			index: 1,
			title: "Dashboard",
			icon: Home01,
			route: "/",
			module: "Module 1",
		},
		{
			index: 1,
			title: "Dashboard",
			icon: Grid01,
			route: "/dashboard",
			module: "Module 2",
		},
		{
			index: 5,
			title: "Admin",
			icon: Tool01,
			route: "/admin",
		},
	],
};
