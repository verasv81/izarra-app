import { CompaniesApi } from './CompaniesApi';
import { AnalyticsService } from './analytics.service';
import { SupportApi } from './SupportApi';

export * from './CompaniesApi';
export * from './SupportApi';
export * from './analytics.service';

export const ServicesDeclaration: any[] = [
  CompaniesApi,
  AnalyticsService,
  SupportApi
];
