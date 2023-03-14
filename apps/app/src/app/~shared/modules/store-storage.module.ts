import { NgModule } from '@angular/core';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { GlobalState } from '~store/states/global.state';

@NgModule({
  imports: [
    NgxsStoragePluginModule.forRoot({
      key: [GlobalState],
      beforeSerialize: (obj, key) => {
        if (key === 'global') {
          // Save only provided properties on storage
          return {
            routeData: { currentUrl: obj?.routeData?.currentUrl },
            auth: {
              user: obj?.auth?.user,
              tokens: obj?.auth?.tokens
            },
            usedTokens: obj?.usedTokens
          };
        }
        return obj;
      }
    })
  ]
})
export class StoreStorageModule {}
