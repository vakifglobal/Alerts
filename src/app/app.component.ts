import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
      {
        'url': 'alerts',
        'title': 'Alerts',
        'theme': 'listViews',
        'icon': 'alert-circle',
        'singlePage': false
      },
      {
        'url': 'loading',
        'title': 'Loading',
        'theme': 'listViews',
        'icon': 'refresh-circle',
        'singlePage': false
      },
      {
        'url': 'toast',
        'title': 'Toast',
        'theme': 'listViews',
        'icon': 'information-circle',
        'singlePage': false
      },
      {
        'url': 'action-sheet',
        'title': 'Action Sheet',
        'theme': 'listViews',
        'icon': 'layers',
        'singlePage': false
      },
  ]
  headerMenuItem = {
    'backgroundColor': '#000',
    'image': 'assets/imgs/logo/vakif.png',
    'title': 'Ionic Starter'
  }

  constructor(
    private navController: NavController
  ) {}

  openPage(page) {
    this.navController.navigateRoot([page.url], {});
  }
}
