// BackToHomeLink.tsx - Consistent "return to home" control used across pages.
//
// Navigates to "/" by default. Pass onClick to override navigation (e.g. HomePage
// resets its in-place category view instead of doing a full route change).

import { Link } from "react-router-dom";

export const BackToHomeLink = ({ onClick }: { onClick?: () => void }) => {
	return (
		<Link
			to="/"
			onClick={
				onClick
					? (e) => {
							e.preventDefault();
							onClick();
						}
					: undefined
			}
			className="inline-flex items-center gap-1 rounded-md bg-black/30 backdrop-blur-sm px-3 py-1.5 text-sm font-medium text-white hover:bg-black/40"
		>
			← Back to Home
		</Link>
	);
};
