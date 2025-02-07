import { definePlugin } from 'sanity';
import portfolio from './schemas/documents/portfolio';
import portfolios from './schemas/documents/portfolio-index';
import category from './schemas/documents/category';

interface AgencyPortfolioPluginArgs {
  layoutVariantFeaturedPortfolio: { title: string; value: string }[];
  commonLayoutsPortfolio: { type: string }[];
}

const agencyPortfolio = definePlugin(
  ({ layoutVariantFeaturedPortfolio, commonLayoutsPortfolio }: AgencyPortfolioPluginArgs) => ({
    schema: {
      types: [portfolios({ layoutVariantFeaturedPortfolio }), portfolio({ commonLayoutsPortfolio }), category]
    }
  })
);

export default agencyPortfolio;
