// CategoryPage.tsx - Shared layout for an Insight Catalogue category page.
//
// Lists the Insights that belong to a given category. Empty until Insights are
// added to CATALOGUE_CATEGORIES in lib/catalogue.ts.

import { Link } from "react-router-dom";
import { AppNav } from "@/components/AppNav";
import { BackToHomeLink } from "@/components/BackToHomeLink";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { CatalogueCategory } from "@/lib/catalogue";

export const CategoryPage = ({ category }: { category: CatalogueCategory }) => {
	return (
		<div>
			<AppNav />

			<div className="max-w-4xl mx-auto pt-24 space-y-6">
				<div className="space-y-2">
					<BackToHomeLink />
					<h1 className="text-2xl font-bold text-white">
						{category.title}
					</h1>
					<p className="text-white/80">{category.description}</p>
				</div>

				{category.insights.length === 0 ? (
					<Card className="bg-white/90 backdrop-blur-sm">
						<CardHeader>
							<CardTitle className="text-base">
								No Insights yet
							</CardTitle>
							<CardDescription>
								Insights added to this category will show up
								here.
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
								<Card className="h-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white">
									<CardHeader>
										<CardTitle className="text-base">
											{insight.name}
										</CardTitle>
										<CardDescription>
											{insight.description}
										</CardDescription>
									</CardHeader>
								</Card>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
