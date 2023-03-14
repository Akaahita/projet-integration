/**
 * Define here models used
 * across app that are not defined by the backend
 **/

export type FormViolation = {
  propertyPath: string | string[];
  title: string;
  type: string;
};

export type GlobalRouteData = {
  params: Record<string, string>;
  queryParams: Record<string, string>;
  currentUrl: string;
  currentUrlWithoutParams: string;
  previousUrl: string;
};
