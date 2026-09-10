// SystemNetworksPage.tsx - "System Networks" category.

import { CategoryPage } from "@/components/CategoryPage";
import { CATALOGUE_CATEGORIES } from "@/lib/catalogue";

export const SystemNetworksPage = () => {
	return <CategoryPage category={CATALOGUE_CATEGORIES[1]} />;
};
