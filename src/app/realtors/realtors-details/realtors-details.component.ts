import { Component, OnDestroy } from '@angular/core';
import { NavigateWithQueryParams } from 'src/app/shared/model/navigation';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RealtorService } from 'src/app/shared/services/realtors.service';
import { Subscription, BehaviorSubject, of } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-realtors-details',
  templateUrl: './realtors-details.component.html',
  styleUrls: ['./realtors-details.component.sass']
})
export class RealtorsDetailsComponent extends NavigateWithQueryParams implements OnDestroy {
  public messageSelected$: BehaviorSubject<Message> = new BehaviorSubject<Message>(undefined);
  private subscription = new Subscription();

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private realtorService: RealtorService
  ) {
    super(router, route);
    this.subscription.add(this.route.queryParams.pipe(
      distinctUntilChanged(),
      switchMap((queryParams: Params) => {
        if (queryParams.realtor) {
          return queryParams.message ? this.realtorService.getMessageFromRealtor(queryParams.realtor, queryParams.message) : of(undefined);
        } else {
          return of(undefined);
        }
      })
    ).subscribe(this.messageSelected$));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
