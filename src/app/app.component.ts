import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private platform: Platform,
    
   // private splashScreen: SplashScreen,
    //private statusBar: StatusBar,
    private router: Router
   ) {
    this.initializeApp();
  }
  initializeApp()
  {
    this.platform.ready().then(() =>{
      //this.statusBar.styleDefault();
      //this.splashScreen.hide();
    // Set new Home page
this.router.navigateByUrl("home");
// Exit App on back button click from Home page
this.platform.backButton.subscribeWithPriority(0, () => {
if (window.location.pathname == "/home") {
 navigator['app'].exitApp();
}
//GO TO HOME PAGE FROM OTHER PAGES
if (window.location.pathname !== "/home") {
  this.router.navigateByUrl("home");
}
});

});
  }
}
