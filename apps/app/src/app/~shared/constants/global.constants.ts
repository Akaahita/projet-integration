import { StateToken } from '@ngxs/store';
import { GlobalStateModel } from '~shared/models/store.models';

// State Constants
export const GLOBAL_STATE_TOKEN = new StateToken<GlobalStateModel>('global');
