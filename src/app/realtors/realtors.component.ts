import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NavigateWithQueryParams } from '../shared/model/navigation';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Subscription, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-realtors',
  templateUrl: './realtors.component.html',
  styleUrls: ['./realtors.component.sass']
})
export class RealtorsComponent extends NavigateWithQueryParams implements OnInit, OnDestroy {
  public desktop = true;
  public showList$ = new BehaviorSubject<boolean>(true);
  public showDetails$ = new BehaviorSubject<boolean>(false);
  public refresh$ = new BehaviorSubject<boolean>(false);
  private subscription: Subscription = new Subscription();

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private deviceService: DeviceDetectorService
  ) {
    super(router, route);
  }

  ngOnInit(): void {
    if (this.deviceService.isMobile()) {
      this.desktop = false;
    }

    this.subscription.add(this.route.queryParams.pipe(
      distinctUntilChanged(),
    ).subscribe((queryParams: Params) => {
      if (queryParams.message) {
        this.showDetails$.next(true);
      } else {
        this.showDetails$.next(false);
      }
    }));

    this.subscription.add(this.showDetails$.subscribe(value => this.showList$.next(!value)));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
