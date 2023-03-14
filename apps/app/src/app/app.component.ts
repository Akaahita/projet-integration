import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GlobalFacade } from '~store/facades/global.facade';
import { filter, map, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private _destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private globalFacade: GlobalFacade
  ) {
    this.listenToRouteParamsChanges();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  listenToRouteParamsChanges(): void {
    this.router.events
      .pipe(
        takeUntil(this._destroy$),
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        tap(({ snapshot }) => {
          const routeData = this.globalFacade.getRouteData();
          this.globalFacade.setRouteData({
            params: snapshot.params,
            queryParams: snapshot.queryParams,
            currentUrl: this.router.url,
            currentUrlWithoutParams: this.router.url.split('?')[0],
            previousUrl: routeData?.currentUrl || '/'
          });
        })
      )
      .subscribe();
  }
}
