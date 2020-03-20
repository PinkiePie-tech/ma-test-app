import { Component, OnInit, OnDestroy } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { BehaviorSubject, Observable, Subscription, of } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RealtorService } from 'src/app/shared/services/realtors.service';
import { NavigateWithQueryParams } from 'src/app/shared/model/navigation';
import { Message } from 'src/app/shared/model/message';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-realtors-list',
  templateUrl: './realtors-list.component.html',
  styleUrls: ['./realtors-list.component.sass']
})
export class RealtorsListComponent extends NavigateWithQueryParams implements OnInit, OnDestroy {
  public faEnvelope = faEnvelope;
  public messageUnread = 3;
  public realtorSelected$: BehaviorSubject<Message> = new BehaviorSubject<Message>(undefined);
  public realtors$: Observable<Message[]>;
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
          return this.realtorService.getAllMessagesFromRealtor(queryParams.realtor);
        } else {
          return of(undefined);
        }
      })
    ).subscribe((realtor: Message) => {
      this.realtorSelected$.next(realtor);
    }));
  }

  ngOnInit(): void {
    // this.realtors$ = this.realtorService.getAllRealtors().pipe(
    //   tap(realtors => {
    //     if (!this.realtorSelected$.getValue() && realtors.length > 0) {
    //       this.realtorSelected$.next(realtors[0]);
    //     }
    //   })
    // );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public selectRealtors(realtor: Message) {
    this.navigate({realtor: realtor.id});
  }
}
