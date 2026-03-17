import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { of } from 'rxjs';
import { ConsoleLoggerService } from '@internal/logging';
@Component({
  selector: 'app-mfe1',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = signal('mfe1');
  bla = of(1).pipe(map((a) => 2));

  constructor(private readonly logger: ConsoleLoggerService) {
    this.logger.log('Hello from mfe1 via internal library service');
    this.bla.subscribe(console.warn);
  }
}
