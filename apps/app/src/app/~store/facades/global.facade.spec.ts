import { describe, expect } from '@jest/globals';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { DEFAULT_GLOBAL_STATE, GlobalState } from '~store/states/global.state';
import { HttpClientModule } from '@angular/common/http';
import { GlobalFacade } from './global.facade';
import { GLOBAL_STATE_TOKEN } from '~shared/constants/global.constants';

describe('State Selectors', () => {
  let store: Store;
  let globalFacade: GlobalFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        NgxsModule.forRoot([GlobalState])
      ],
      providers: [GlobalFacade]
    });

    store = TestBed.inject(Store);
    globalFacade = TestBed.inject(GlobalFacade);
  });

  it('should init state with default values', () => {
    const globalStateSnapshot = store.selectSnapshot(GLOBAL_STATE_TOKEN);

    expect(globalStateSnapshot).toBeTruthy();
    expect(globalStateSnapshot).toEqual(DEFAULT_GLOBAL_STATE);
  });
});
