import { Component, OnInit, OnDestroy } from '@angular/core';
import { faEnvelope, faPhoneAlt, faSms, faQuestion, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Subscription, of } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RealtorService } from 'src/app/shared/services/realtors.service';
import { NavigateWithQueryParams } from 'src/app/shared/model/navigation';
import { Message } from 'src/app/shared/model/message';
import { distinctUntilChanged, switchMap, tap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-realtors-list',
  templateUrl: './realtors-list.component.html',
  styleUrls: ['./realtors-list.component.sass']
})
export class RealtorsListComponent extends NavigateWithQueryParams implements OnInit, OnDestroy {
  public faEnvelope = faEnvelope;
  public faEnvelopeOpen = faEnvelopeOpen;
  public faPhoneAlt = faPhoneAlt;
  public faSms = faSms;
  public faQuestion = faQuestion;
  public messageUnread = 3;
  public messageSelected$: BehaviorSubject<Message> = new BehaviorSubject<Message>(undefined);
  public messages$: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  public realtor$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
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
          this.realtor$.next(queryParams.realtor);
          return queryParams.message ? this.realtorService.getMessageFromRealtor(queryParams.realtor, queryParams.message) : of(undefined);
        } else {
          return of(undefined);
        }
      })
    ).subscribe(this.messageSelected$));
  }

  ngOnInit(): void {
    this.subscription.add(this.realtor$.pipe(
      distinctUntilChanged(),
      filter(realtor => !!realtor),
      switchMap(realtor => this.realtorService.getAllMessagesFromRealtor(realtor).pipe(
        tap(messages => {
          if (!this.messageSelected$.getValue() && messages.length > 0) {
            this.messageSelected$.next(messages[0]);
          }
        })
      )),
      map((messages: Message[]) => {
        return messages.sort((a, b) => Date.parse(b.date.toISOString()) - Date.parse(a.date.toISOString()));
      })
    ).subscribe(this.messages$));

    this.messageSelected$.subscribe((message: Message) => {
      console.log(message);
      // TODO : Modifier en lu le message
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public selectMessage(message: Message) {
    this.navigate({message: message.id});
  }
}
