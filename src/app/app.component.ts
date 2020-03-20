import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Inbox MA';

  version = environment.appVersion;

  buildTime = environment.buildTime;

  ngOnInit() {
    const greetingMessage = `Welcome to MeileursAgents! v${this.version} - build du ${this.buildTime.toString()}`;
    console.log(greetingMessage);
  }
}
