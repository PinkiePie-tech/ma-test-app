import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
  @Input() refreshCounter: boolean;

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
      switchMap((queryParams: Params) => {
        if (queryParams.refresh) {
          this.navigate({refresh: undefined});
        }
        if (queryParams.realtor) {
          return this.realtorService.getRealtor(queryParams.realtor);
        } else {
          return of(undefined);
        }
      }),
      distinctUntilChanged()
    ).subscribe(this.realtorSelected$));
  }

  ngOnInit(): void {
    this.realtors$ = this.realtorService.getAllRealtors().pipe(
      distinctUntilChanged(),
      tap(realtors => {
        if (!this.realtorSelected$.getValue() && realtors.length > 0) {
          this.selectRealtors(realtors[0]);
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

  public unsetMessage() {
    this.navigate({message: undefined});
  }
}
