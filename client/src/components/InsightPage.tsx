// InsightPage.tsx - Shared layout for a single Insight, embedded via iframe.
//
// Looks up the Insight by slug within the given category and renders its name
// plus an iframe pointed at insight.url. Until a URL is added in lib/catalogue.ts,
// shows a placeholder instead of an empty iframe.

import { useParams } from "react-router-dom";
import { AppNav } from "@/components/AppNav";
import { BackToHomeLink } from "@/components/BackToHomeLink";
import type { CatalogueCategory } from "@/lib/catalogue";

export const InsightPage = ({ category }: { category: CatalogueCategory }) => {
	const { insightSlug } = useParams<{ insightSlug: string }>();
	const insight = category.insights.find((i) => i.slug === insightSlug);

	if (!insight) {
		return (
			<div>
				<AppNav />
				<div className="max-w-4xl mx-auto pt-24 space-y-4">
					<BackToHomeLink />
					<p className="font-bold text-white">Insight not found.</p>
				</div>
			</div>
		);
	}

	return (
		<div className="h-full flex flex-col">
			<AppNav />

			<div className="pt-24 space-y-4 flex-1 flex flex-col">
				<div className="space-y-2">
					<BackToHomeLink />
					<h1 className="text-2xl font-bold text-white">
						{insight.name}
					</h1>
				</div>

				{insight.url ? (
					<iframe
						src={insight.url}
						title={insight.name}
						className="w-full flex-1 min-h-[60vh] border rounded-md"
					/>
				) : (
					<div className="flex-1 min-h-[60vh] border border-white/30 rounded-md flex items-center justify-center font-bold text-white">
						{/* TODO: set insight.url in lib/catalogue.ts to embed this Insight */}
						No link configured for this Insight yet.
					</div>
				)}
			</div>
		</div>
	);
};
