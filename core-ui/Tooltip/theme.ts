export const theme = {
	base: {
		wrapper: "relative cursor-pointer pointer group",
		rectangle: "mb-1 absolute hidden group-hover:inline-block bg-gray-800 text-white font-medium text-sm p-2 whitespace-nowrap rounded-md",
		arrow: "mb-1 absolute hidden group-hover:inline-block border-[6px]",
	},
	top: {
		rectangle: "left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]",
		arrow: "left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-gray-800",
	},
	bottom: {
		rectangle: "left-1/2 -translate-x-1/2 top-[calc(100%+5px)]",
		arrow: "left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t-0 border-b-gray-800",
	},
	left: {
		rectangle: "top-1/2 -translate-y-1/2 right-[calc(100%+5px)]",
		arrow: "top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r-0 border-l-gray-800",
	},
	right: {
		rectangle: "top-1/2 -translate-y-1/2 left-[calc(100%+5px)]",
		arrow: "top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l-0 border-r-gray-800",
	},
};
