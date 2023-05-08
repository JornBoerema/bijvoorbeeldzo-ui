"use client";
import { FormControl, FormLabel, Input, Switch } from "@/core-ui/Form";
import { Sidebar } from "@/core-ui/Sidebar";
import { sidebarOptions } from "./sidebarOptions";

export default function Home() {
	return (
		<div className="flex">
			<Sidebar options={sidebarOptions} />
			<FormControl>
				<FormLabel id="test">Home</FormLabel>
				<Input id="test" type="text" />
			</FormControl>
		</div>
	);
}
