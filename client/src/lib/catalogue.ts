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
	// TODO: paste a short description of the Insight here.
	description: string;
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
		title: "System Optimization",
		description:
			"Insights that optimize systems and recommend next best actions.",
		image: OptimizationImage,
		insights: [
			{
				name: "System Similarity",
				slug: "system-similarity",
				description: "Learn which systems have the most functional overlap with other systems.",
				url: "https://workshop.cfg.deloitte.com/SemossWeb/packages/client/dist/#/s/e6cead25-cee0-4602-8efd-34dbe16d056e",
			},
			{
				name: "Sustainment Recommendation",
				slug: "sustainment-recommendation",
				description: "Get recommendations for sustaining systems based on current portfolio analysis.",
				url: "https://workshop.cfg.deloitte.com/SemossWeb/packages/client/dist/#/s/de966362-af5c-4db2-b5bb-36a5d0518bee",
			},
			{
				name: "Network Of Systems Around a Data Object",
				slug: "network-of-systems-around-a-data-object",
				description: "View the network of systems that directly send or receive a specific data object.",
				url: "https://workshop.cfg.deloitte.com/SemossWeb/packages/client/dist/#/s/501fdd3e-68f8-4895-88dc-c117550c6687",
			},
			{
				name: "System Removal Impact",
				slug: "system-removal-impact",
				description: "Get a comprehensive overview of each system and its impact on the capability group.",
				url: "https://workshop.cfg.deloitte.com/SemossWeb/packages/client/dist/#/s/f0174982-32e6-45b0-b7fa-3c3212ef8d0f",
			},
		],
	},
	{
		path: ROUTE_PATH_SYSTEM_NETWORKS_PAGE,
		title: "Decommissioning",
		description:
			"Insights that support system decommissioning decisions.",
		image: NetworkImage,
		insights: [
			{
				name: "Decommissioning Milestone Dashboard",
				slug: "insight-1",
				description: "View the milestones and tasks that need to be completed in order to successfully decommission a system.",
				url: "",
			},
			{
				name: "Site-Specific Decomissioning Tasks",
				slug: "insight-2",
				description: "Display the decomissioning activities that sites bneed to complete prior to, during, and after go-live to ensure the legacy systems are safely decommissioned.",
				url: "",
			},
			{
				name: "Site Decomissioning Checklist Form",
				slug: "insight-3",
				description: ".",
				url: "Update the status of tasks in the decommissioning checklist.",
			},
			{
				name: "Site Progress Report",
				slug: "insight-4",
				description: "View a site's progress with respect to the decomissioning checklist.",
				url: "",
			},
			{
				name: "Decommissioning Status Tracker - Wave View",
				slug: "insight-5",
				description: "Track the real-time status of decommissioning.",
				url: "",
			},
			{
				name: "Decommissioning Status Tracker - System View",
				slug: "insight-6",
				description: "Track the real-time status of decommissioning.",
				url: "",
			},
		],
	},
];
