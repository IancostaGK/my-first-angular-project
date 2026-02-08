import { Component, signal } from '@angular/core';
import { FrameworksPageComponent } from './frameworks/frameworks-page.component';

@Component({
  selector: 'app-root',
  imports: [FrameworksPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-first-angular-project');
}
