// AppNav.tsx - Fixed, frosted nav bar shown across every page.
//
// Blurs the app-wide background (set in InitializedLayout) behind it. On the homepage,
// pass onCategoryClick to trigger the in-place category crossfade instead of navigating;
// on other pages, omit it so the links navigate normally.

import { Link } from "react-router-dom";
import { SemossWhiteLogo } from "@/assets";
import { CATALOGUE_CATEGORIES, type CatalogueCategory } from "@/lib/catalogue";

// TODO: paste the SEMOSS website URL here.
const SEMOSS_URL = "https://semoss.org/";

export const AppNav = ({
	onCategoryClick,
}: {
	onCategoryClick?: (category: CatalogueCategory) => void;
}) => {
	return (
		<nav className="fixed top-0 inset-x-0 z-30 h-20 bg-black/30 backdrop-blur-sm border-b border-white/20">
			<div className="relative h-full flex items-center justify-between gap-8 px-6">
				<a
					href={SEMOSS_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-white font-semibold"
				>
					<img src={SemossWhiteLogo} alt="" className="h-8 w-auto" />
					SEMOSS
				</a>

				<div className="flex gap-8">
					{CATALOGUE_CATEGORIES.map((category) => (
						<Link
							key={category.path}
							to={category.path}
							onClick={
								onCategoryClick
									? (e) => {
											e.preventDefault();
											onCategoryClick(category);
										}
									: undefined
							}
							className="text-white font-medium hover:underline"
						>
							{category.title}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};
