import { NgModule } from '@angular/core';
import { NgbModule, NgbDropdownModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        NgbDropdownModule,
        NgbModule,
        FontAwesomeModule
    ],
    exports: [
        NgbDropdownModule,
        NgbModule,
        FontAwesomeModule
    ],
    declarations: [
    ],
    providers: [
      NgbActiveModal
    ]
})
export class SharedModule { }
