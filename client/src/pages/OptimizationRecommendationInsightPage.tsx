// OptimizationRecommendationInsightPage.tsx - Insight detail route for "Optimization & Recommendation".

import { InsightPage } from "@/components/InsightPage";
import { CATALOGUE_CATEGORIES } from "@/lib/catalogue";

export const OptimizationRecommendationInsightPage = () => {
	return <InsightPage category={CATALOGUE_CATEGORIES[0]} />;
};
