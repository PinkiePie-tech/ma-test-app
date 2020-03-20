import { Component, OnInit, OnDestroy } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { Realtors } from 'src/app/shared/model/realtors';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RealtorService } from 'src/app/shared/services/realtors.service';
import { NavigateWithQueryParams } from 'src/app/shared/model/navigation';
import { tap, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-realtors-header',
  templateUrl: './realtors-header.component.html',
  styleUrls: ['./realtors-header.component.sass']
})
export class RealtorsHeaderComponent extends NavigateWithQueryParams implements OnInit, OnDestroy {
  public faEnvelope = faEnvelope;
  public realtorSelected$: BehaviorSubject<Realtors> = new BehaviorSubject<Realtors>(undefined);
  public realtors$: Observable<Realtors[]>;
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
          return this.realtorService.getRealtor(queryParams.realtor);
        } else {
          return of(undefined);
        }
      })
    ).subscribe((realtor: Realtors) => {
      this.realtorSelected$.next(realtor);
    }));
  }

  ngOnInit(): void {
    this.realtors$ = this.realtorService.getAllRealtors().pipe(
      tap(realtors => {
        if (!this.realtorSelected$.getValue() && realtors.length > 0) {
          this.realtorSelected$.next(realtors[0]);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public selectRealtors(realtor: Realtors) {
    this.navigate({realtor: realtor.id});
  }
}
