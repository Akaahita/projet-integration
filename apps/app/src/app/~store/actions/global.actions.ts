import { FormViolation, GlobalRouteData } from '~shared/models/shared.models';

export class SetRouteData {
  static readonly type = '[GLobal] Set Route Data';
  constructor(public data: GlobalRouteData) {}
}

export class SetFormViolations {
  static readonly type = '[Global] Set Form Violations';
  constructor(public data: FormViolation[] | undefined) {}
}
