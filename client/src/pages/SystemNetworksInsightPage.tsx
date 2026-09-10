// SystemNetworksInsightPage.tsx - Insight detail route for "System Networks".

import { InsightPage } from "@/components/InsightPage";
import { CATALOGUE_CATEGORIES } from "@/lib/catalogue";

export const SystemNetworksInsightPage = () => {
	return <InsightPage category={CATALOGUE_CATEGORIES[1]} />;
};
