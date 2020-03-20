import { BehaviorSubject } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';

export abstract class NavigateWithQueryParams {
  public constructor(
   public router: Router,
   public route: ActivatedRoute) {
   }

  navigate(params, options = {}) {
    const currentParams = this.route.queryParams as BehaviorSubject<Params>;
    this.router.navigate([], { queryParams: Object.assign({}, currentParams.getValue(), params), relativeTo: this.route, ...options});
  }
}
