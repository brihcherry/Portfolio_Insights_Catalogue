// InsightPage.tsx - Shared layout for a single Insight, embedded via iframe.
//
// Looks up the Insight by slug within the given category and renders its name
// plus an iframe pointed at insight.url. Until a URL is added in lib/catalogue.ts,
// shows a placeholder instead of an empty iframe.

import { Link, useParams } from "react-router-dom";
import type { CatalogueCategory } from "@/lib/catalogue";

export const InsightPage = ({ category }: { category: CatalogueCategory }) => {
	const { insightSlug } = useParams<{ insightSlug: string }>();
	const insight = category.insights.find((i) => i.slug === insightSlug);

	if (!insight) {
		return (
			<div className="max-w-4xl mx-auto space-y-4">
				<Link
					to={`/${category.path}`}
					className="text-sm text-muted-foreground hover:underline"
				>
					← {category.title}
				</Link>
				<p>Insight not found.</p>
			</div>
		);
	}

	return (
		<div className="h-full flex flex-col space-y-4">
			<div>
				<Link
					to={`/${category.path}`}
					className="text-sm text-muted-foreground hover:underline"
				>
					← {category.title}
				</Link>
				<h1 className="text-2xl font-semibold mt-2">{insight.name}</h1>
			</div>

			{insight.url ? (
				<iframe
					src={insight.url}
					title={insight.name}
					className="w-full flex-1 min-h-[70vh] border rounded-md"
				/>
			) : (
				<div className="flex-1 min-h-[70vh] border rounded-md flex items-center justify-center text-muted-foreground">
					{/* TODO: set insight.url in lib/catalogue.ts to embed this Insight */}
					No link configured for this Insight yet.
				</div>
			)}
		</div>
	);
};
