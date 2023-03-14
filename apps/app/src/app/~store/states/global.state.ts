import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GLOBAL_STATE_TOKEN } from '~shared/constants/global.constants';
import { GlobalStateModel } from '~shared/models/store.models';
import { SetFormViolations, SetRouteData } from '~store/actions/global.actions';
import { toPath } from 'lodash';
import { FormViolation, GlobalRouteData } from '~shared/models/shared.models';

export const DEFAULT_GLOBAL_STATE = {
  routeData: undefined,
  formViolations: undefined
};

@State({
  name: GLOBAL_STATE_TOKEN,
  defaults: DEFAULT_GLOBAL_STATE
})
@Injectable()
export class GlobalState {
  @Action(SetRouteData)
  setRouteData(
    ctx: StateContext<GlobalStateModel>,
    action: SetRouteData
  ): void {
    const { routeData, formViolations } = ctx.getState();

    ctx.patchState({
      routeData: {
        ...routeData,
        ...action.data
      }
    });

    if (formViolations?.length) {
      ctx.dispatch(new SetFormViolations(undefined));
    }
  }

  @Action(SetFormViolations)
  setFormViolations(
    ctx: StateContext<GlobalStateModel>,
    action: SetFormViolations
  ): GlobalStateModel {
    const violations = action.data;
    return ctx.patchState({
      formViolations:
        !!violations && violations.length
          ? violations.map(el => {
              if (el.propertyPath) {
                switch (el.propertyPath) {
                  case 'plainPassword':
                    el.propertyPath = ['password'];
                    break;

                  default:
                    el.propertyPath = toPath(el.propertyPath);
                    break;
                }
              }

              return el;
            })
          : DEFAULT_GLOBAL_STATE.formViolations
    });
  }

  // SELECTORS

  @Selector()
  static routeData(state: GlobalStateModel): GlobalRouteData | undefined {
    return state.routeData;
  }

  @Selector()
  static formViolations(state: GlobalStateModel): FormViolation[] | undefined {
    return state.formViolations;
  }
}
