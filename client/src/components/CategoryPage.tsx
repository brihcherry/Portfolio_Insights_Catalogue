// CategoryPage.tsx - Shared layout for an Insight Catalogue category page.
//
// Lists the Insights that belong to a given category. Empty until Insights are
// added to CATALOGUE_CATEGORIES in lib/catalogue.ts.

import { Link } from "react-router-dom";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { CatalogueCategory } from "@/lib/catalogue";

export const CategoryPage = ({ category }: { category: CatalogueCategory }) => {
	return (
		<div className="max-w-4xl mx-auto space-y-6">
			<div>
				<Link
					to="/"
					className="text-sm text-muted-foreground hover:underline"
				>
					← All categories
				</Link>
				<h1 className="text-2xl font-semibold mt-2">
					{category.title}
				</h1>
				<p className="text-muted-foreground">{category.description}</p>
			</div>

			{category.insights.length === 0 ? (
				<Card>
					<CardHeader>
						<CardTitle className="text-base">
							No Insights yet
						</CardTitle>
						<CardDescription>
							Insights added to this category will show up here.
						</CardDescription>
					</CardHeader>
				</Card>
			) : (
				<div className="grid gap-4 sm:grid-cols-2">
					{category.insights.map((insight) => (
						<Link
							key={insight.slug}
							to={`/${category.path}/${insight.slug}`}
						>
							<Card className="h-full transition-colors hover:bg-accent">
								<CardHeader>
									<CardTitle className="text-base">
										{insight.name}
									</CardTitle>
								</CardHeader>
							</Card>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};
