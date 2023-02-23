import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { BasicFormComponent } from './basic-form/basic-form.component';

@Component({
  standalone: true,
  imports: [BasicFormComponent, RouterModule],
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
}
