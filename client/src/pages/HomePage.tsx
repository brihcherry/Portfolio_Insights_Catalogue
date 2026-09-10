// HomePage.tsx - The Insight Catalogue landing page.
// Lists categories; each links to a page of the Insights within it.

import { Link } from "react-router-dom";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CATALOGUE_CATEGORIES } from "@/lib/catalogue";

export const HomePage = () => {
	return (
		<div className="max-w-4xl mx-auto space-y-6">
			<div>
				<h1 className="text-2xl font-semibold">Insight Catalogue</h1>
				<p className="text-muted-foreground">
					Browse the Insights we've built, organized by category.
				</p>
			</div>

			<div className="grid gap-4 sm:grid-cols-2">
				{CATALOGUE_CATEGORIES.map((category) => (
					<Link key={category.path} to={category.path}>
						<Card className="h-full transition-colors hover:bg-accent">
							<CardHeader>
								<CardTitle>{category.title}</CardTitle>
								<CardDescription>
									{category.description}
								</CardDescription>
							</CardHeader>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
};
