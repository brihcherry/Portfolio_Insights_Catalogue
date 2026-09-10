// catalogue.ts - Category metadata for the Insight Catalogue.
//
// Each category groups related Insights (SEMOSS apps). Add new categories here
// and wire a matching route in Router.tsx + routes.constants.ts.

import { NetworkImage, OptimizationImage } from "@/assets";
import {
	ROUTE_PATH_OPTIMIZATION_RECOMMENDATION_PAGE,
	ROUTE_PATH_SYSTEM_NETWORKS_PAGE,
} from "@/routes.constants";

export interface CatalogueInsight {
	name: string;
	slug: string;
	// TODO: paste the actual Insight URL here to embed it via iframe.
	url: string;
}

export interface CatalogueCategory {
	path: string;
	title: string;
	description: string;
	image: string;
	insights: CatalogueInsight[];
}

export const CATALOGUE_CATEGORIES: CatalogueCategory[] = [
	{
		path: ROUTE_PATH_OPTIMIZATION_RECOMMENDATION_PAGE,
		title: "Optimization & Recommendation",
		description:
			"Insights that optimize decisions or recommend a next best action.",
		image: OptimizationImage,
		insights: [
			{
				name: "System Similarity",
				slug: "system-similarity",
				url: "http://localhost:9090/SemossWeb/packages/client/dist/#/app/910611b7-b6e5-491c-9d4c-0ca5f6f4224f/view",
			},
			{
				name: "Sustainment Recommendation",
				slug: "sustainment-recommendation",
				url: "http://localhost:9090/SemossWeb/packages/client/dist/#/app/ac976e45-6b32-4cb7-af5c-83a729480db0/view",
			},
		],
	},
	{
		path: ROUTE_PATH_SYSTEM_NETWORKS_PAGE,
		title: "System Networks",
		description:
			"Insights that model, monitor, or analyze networks of connected systems.",
		image: NetworkImage,
		insights: [
			{
				name: "Network Of Systems Around a Data Object",
				slug: "network-of-systems-around-a-data-object",
				url: "http://localhost:9090/SemossWeb/packages/client/dist/#/app/0ec438b1-489a-4f4c-81cc-e819dfbd2afe/view",
			},
			{
				name: "System Removal Impact",
				slug: "system-removal-impact",
				url: "http://localhost:9090/SemossWeb/packages/client/dist/#/app/6628e2d7-c53c-4556-a55a-bb7937831739/view",
			},
		],
	},
];
