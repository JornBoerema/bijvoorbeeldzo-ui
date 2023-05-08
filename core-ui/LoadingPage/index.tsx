import React from "react";
import { LoadingSpinner } from "../LoadingSpinner";
import { theme } from "./theme";

interface Props {
	loading: boolean;
}

export const LoadingPage: React.FC<Props> = ({ loading }) => {
	return <div className={`${theme.base} ${loading && theme.visible} ${!loading && theme.hidden}`}>{loading && <LoadingSpinner />}</div>;
};
