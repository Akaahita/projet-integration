import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GLOBAL_STATE_TOKEN } from '~shared/constants/global.constants';
import { FormViolation, GlobalRouteData } from '~shared/models/shared.models';
import { SetFormViolations, SetRouteData } from '~store/actions/global.actions';
import { GlobalState } from '~store/states/global.state';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalFacade {
  @Select(GlobalState.routeData) routeData$!: Observable<
    ReturnType<typeof GlobalState.routeData>
  >;

  @Select(GlobalState.formViolations) formViolations$!: Observable<
    ReturnType<typeof GlobalState.formViolations>
  >;

  constructor(private store: Store) {}

  // Action Dispatchers
  setRouteData(data: GlobalRouteData): Observable<unknown> {
    return this.store.dispatch(new SetRouteData(data));
  }

  setFormViolations(data: FormViolation[] | undefined): Observable<unknown> {
    return this.store.dispatch(new SetFormViolations(data));
  }

  handleFormViolations(
    error: HttpErrorResponse,
    fields?: Record<string, unknown>
  ): Observable<unknown> | undefined {
    let violations = error.error?.violations as FormViolation[] | undefined;
    if (fields && violations) {
      violations = violations.filter(el =>
        Object.keys(fields).some(field => el.propertyPath.includes(field))
      );
    }
    if (violations?.length) {
      return this.setFormViolations(violations);
    }
    return;
  }

  // Snapshots
  getRouteData(): GlobalRouteData | undefined {
    return this.store.selectSnapshot(GLOBAL_STATE_TOKEN).routeData;
  }

  getFormViolations(): FormViolation[] | undefined {
    return this.store.selectSnapshot(GLOBAL_STATE_TOKEN).formViolations;
  }
}
