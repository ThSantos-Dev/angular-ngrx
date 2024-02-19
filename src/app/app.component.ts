import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import * as LayoutComponents from '@components/layout';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, LayoutComponents.HeaderComponent, LayoutComponents.FooterComponent],
})
export class AppComponent {
  constructor() {}
}
