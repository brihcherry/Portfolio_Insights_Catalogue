// HomePage.tsx - The Insight Catalogue landing page.
// Single-screen hero over the app-wide background (see InitializedLayout): category
// cards on the left, title/description on the right.

import { useState } from "react";
import { Link } from "react-router-dom";
import { SemossWhiteLogo } from "@/assets";
import { AppNav } from "@/components/AppNav";
import { BackToHomeLink } from "@/components/BackToHomeLink";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CATALOGUE_CATEGORIES, type CatalogueCategory } from "@/lib/catalogue";

export const HomePage = () => {
	const [activeCategory, setActiveCategory] =
		useState<CatalogueCategory | null>(null);

	return (
		<div>
			<AppNav onCategoryClick={setActiveCategory} />

			{/* -m-4 bleeds the hero to the edges of InitializedLayout's p-4 wrapper */}
			<section className="-mx-4 -mt-4 relative h-screen">
				<div className="absolute inset-0 bg-black/50" />

				<div className="relative z-10 h-full">
					{/* Categories view */}
					<div
						className={`absolute inset-0 pt-20 px-8 sm:px-12 flex flex-col lg:flex-row items-center gap-4 transition-all duration-500 ease-out ${
							activeCategory
								? "opacity-0 -translate-y-8 pointer-events-none"
								: "opacity-100 translate-y-0"
						}`}
					>
						<div className="w-full lg:w-1/2 flex justify-end">
							<div className="w-full max-w-lg max-h-[65vh] overflow-y-auto space-y-6 pr-1">
								{CATALOGUE_CATEGORIES.map((category) => (
									<Link
										key={category.path}
										to={category.path}
										onClick={(e) => {
											e.preventDefault();
											setActiveCategory(category);
										}}
										className="block"
									>
										<Card className="bg-white/90 backdrop-blur-sm transition-colors hover:bg-white">
											<CardHeader className="p-4 pb-2">
												<CardTitle className="text-base">
													{category.title}
												</CardTitle>
												<CardDescription className="text-xs">
													{category.description}
												</CardDescription>
											</CardHeader>
											<img
												src={category.image}
												alt={category.title}
												className="aspect-[3/2] w-full object-cover rounded-b-xl"
											/>
										</Card>
									</Link>
								))}
							</div>
						</div>

						<div className="w-full lg:w-1/2 flex justify-start">
							<div className="max-w-xl space-y-3">
								<div className="flex items-center gap-6">
									<img
										src={SemossWhiteLogo}
										alt="SEMOSS"
										className="h-32 w-auto"
									/>
									<h1
										className="text-5xl font-bold text-white"
										style={{
											fontFamily: "Open Sans, serif",
										}}
									>
										Portfolio Analytics Dashboard
									</h1>
								</div>
								<p className="rounded-md bg-black/30 backdrop-blur-sm px-3 py-2 text-white/90">
									Explore tools that provide system- and
									enterprise-level insights, including data
									transfer, shared business processes, system
									overlap, and other key enterprise metrics.
									The tools enable data-driven decision-making
									across the enterprise for use cases such as
									system consolidation, modernization,
									portfolio optimization, and transition
									planning and decommissioning.
								</p>
							</div>
						</div>
					</div>

					{/* Category detail view - insights for the selected category */}
					<div
						className={`absolute inset-0 pt-20 px-8 sm:px-12 flex items-center justify-center transition-all duration-500 ease-out ${
							activeCategory
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8 pointer-events-none"
						}`}
					>
						{activeCategory && (
							<div className="w-full max-w-3xl space-y-6 text-center">
								<BackToHomeLink
									onClick={() => setActiveCategory(null)}
								/>
								<h2
									className="text-4xl font-bold text-white"
									style={{ fontFamily: "Open Sans, serif" }}
								>
									{activeCategory.title}
								</h2>
								<div className="grid gap-4 sm:grid-cols-2">
									{activeCategory.insights.map((insight) => (
										<Link
											key={insight.slug}
											to={`/${activeCategory.path}/${insight.slug}`}
										>
											<Card className="bg-white/90 backdrop-blur-sm transition-colors hover:bg-white text-left">
												<CardHeader>
													<CardTitle className="text-base">
														{insight.name}
													</CardTitle>
												</CardHeader>
											</Card>
										</Link>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</section>

			<footer className="border-t bg-muted px-4 py-10">
				<div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-8">
					<div className="space-y-1">
						<p className="font-semibold">Insight Catalogue</p>
						<p className="text-sm text-muted-foreground max-w-sm">
							A single home for the enterprise-level Insights
							we've built, organized by category.
						</p>
					</div>

					<nav className="flex gap-8">
						{CATALOGUE_CATEGORIES.map((category) => (
							<Link
								key={category.path}
								to={category.path}
								className="text-sm font-medium hover:underline"
							>
								{category.title}
							</Link>
						))}
					</nav>
				</div>
			</footer>
		</div>
	);
};
