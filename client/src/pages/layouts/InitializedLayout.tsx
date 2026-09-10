// InitializedLayout.tsx - Gate that blocks rendering until SEMOSS is ready.
//
// All routes are wrapped in this layout (see Router.tsx). It checks the SDK's
// initialization state and shows either:
//   - A loading spinner while SEMOSS connects
//   - An error page if initialization failed
//   - The actual page content (via <Outlet />) once ready
//
// The useInsight() hook provides { isInitialized, error } from the InsightProvider.

import { useInsight } from "@semoss/sdk/react";
import { Outlet } from "react-router-dom";
import { Backsplash } from "@/assets";
import { LoadingScreen } from "@/components";
import { ErrorPage } from "../ErrorPage";

export const InitializedLayout = () => {
	const { isInitialized, error } = useInsight();

	return (
		<div className="flex flex-col h-screen">
			{/* App-wide static background, fixed so it never scrolls with page content */}
			<div
				className="fixed inset-0 -z-10 bg-cover bg-center"
				style={{ backgroundImage: `url(${Backsplash})` }}
			/>
			{isInitialized ? (
				<div className="p-4 overflow-auto h-full">
					{/* Outlet renders whichever child route matched in Router.tsx */}
					<Outlet />
				</div>
			) : error ? (
				<ErrorPage />
			) : (
				<LoadingScreen />
			)}
		</div>
	);
};
