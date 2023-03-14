/**
 * Define here Store models
 **/

import { FormViolation, GlobalRouteData } from './shared.models';

export type GlobalStateModel = {
  routeData: GlobalRouteData | undefined;
  formViolations: FormViolation[] | undefined;
};
