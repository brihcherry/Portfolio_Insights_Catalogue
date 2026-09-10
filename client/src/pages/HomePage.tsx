// HomePage.tsx - The Insight Catalogue landing page.
// Full-viewport backsplash with top nav; cards reveal as the page scrolls.

import { Link } from "react-router-dom";
import { Backsplash } from "@/assets";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useInView } from "@/hooks";
import { CATALOGUE_CATEGORIES } from "@/lib/catalogue";

export const HomePage = () => {
	const { ref, inView } = useInView<HTMLDivElement>();

	return (
		<div>
			{/* -m-4 bleeds the hero to the edges of InitializedLayout's p-4 wrapper */}
			<section
				className="-mx-4 -mt-4 relative h-screen flex flex-col bg-cover bg-center"
				style={{ backgroundImage: `url(${Backsplash})` }}
			>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

				<nav className="relative z-10 flex justify-center gap-8 p-6">
					{CATALOGUE_CATEGORIES.map((category) => (
						<Link
							key={category.path}
							to={category.path}
							className="text-white font-medium hover:underline"
						>
							{category.title}
						</Link>
					))}
				</nav>

				<div className="relative flex-1 flex items-center justify-center text-center px-8">
					<div className="space-y-3 max-w-2xl">
						<h1
							className="text-6xl font-bold text-white pb-12"
							style={{ fontFamily: "Open Sans, serif" }}
						>
							System Analytics Dashboard
						</h1>
						<p className="inline-block rounded-md bg-black/30 backdrop-blur-sm px-3 py-2 text-white/90">
							Explore tools that provide system- and
							enterprise-level insights, including data transfer,
							shared business processes, system overlap, and other
							key enterprise metrics. The tools provide
							data-driven decision-making across the enterprise
							for use cases such as system consolidation,
							modernization, portfolio optimization, and
							transition planning and decommissioning.
						</p>
					</div>
				</div>
			</section>

			<section
				ref={ref}
				className={`min-h-screen flex flex-col justify-center max-w-4xl mx-auto py-16 px-4 space-y-6 transition-all duration-700 ease-out ${
					inView
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-8"
				}`}
			>
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
								<img
									src={category.image}
									alt={category.title}
									className="aspect-[3/2] w-full object-cover rounded-b-xl"
								/>
							</Card>
						</Link>
					))}
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
