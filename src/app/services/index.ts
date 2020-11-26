import { CompaniesApi } from './CompaniesApi';
import { SupportApi } from './SupportApi';

export * from './CompaniesApi';
export * from './SupportApi';

export const ServicesDeclaration: any[] = [
  CompaniesApi,
  SupportApi
];
