import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-mfe1',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = signal('mfe1');
  test = of("test");
}
